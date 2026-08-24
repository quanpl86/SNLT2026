const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = 5173;
const ROOT_DIR = path.resolve(__dirname, '..');
const STUDIO_DIR = __dirname;
const PUBLIC_DIR = path.join(STUDIO_DIR, 'public');
const SMOKE_DIR = path.join(STUDIO_DIR, '_smoke_test');

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mov': 'video/quicktime',
    '.mp4': 'video/mp4',
    '.md': 'text/markdown; charset=utf-8'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

function normalizeHpFolder(hp) {
  if (!hp) return 'HP01';
  if (hp === 'HP1') return 'HP01';
  if (hp === 'HP2') return 'HP02';
  if (hp === 'HP3') return 'HP03';
  if (hp === 'HP4') return 'HP04';
  return hp;
}

function buildDynamicIndex() {
  const dataDir = path.join(STUDIO_DIR, 'review_data');
  const modules = [];

  if (!fs.existsSync(dataDir)) return { program: "SNLT2026", modules: [] };

  const hpDirs = fs.readdirSync(dataDir).filter(f => {
    return fs.statSync(path.join(dataDir, f)).isDirectory() && f.startsWith('HP');
  }).sort();

  hpDirs.forEach(hpFolder => {
    const hpPath = path.join(dataDir, hpFolder);
    const lessonDirs = fs.readdirSync(hpPath).filter(f => {
      return fs.statSync(path.join(hpPath, f)).isDirectory() && f.startsWith('B');
    }).sort();

    let hpTitle = hpFolder;
    const lessons = [];

    lessonDirs.forEach(bFolder => {
      const manifestPath = path.join(hpPath, bFolder, 'LESSON_MANIFEST.json');
      let lessonTitle = bFolder;
      if (fs.existsSync(manifestPath)) {
        try {
          const mData = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          if (mData.hp_title) hpTitle = mData.hp_title;
          if (mData.lesson_title) lessonTitle = mData.lesson_title;
        } catch (e) {}
      }
      lessons.push({
        id: bFolder,
        title: lessonTitle,
        hp: hpFolder,
        manifest: `review_data/${hpFolder}/${bFolder}/LESSON_MANIFEST.json`
      });
    });

    if (lessons.length > 0) {
      modules.push({
        id: hpFolder,
        title: hpTitle,
        lessons: lessons
      });
    }
  });

  return {
    program: "SNLT2026",
    program_title: "Sáng tạo & Lập trình 3D",
    schema_version: "1.0",
    modules: modules
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // CORS headers for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Canonical-Filename, X-Test-ID, X-Media-ID, X-Lesson, X-Smoke-Mode, X-Retake');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // GET /api/index (Auto-scans review_data/)
  if (req.method === 'GET' && pathname === '/api/index') {
    const dynamicIndex = buildDynamicIndex();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(dynamicIndex, null, 2));
    return;
  }

  // GET /api/manifest?hp=HP1&lesson=B01
  if (req.method === 'GET' && pathname === '/api/manifest') {
    const hp = parsedUrl.searchParams.get('hp') || 'HP1';
    const lesson = parsedUrl.searchParams.get('lesson') || 'B01';
    const manifestPath = path.join(STUDIO_DIR, 'review_data', hp, lesson, 'LESSON_MANIFEST.json');
    if (fs.existsSync(manifestPath)) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(fs.readFileSync(manifestPath));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `LESSON_MANIFEST for ${hp}/${lesson} not found` }));
    }
    return;
  }

  // GET /api/test-plan?hp=HP1&lesson=B01
  if (req.method === 'GET' && pathname === '/api/test-plan') {
    const hp = parsedUrl.searchParams.get('hp') || 'HP1';
    const lesson = parsedUrl.searchParams.get('lesson') || 'B01';
    const testPlanPath = path.join(STUDIO_DIR, 'review_data', hp, lesson, 'TEST_PLAN.json');
    if (fs.existsSync(testPlanPath)) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(fs.readFileSync(testPlanPath));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `TEST_PLAN for ${hp}/${lesson} not found` }));
    }
    return;
  }

  // GET /api/media-plan?hp=HP1&lesson=B01
  if (req.method === 'GET' && pathname === '/api/media-plan') {
    const hp = parsedUrl.searchParams.get('hp') || 'HP1';
    const lesson = parsedUrl.searchParams.get('lesson') || 'B01';
    const mediaPlanPath = path.join(STUDIO_DIR, 'review_data', hp, lesson, 'MEDIA_PLAN.json');
    if (fs.existsSync(mediaPlanPath)) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(fs.readFileSync(mediaPlanPath));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `MEDIA_PLAN for ${hp}/${lesson} not found` }));
    }
    return;
  }

  // GET /api/results?hp=HP1&lesson=B01
  if (req.method === 'GET' && pathname === '/api/results') {
    const hp = parsedUrl.searchParams.get('hp') || 'HP1';
    const lesson = parsedUrl.searchParams.get('lesson') || 'B01';
    const isSmoke = parsedUrl.searchParams.get('smoke') === 'true';

    const resultsPath = isSmoke
      ? path.join(SMOKE_DIR, 'RESULTS', 'HUMAN_TEST_RESULT.json')
      : path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, '03_HUMAN_TEST_REVIEW', '02_HUMAN_NOTES', 'HUMAN_TEST_RESULT.json');

    if (fs.existsSync(resultsPath)) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(fs.readFileSync(resultsPath));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ lesson, hp, is_smoke: isSmoke, results: {}, findings: [], media_uploads: {} }));
    }
    return;
  }

  // POST /api/upload-media
  if (req.method === 'POST' && pathname === '/api/upload-media') {
    const hp = req.headers['x-hp'] || 'HP1';
    const lesson = req.headers['x-lesson'] || 'B01';
    const canonicalName = decodeURIComponent(req.headers['x-canonical-filename'] || 'evidence_RAW.png');
    const testId = req.headers['x-test-id'] || 'GENERAL';
    const mediaId = req.headers['x-media-id'] || 'GENERAL';
    const isSmoke = req.headers['x-smoke-mode'] === 'true';
    const isRetake = req.headers['x-retake'] === 'true';

    const isVideo = canonicalName.endsWith('.mov') || canonicalName.endsWith('.mp4');
    const subFolder = isVideo ? 'VIDEOS' : 'IMAGES';

    let targetDir = isSmoke
      ? path.join(SMOKE_DIR, subFolder)
      : path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, '03_HUMAN_TEST_REVIEW', '03_EVIDENCE_RAW', subFolder);

    ensureDir(targetDir);

    let finalFileName = canonicalName;
    let targetFilePath = path.join(targetDir, finalFileName);

    if (fs.existsSync(targetFilePath) && isRetake) {
      const ext = path.extname(canonicalName);
      const base = path.basename(canonicalName, ext);
      let version = 1;
      while (fs.existsSync(path.join(targetDir, `${base}_RETAKE_${version.toString().padStart(2, '0')}${ext}`))) {
        version++;
      }
      finalFileName = `${base}_RETAKE_${version.toString().padStart(2, '0')}${ext}`;
      targetFilePath = path.join(targetDir, finalFileName);
    }

    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(targetFilePath, buffer);

      const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');

      const resultsPath = isSmoke
        ? path.join(SMOKE_DIR, 'RESULTS', 'HUMAN_TEST_RESULT.json')
        : path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, '03_HUMAN_TEST_REVIEW', '02_HUMAN_NOTES', 'HUMAN_TEST_RESULT.json');

      ensureDir(path.dirname(resultsPath));

      let currentData = { lesson, hp, is_smoke: isSmoke, results: {}, findings: [], media_uploads: {} };
      if (fs.existsSync(resultsPath)) {
        try {
          currentData = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
        } catch (e) {}
      }

      if (!currentData.media_uploads) currentData.media_uploads = {};
      const relPath = isSmoke
        ? `00_REVIEW_STUDIO/_smoke_test/${subFolder}/${finalFileName}`
        : `03_HUMAN_TEST_REVIEW/03_EVIDENCE_RAW/${subFolder}/${finalFileName}`;

      currentData.media_uploads[mediaId] = {
        canonical_filename: finalFileName,
        original_canonical: canonicalName,
        test_id: testId,
        media_id: mediaId,
        sha256: sha256,
        size_bytes: buffer.length,
        captured_at: new Date().toISOString(),
        relative_path: relPath,
        is_smoke: isSmoke,
        is_retake: isRetake,
        status: 'RAW_EVIDENCE'
      };

      fs.writeFileSync(resultsPath, JSON.stringify(currentData, null, 2), 'utf8');

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({
        success: true,
        message: `File saved to ${finalFileName}`,
        filename: finalFileName,
        sha256: sha256,
        size_bytes: buffer.length,
        path: relPath
      }));
    });
    return;
  }

  // POST /api/save-result
  if (req.method === 'POST' && pathname === '/api/save-result') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const hp = payload.hp || 'HP1';
        const lesson = payload.lesson || 'B01';
        const isSmoke = payload.is_smoke === true;

        const resultsPath = isSmoke
          ? path.join(SMOKE_DIR, 'RESULTS', 'HUMAN_TEST_RESULT.json')
          : path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, '03_HUMAN_TEST_REVIEW', '02_HUMAN_NOTES', 'HUMAN_TEST_RESULT.json');

        ensureDir(path.dirname(resultsPath));

        let currentData = { lesson, hp, is_smoke: isSmoke, results: {}, findings: [], media_uploads: {} };
        if (fs.existsSync(resultsPath)) {
          try {
            currentData = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
          } catch (e) {}
        }

        if (payload.test_id) {
          if (!currentData.results) currentData.results = {};
          currentData.results[payload.test_id] = {
            status: payload.status,
            note: payload.note || '',
            technical_status: payload.technical_status || 'NOT_REVIEWED',
            learning_media_status: payload.learning_media_status || 'NOT_REVIEWED',
            updated_at: new Date().toISOString()
          };
        }

        if (payload.finding) {
          if (!currentData.findings) currentData.findings = [];
          currentData.findings.push({
            id: payload.finding.id || `HDC-${lesson}-F${(currentData.findings.length + 1).toString().padStart(2, '0')}`,
            test_id: payload.test_id,
            category: payload.finding.category || 'PROJECT',
            severity: payload.finding.severity || 'BLOCKER',
            actual: payload.finding.actual || '',
            expected: payload.finding.expected || '',
            reproduction: payload.finding.reproduction || '',
            created_at: new Date().toISOString()
          });
        }

        fs.writeFileSync(resultsPath, JSON.stringify(currentData, null, 2), 'utf8');

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, data: currentData }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // POST /api/check-e2e-status
  if (req.method === 'POST' && pathname === '/api/check-e2e-status') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const hp = payload.hp || 'HP1';
        const lesson = payload.lesson || 'B01';
        const isSmoke = payload.is_smoke === true;

        const destDir = isSmoke
          ? path.join(SMOKE_DIR, 'E2E_WORKING_COPY')
          : path.join(process.env.HOME || '/Users/mac', 'Desktop', `${lesson}_HUMAN_TEST_COPY`);

        const projectGodot = path.join(destDir, 'project.godot');
        const exists = fs.existsSync(destDir) && fs.existsSync(projectGodot);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          exists: exists,
          path: destDir,
          is_smoke: isSmoke
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // POST /api/prepare-e2e-copy
  if (req.method === 'POST' && pathname === '/api/prepare-e2e-copy') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const hp = payload.hp || 'HP1';
        const lesson = payload.lesson || 'B01';
        const isSmoke = payload.is_smoke === true;
        const forceOverwrite = payload.overwrite === true;

        const sourceDir = path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}-STUDENT_STARTER`);
        const destDir = isSmoke
          ? path.join(SMOKE_DIR, 'E2E_WORKING_COPY')
          : path.join(process.env.HOME || '/Users/mac', 'Desktop', `${lesson}_HUMAN_TEST_COPY`);

        if (fs.existsSync(destDir) && !forceOverwrite) {
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({
            already_exists: true,
            path: destDir,
            message: 'E2E Working Copy already exists'
          }));
          return;
        }

        if (fs.existsSync(destDir)) {
          deleteFolderRecursive(destDir);
        }

        ensureDir(path.dirname(destDir));
        fs.cpSync(sourceDir, destDir, { recursive: true });

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          success: true,
          source: `SNLT2026-${normalizeHpFolder(hp)}-${lesson}/SNLT2026-${normalizeHpFolder(hp)}-${lesson}-STUDENT_STARTER`,
          destination: destDir,
          is_smoke: isSmoke,
          created_at: new Date().toISOString()
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // POST /api/open-folder (Strict Manifest Target-Based Open)
  if (req.method === 'POST' && pathname === '/api/open-folder') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const targetId = payload.target_id || 'PROJECT_BASIC';
        const hp = payload.hp || 'HP1';
        const lesson = payload.lesson || 'B01';
        const isSmoke = payload.is_smoke === true;

        let absPath = '';

        if (targetId === 'PROJECT_BASIC') {
          absPath = path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}-PROJECT_BASIC`);
        } else if (targetId === 'STUDENT_STARTER') {
          absPath = path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}-STUDENT_STARTER`);
        } else if (targetId === 'E2E_WORKING_COPY') {
          absPath = isSmoke
            ? path.join(SMOKE_DIR, 'E2E_WORKING_COPY')
            : path.join(process.env.HOME || '/Users/mac', 'Desktop', `${lesson}_HUMAN_TEST_COPY`);
        } else if (targetId === 'GLOBAL_PREFLIGHT') {
          absPath = path.join(ROOT_DIR, `SNLT2026-${normalizeHpFolder(hp)}-${lesson}`);
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: `Invalid target_id: ${targetId}` }));
          return;
        }

        if (!fs.existsSync(absPath)) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: `Folder does not exist yet: ${absPath}` }));
          return;
        }

        const { exec } = require('child_process');
        const command = process.platform === 'darwin'
          ? `open "${absPath}"`
          : (process.platform === 'win32' ? `explorer "${absPath}"` : `xdg-open "${absPath}"`);

        exec(command, (err) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ success: true, opened_path: absPath }));
          }
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // --- STATIC FILE SERVER ---
  let reqPath = pathname;
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(PUBLIC_DIR, reqPath);

  if (!fs.existsSync(filePath)) {
    const rawWorkspacePath = path.join(ROOT_DIR, reqPath);
    if (fs.existsSync(rawWorkspacePath) && fs.statSync(rawWorkspacePath).isFile()) {
      filePath = rawWorkspacePath;
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n==================================================`);
  console.log(`🚀 SNLT REVIEW STUDIO IS RUNNING LOCALLY!`);
  console.log(`👉 Open Browser: http://localhost:5173`);
  console.log(`👉 Alternative:  http://127.0.0.1:5173`);
  console.log(`==================================================\n`);
});
