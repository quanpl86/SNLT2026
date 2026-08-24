let state = {
  currentModule: 'HP1',
  currentLesson: 'B01',
  activeTarget: 'ALL',
  activeTestId: null,
  mode: 'TEST', // 'TEST' or 'REVIEW'
  smokeMode: false, // Official Canonical Mode
  manifest: null,
  testPlan: null,
  mediaPlan: null,
  results: { results: {}, findings: [], media_uploads: {} }
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function setupEventListeners() {
  document.getElementById('mode-test-btn').addEventListener('click', () => setMode('TEST'));
  document.getElementById('mode-review-btn').addEventListener('click', () => setMode('REVIEW'));
  
  const moduleSelect = document.getElementById('module-select');
  if (moduleSelect) {
    moduleSelect.addEventListener('change', (e) => {
      state.currentModule = e.target.value;
      populateLessonsForModule(state.currentModule);
      loadLesson(state.currentModule, state.currentLesson);
    });
  }

  const lessonSelect = document.getElementById('lesson-select');
  if (lessonSelect) {
    lessonSelect.addEventListener('change', (e) => {
      state.currentLesson = e.target.value;
      loadLesson(state.currentModule, state.currentLesson);
    });
  }

  const reloadBtn = document.getElementById('reload-data-btn');
  if (reloadBtn) {
    reloadBtn.addEventListener('click', async () => {
      reloadBtn.disabled = true;
      reloadBtn.textContent = '⏳ ĐANG TẢI...';
      await loadIndex();
      await loadLesson(state.currentModule, state.currentLesson);
      reloadBtn.textContent = '🔄 LÀM MỚI DỮ LIỆU';
      reloadBtn.disabled = false;
    });
  }

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      themeBtn.textContent = newTheme === 'light' ? '☀️ SÁNG' : '🌙 TỐI';
    });
  }
}

function setMode(mode) {
  state.mode = mode;
  document.getElementById('mode-test-btn').classList.toggle('active', mode === 'TEST');
  document.getElementById('mode-review-btn').classList.toggle('active', mode === 'REVIEW');
  renderTestCard(state.activeTestId);
}

let indexDataCache = null;

async function initApp() {
  setupEventListeners();
  await loadIndex();
  await loadLesson(state.currentModule, state.currentLesson);
}

async function loadIndex() {
  try {
    const res = await fetch('/api/index');
    indexDataCache = await res.json();

    const moduleSelect = document.getElementById('module-select');
    moduleSelect.innerHTML = '';
    
    if (indexDataCache.modules && indexDataCache.modules.length > 0) {
      indexDataCache.modules.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = `${m.id} — ${m.title}`;
        moduleSelect.appendChild(opt);
      });
      state.currentModule = indexDataCache.modules[0].id;
      moduleSelect.value = state.currentModule;
      populateLessonsForModule(state.currentModule);
    }
  } catch (err) {
    console.error('Failed to load index:', err);
  }
}

function populateLessonsForModule(moduleId) {
  if (!indexDataCache || !indexDataCache.modules) return;
  const modObj = indexDataCache.modules.find(m => m.id === moduleId);
  const lessonSelect = document.getElementById('lesson-select');
  lessonSelect.innerHTML = '';

  if (modObj && modObj.lessons && modObj.lessons.length > 0) {
    modObj.lessons.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.id;
      opt.textContent = `${l.id} — ${l.title}`;
      lessonSelect.appendChild(opt);
    });
    state.currentLesson = modObj.lessons[0].id;
    lessonSelect.value = state.currentLesson;
  }
}

function validateSchema(manifest, testPlan, mediaPlan) {
  const errors = [];
  if (!manifest || manifest.error) {
    errors.push("Thiếu hoặc lỗi tệp `LESSON_MANIFEST.json`");
  } else {
    if (!manifest.lesson_id) errors.push("Thiếu thuộc tính `lesson_id` trong `LESSON_MANIFEST.json`");
    if (!manifest.lesson_title) errors.push("Thiếu thuộc tính `lesson_title` trong `LESSON_MANIFEST.json`");
    if (!manifest.targets || !manifest.targets.PROJECT_BASIC) errors.push("Thiếu khai báo target `PROJECT_BASIC` trong `LESSON_MANIFEST.json`");
    if (!manifest.targets || !manifest.targets.STUDENT_STARTER) errors.push("Thiếu khai báo target `STUDENT_STARTER` trong `LESSON_MANIFEST.json`");
  }

  if (!testPlan || testPlan.error) {
    errors.push("Thiếu hoặc lỗi tệp `TEST_PLAN.json`");
  } else {
    if (!testPlan.tests || !Array.isArray(testPlan.tests)) errors.push("Thiếu mảng `tests` trong `TEST_PLAN.json`");
  }

  if (!mediaPlan || mediaPlan.error) {
    errors.push("Thiếu hoặc lỗi tệp `MEDIA_PLAN.json`");
  } else {
    if (!mediaPlan.media_items || !Array.isArray(mediaPlan.media_items)) errors.push("Thiếu mảng `media_items` trong `MEDIA_PLAN.json`");
  }

  return errors;
}

function renderSchemaErrorCard(lessonId, errors) {
  const container = document.getElementById('test-card-container');
  container.innerHTML = `
    <div class="card schema-error-card">
      <div class="card-header" style="border-bottom-color: var(--accent-red);">
        <span class="card-target-tag" style="color: var(--accent-red); border-color: rgba(220,38,38,0.3); background: var(--accent-red-light);">SCHEMA ERROR</span>
        <h2 class="card-title" style="color: var(--accent-red);">⚠️ ${lessonId} — SCHEMA INVALID</h2>
      </div>
      <p style="font-size: 14px; font-weight: 600; margin-bottom: 16px; color: var(--text-primary);">
        Không thể bắt đầu Human Test. Vui lòng kiểm tra các tệp JSON đặc tả của ChatGPT trong thư mục <code>review_data/${state.currentModule}/${lessonId}/</code>:
      </p>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${errors.map(e => `
          <li style="background: var(--accent-red-light); color: var(--accent-red); border: 1px solid rgba(220,38,38,0.2); padding: 10px 14px; border-radius: 8px; font-size: 13px; font-weight: 700;">
            ❌ ${e}
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

async function loadLesson(hpId, lessonId) {
  try {
    state.currentModule = hpId || state.currentModule || 'HP1';
    state.currentLesson = lessonId || state.currentLesson || 'B01';

    const [manifestRes, testPlanRes, mediaPlanRes] = await Promise.all([
      fetch(`/api/manifest?hp=${state.currentModule}&lesson=${state.currentLesson}`),
      fetch(`/api/test-plan?hp=${state.currentModule}&lesson=${state.currentLesson}`),
      fetch(`/api/media-plan?hp=${state.currentModule}&lesson=${state.currentLesson}`)
    ]);

    state.manifest = await manifestRes.json();
    state.testPlan = await testPlanRes.json();
    state.mediaPlan = await mediaPlanRes.json();

    const schemaErrors = validateSchema(state.manifest, state.testPlan, state.mediaPlan);
    if (schemaErrors.length > 0) {
      renderSchemaErrorCard(state.currentLesson, schemaErrors);
      return;
    }

    await loadResults();

    setupTargetFilters();

    if (state.testPlan.tests && state.testPlan.tests.length > 0) {
      state.activeTestId = state.testPlan.tests[0].test_id;
    }

    renderSidebar();
    renderTestCard(state.activeTestId);
  } catch (err) {
    console.error('Failed to load lesson:', err);
  }
}

async function loadResults() {
  try {
    const res = await fetch(`/api/results?hp=${state.currentModule}&lesson=${state.currentLesson}&smoke=${state.smokeMode}`);
    state.results = await res.json();
    updateProgress();
  } catch (err) {
    console.error('Failed to load results:', err);
  }
}

function updateProgress() {
  const tests = state.testPlan ? state.testPlan.tests : [];
  const officialTests = tests.filter(t => t.test_id !== 'HDC-00');
  const total = officialTests.length;
  
  let passCount = 0;
  if (state.results && state.results.results) {
    officialTests.forEach(t => {
      if (state.results.results[t.test_id] && state.results.results[t.test_id].status === 'PASS') {
        passCount++;
      }
    });
  }

  const percent = total > 0 ? Math.round((passCount / total) * 100) : 0;

  document.getElementById('overall-progress-text').textContent = `${passCount}/${total} PASS`;
  document.getElementById('overall-percent').textContent = `${percent}%`;
  document.getElementById('overall-progress-bar').style.width = `${percent}%`;

  const findings = state.results ? (state.results.findings || []) : [];
  document.getElementById('findings-count').textContent = `${findings.length} Issues`;
}

function setupTargetFilters() {
  const container = document.getElementById('target-filters');
  container.innerHTML = '';

  const targets = ['ALL', 'PROJECT_BASIC', 'STUDENT_STARTER', 'E2E_WORKING_COPY'];
  targets.forEach(tgt => {
    const tab = document.createElement('button');
    tab.className = `target-tab ${tgt === state.activeTarget ? 'active' : ''}`;
    tab.textContent = tgt === 'ALL' ? 'TẤT CẢ (18 TEST + 1 GATE)' : tgt.replace('_WORKING_COPY', '');
    tab.onclick = () => {
      state.activeTarget = tgt;
      setupTargetFilters();
      renderSidebar();
    };
    container.appendChild(tab);
  });
}

function renderSidebar() {
  const testList = document.getElementById('test-list');
  testList.innerHTML = '';

  if (!state.testPlan || !state.testPlan.tests) return;

  const filteredTests = state.testPlan.tests.filter(t => {
    if (state.activeTarget === 'ALL') return true;
    return t.target === state.activeTarget;
  });

  filteredTests.forEach(t => {
    const item = document.createElement('div');
    item.className = `test-item ${t.test_id === state.activeTestId ? 'active' : ''}`;

    const resultObj = state.results.results ? state.results.results[t.test_id] : null;
    const status = resultObj ? resultObj.status : 'PENDING';

    let iconHtml = '⏳';
    if (status === 'PASS') iconHtml = '✅';
    if (status === 'FAIL') iconHtml = '❌';

    let badgeClass = 'pb';
    if (t.test_id === 'HDC-00') badgeClass = 'hdc';
    if (t.target === 'STUDENT_STARTER') badgeClass = 'ss';
    if (t.target === 'E2E_WORKING_COPY') badgeClass = 'e2e';

    item.innerHTML = `
      <div class="test-item-left">
        <span class="test-badge ${badgeClass}">${t.test_id}</span>
        <span class="test-title">${t.title}</span>
      </div>
      <span class="status-icon ${status.toLowerCase()}">${iconHtml}</span>
    `;

    item.onclick = () => {
      state.activeTestId = t.test_id;
      renderSidebar();
      renderTestCard(t.test_id);
    };

    testList.appendChild(item);
  });
}

async function renderTestCard(testId) {
  const container = document.getElementById('test-card-container');
  container.innerHTML = '';

  if (!state.testPlan || !state.testPlan.tests) return;

  const test = state.testPlan.tests.find(t => t.test_id === testId);
  if (!test) return;

  const card = document.createElement('div');
  card.className = 'card';

  const resultObj = state.results.results ? (state.results.results[testId] || {}) : {};
  const currentStatus = resultObj.status || null;
  const currentNote = resultObj.note || '';

  // Target Tag
  const targetTag = document.createElement('div');
  targetTag.className = 'card-target-tag';
  targetTag.textContent = test.target;

  // Title
  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = `${test.test_id} — ${test.title}`;

  // Header Row with Path & Action Controls
  const pathRow = document.createElement('div');
  pathRow.style.display = 'flex';
  pathRow.style.alignItems = 'center';
  pathRow.style.gap = '12px';
  pathRow.style.marginTop = '8px';
  pathRow.style.flexWrap = 'wrap';

  const path = document.createElement('div');
  path.className = 'card-path';
  path.style.marginTop = '0';
  path.textContent = `📍 ${test.project_path}`;

  pathRow.appendChild(path);

  // OPEN / PREPARE CONTROLS ACCORDING TO ARCHITECTURAL DESIGN
  if (test.target === 'E2E_WORKING_COPY') {
    // Check E2E status
    const statusRes = await fetch('/api/check-e2e-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lesson: state.currentLesson, is_smoke: state.smokeMode })
    });
    const statusData = await statusRes.json();

    const e2eBox = document.createElement('div');
    e2eBox.style.display = 'flex';
    e2eBox.style.alignItems = 'center';
    e2eBox.style.gap = '8px';

    if (!statusData.exists) {
      const prepBtn = document.createElement('button');
      prepBtn.className = 'open-folder-btn prep-e2e-btn';
      prepBtn.innerHTML = `🧪 CHUẨN BỊ BẢN E2E`;
      prepBtn.title = 'Tạo bản sao B01_HUMAN_TEST_COPY từ Student Starter';
      prepBtn.onclick = async () => {
        const prepRes = await fetch('/api/prepare-e2e-copy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lesson: state.currentLesson, is_smoke: state.smokeMode, overwrite: false })
        });
        const prepData = await prepRes.json();
        if (prepData.success || prepData.already_exists) {
          renderTestCard(testId);
        }
      };
      e2eBox.appendChild(prepBtn);
    } else {
      const openBtn = document.createElement('button');
      openBtn.className = 'open-folder-btn';
      openBtn.innerHTML = `📂 MỞ THƯ MỤC E2E`;
      openBtn.onclick = () => openFolder('E2E_WORKING_COPY');

      const recreateBtn = document.createElement('button');
      recreateBtn.className = 'open-folder-btn recreate-e2e-btn';
      recreateBtn.innerHTML = `🔄 TẠO LẠI BẢN E2E`;
      recreateBtn.onclick = async () => {
        const firstChoice = confirm('B01_HUMAN_TEST_COPY đã tồn tại!\n\nBạn có muốn TẠO LẠI từ Student Starter không?');
        if (!firstChoice) return;

        const secondChoice = confirm('⚠️ CẢNH BÁO XÁC NHẬN LẦN 2:\n\nTạo lại sẽ XÓA TOÀN BỘ dữ liệu học sinh đang sửa dở trong E2E Working Copy!\n\nBạn có chắc chắn muốn tiếp tục?');
        if (!secondChoice) return;

        await fetch('/api/prepare-e2e-copy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lesson: state.currentLesson, is_smoke: state.smokeMode, overwrite: true })
        });
        renderTestCard(testId);
      };

      e2eBox.appendChild(openBtn);
      e2eBox.appendChild(recreateBtn);
    }

    pathRow.appendChild(e2eBox);
  } else {
    // Standard targets (PROJECT_BASIC / STUDENT_STARTER / HDC-00)
    const openBtn = document.createElement('button');
    openBtn.className = 'open-folder-btn';
    openBtn.innerHTML = `📂 MỞ THƯ MỤC`;
    openBtn.onclick = () => openFolder(test.test_id === 'HDC-00' ? 'GLOBAL_PREFLIGHT' : test.target);
    pathRow.appendChild(openBtn);
  }

  const header = document.createElement('div');
  header.className = 'card-header';
  header.appendChild(targetTag);
  header.appendChild(title);
  header.appendChild(pathRow);

  // Notice Banner for E2E Working Copy Status
  if (test.target === 'E2E_WORKING_COPY') {
    const statusRes = await fetch('/api/check-e2e-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lesson: state.currentLesson, is_smoke: state.smokeMode })
    });
    const statusData = await statusRes.json();

    const infoBanner = document.createElement('div');
    infoBanner.style.marginTop = '12px';
    infoBanner.style.padding = '10px 14px';
    infoBanner.style.borderRadius = '8px';
    infoBanner.style.fontSize = '12px';
    infoBanner.style.fontFamily = 'var(--font-mono)';

    if (statusData.exists) {
      infoBanner.style.background = 'var(--accent-green-light)';
      infoBanner.style.border = '1px solid rgba(22, 163, 74, 0.3)';
      infoBanner.style.color = 'var(--accent-green)';
      infoBanner.innerHTML = `
        <strong>✅ E2E Working Copy đã sẵn sàng!</strong><br/>
        <span>Source: SNLT2026-HP01-${state.currentLesson}-STUDENT_STARTER</span><br/>
        <span>Destination: ${statusData.path}</span>
      `;
    } else {
      infoBanner.style.background = 'var(--accent-amber-light)';
      infoBanner.style.border = '1px solid rgba(217, 119, 6, 0.3)';
      infoBanner.style.color = 'var(--accent-amber)';
      infoBanner.innerHTML = `
        <strong>⚠️ Chưa có bản sao E2E Working Copy!</strong><br/>
        <span>Vui lòng nhấn nút [🧪 CHUẨN BỊ BẢN E2E] để tạo bản sao không ảnh hưởng dữ liệu gốc.</span>
      `;
    }
    header.appendChild(infoBanner);
  }

  card.appendChild(header);

  // Render Action Steps
  const stepsBlock = document.createElement('div');
  stepsBlock.className = 'section-block';
  stepsBlock.innerHTML = `
    <div class="section-title">📋 THAO TÁC THỰC HIỆN</div>
    <ul class="step-list">
      ${test.action_steps.map(s => `<li>${s}</li>`).join('')}
    </ul>
  `;
  card.appendChild(stepsBlock);

  // Render Expected Results
  const expectedBlock = document.createElement('div');
  expectedBlock.className = 'section-block';
  expectedBlock.innerHTML = `
    <div class="section-title">🎯 KẾT QUẢ KỲ VỌNG</div>
    <ul class="expected-list">
      ${test.expected_results.map(r => `<li>${r}</li>`).join('')}
    </ul>
  `;
  card.appendChild(expectedBlock);

  // Render Media Upload Dropzones
  const mediaBlock = document.createElement('div');
  mediaBlock.className = 'section-block';
  mediaBlock.innerHTML = `<div class="section-title">📷 BẰNG CHỨNG MEDIA RAW CẦN CHỤP/QUAY</div>`;

  const dropzonesContainer = document.createElement('div');
  dropzonesContainer.className = 'dropzone-container';

  if (test.media_ids && test.media_ids.length > 0) {
    test.media_ids.forEach(mId => {
      const mediaItem = state.mediaPlan.media_items.find(m => m.media_id === mId);
      if (mediaItem) {
        const dropzoneBox = createDropzone(mediaItem, testId);
        dropzonesContainer.appendChild(dropzoneBox);
      }
    });
  } else {
    dropzonesContainer.innerHTML = `<div style="font-size:12px; color:var(--text-muted); font-style:italic;">(Test này không bắt buộc gửi ảnh/video minh chứng)</div>`;
  }
  mediaBlock.appendChild(dropzonesContainer);
  card.appendChild(mediaBlock);

  // Render Evaluation & Finding Section
  const evalBlock = document.createElement('div');
  evalBlock.className = 'section-block';
  evalBlock.innerHTML = `<div class="section-title">⚖️ ĐÁNH GIÁ KẾT QUẢ (HUMAN VALIDATION)</div>`;

  const evalBar = document.createElement('div');
  evalBar.className = 'eval-bar';

  const passBtn = document.createElement('button');
  passBtn.className = `eval-btn pass ${currentStatus === 'PASS' ? 'active' : ''}`;
  passBtn.innerHTML = `✅ PASS`;

  const failBtn = document.createElement('button');
  failBtn.className = `eval-btn fail ${currentStatus === 'FAIL' ? 'active' : ''}`;
  failBtn.innerHTML = `❌ FAIL`;

  evalBar.appendChild(passBtn);
  evalBar.appendChild(failBtn);

  const notesArea = document.createElement('textarea');
  notesArea.className = 'notes-area';
  notesArea.placeholder = 'Ghi chú nhận xét hoặc chi tiết nếu có lỗi phát hiện...';
  notesArea.value = currentNote;

  const existingFindings = state.results.findings || [];
  const nextFindingNum = (existingFindings.length + 1).toString().padStart(2, '0');
  const autoFindingId = `HDC-${state.currentLesson}-F${nextFindingNum}`;

  const findingFormBox = document.createElement('div');
  findingFormBox.id = 'finding-form-box';
  findingFormBox.style.display = currentStatus === 'FAIL' ? 'block' : 'none';
  findingFormBox.innerHTML = `
    <div style="margin-top:16px; padding:16px; background:var(--accent-red-light); border:1px solid rgba(239,68,68,0.3); border-radius:10px;">
      <div style="font-size:12px; font-weight:800; color:var(--accent-red); margin-bottom:8px; display:flex; justify-between;">
        <span>🚨 TẠO FINDING LỖI PHÁT HIỆN</span>
        <span style="font-family:var(--font-mono); font-weight:800;">ID: ${autoFindingId}</span>
      </div>
      <div style="display:flex; gap:12px; margin-bottom:8px;">
        <select id="finding-category" style="padding:6px; font-size:12px; border-radius:6px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-primary);">
          <option value="PROJECT">PROJECT CODE/SCENE</option>
          <option value="DOCS">TÀI LIỆU HƯỚNG DẪN</option>
          <option value="MEDIA">CHẤT LƯỢNG MEDIA</option>
        </select>
        <select id="finding-severity" style="padding:6px; font-size:12px; border-radius:6px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-primary);">
          <option value="BLOCKER">BLOCKER</option>
          <option value="CRITICAL">CRITICAL</option>
          <option value="MINOR">MINOR</option>
        </select>
      </div>
      <input type="text" id="finding-actual" placeholder="Thực tế phát hiện (Actual)..." style="width:100%; padding:8px; margin-bottom:6px; border-radius:6px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-primary); font-size:12px;">
      <input type="text" id="finding-expected" placeholder="Kỳ vọng đúng (Expected)..." style="width:100%; padding:8px; margin-bottom:6px; border-radius:6px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-primary); font-size:12px;">
      <textarea id="finding-repro" placeholder="Các bước tái hiện lỗi (Steps to reproduce)..." style="width:100%; height:50px; padding:8px; border-radius:6px; border:1px solid var(--border-color); background:var(--bg-card); color:var(--text-primary); font-size:12px;"></textarea>
    </div>
  `;

  let selectedEval = currentStatus;

  passBtn.onclick = () => {
    selectedEval = 'PASS';
    passBtn.classList.add('active');
    failBtn.classList.remove('active');
    findingFormBox.style.display = 'none';
  };

  failBtn.onclick = () => {
    selectedEval = 'FAIL';
    failBtn.classList.add('active');
    passBtn.classList.remove('active');
    findingFormBox.style.display = 'block';
  };

  evalBlock.appendChild(evalBar);
  evalBlock.appendChild(notesArea);
  evalBlock.appendChild(findingFormBox);
  card.appendChild(evalBlock);

  // Bottom Action Bar
  const actionBar = document.createElement('div');
  actionBar.className = 'action-bar';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'btn-secondary';
  prevBtn.textContent = '⬅️ BÀI TRƯỚC';
  prevBtn.onclick = () => navigateTest(-1);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn-primary';
  nextBtn.textContent = 'LƯU & TIẾP THEO ➡️';
  nextBtn.onclick = async () => {
    if (!selectedEval) {
      alert('Vui lòng chọn đánh giá PASS hoặc FAIL trước khi lưu!');
      return;
    }

    let findingPayload = null;
    if (selectedEval === 'FAIL') {
      findingPayload = {
        id: autoFindingId,
        category: document.getElementById('finding-category').value,
        severity: document.getElementById('finding-severity').value,
        actual: document.getElementById('finding-actual').value,
        expected: document.getElementById('finding-expected').value,
        reproduction: document.getElementById('finding-repro').value
      };
    }

    await fetch('/api/save-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lesson: state.currentLesson,
        is_smoke: state.smokeMode,
        test_id: testId,
        status: selectedEval,
        note: notesArea.value,
        finding: findingPayload
      })
    });

    await loadResults();
    renderSidebar();
    navigateTest(1);
  };

  actionBar.appendChild(prevBtn);
  actionBar.appendChild(nextBtn);
  card.appendChild(actionBar);

  container.appendChild(card);
}

async function openFolder(targetId) {
  try {
    const res = await fetch('/api/open-folder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        target_id: targetId,
        lesson: state.currentLesson,
        is_smoke: state.smokeMode
      })
    });
    const data = await res.json();
    if (!data.success) {
      alert('Không thể mở thư mục: ' + data.error);
    }
  } catch (e) {
    alert('Lỗi mở thư mục: ' + e.message);
  }
}

function createDropzone(mediaItem, testId) {
  const box = document.createElement('div');
  box.style.border = '1px solid var(--border-color)';
  box.style.borderRadius = '10px';
  box.style.padding = '14px';
  box.style.background = 'var(--bg-page)';

  const existingUpload = state.results.media_uploads ? state.results.media_uploads[mediaItem.media_id] : null;

  box.innerHTML = `
    <div style="display:flex; justify-between; align-items:center; margin-bottom:8px;">
      <div style="font-weight:800; font-size:13px; color:var(--text-primary);">📸 ${mediaItem.media_id} — ${mediaItem.canonical_filename}</div>
      <span class="canonical-name-tag">${mediaItem.type.toUpperCase()}</span>
    </div>
    <div style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">🎯 Mục tiêu: ${mediaItem.pedagogical_purpose}</div>
    <div class="dropzone" id="dz-${mediaItem.media_id}">
      <div class="dropzone-icon">📁</div>
      <div class="dropzone-text">Kéo thả tệp <strong>${mediaItem.canonical_filename}</strong> vào đây hoặc click để chọn tệp</div>
    </div>
  `;

  if (existingUpload) {
    const preview = document.createElement('div');
    preview.className = 'media-preview-box';
    const fileUrl = `/${existingUpload.relative_path}`;

    if (mediaItem.type === 'video') {
      preview.innerHTML = `
        <video src="${fileUrl}" controls></video>
        <div class="media-hash-info">
          <span>SHA-256: ${existingUpload.sha256.substring(0, 16)}...</span>
          <span>Kích thước: ${(existingUpload.size_bytes / 1024 / 1024).toFixed(2)} MB</span>
        </div>
      `;
    } else {
      preview.innerHTML = `
        <img src="${fileUrl}" />
        <div class="media-hash-info">
          <span>SHA-256: ${existingUpload.sha256.substring(0, 16)}...</span>
          <span>Kích thước: ${(existingUpload.size_bytes / 1024).toFixed(1)} KB</span>
        </div>
      `;
    }
    box.appendChild(preview);
  }

  const dz = box.querySelector(`#dz-${mediaItem.media_id}`);
  
  dz.onclick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = mediaItem.type === 'video' ? 'video/quicktime,video/mp4' : 'image/png,image/jpeg';
    input.onchange = (e) => {
      if (e.target.files.length > 0) {
        uploadFile(e.target.files[0], mediaItem, testId);
      }
    };
    input.click();
  };

  dz.ondragover = (e) => {
    e.preventDefault();
    dz.classList.add('dragover');
  };

  dz.ondragleave = () => {
    dz.classList.remove('dragover');
  };

  dz.ondrop = (e) => {
    e.preventDefault();
    dz.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      uploadFile(e.dataTransfer.files[0], mediaItem, testId);
    }
  };

  return box;
}

async function uploadFile(file, mediaItem, testId) {
  let isRetake = false;
  const existingUpload = state.results.media_uploads ? state.results.media_uploads[mediaItem.media_id] : null;

  if (existingUpload) {
    const choice = confirm(`Minh chứng ${mediaItem.canonical_filename} đã tồn tại!\n\nNhấn [OK] để lưu thành bản chụp lại (SAVE AS RETAKE).\nNhấn [Cancel] để giữ nguyên tệp gốc (KEEP ORIGINAL).`);
    if (!choice) return;
    isRetake = true;
  }

  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('/api/upload-media', {
    method: 'POST',
    headers: {
      'x-lesson': state.currentLesson,
      'x-canonical-filename': encodeURIComponent(mediaItem.canonical_filename),
      'x-test-id': testId,
      'x-media-id': mediaItem.media_id,
      'x-smoke-mode': state.smokeMode ? 'true' : 'false',
      'x-retake': isRetake ? 'true' : 'false'
    },
    body: file
  });

  const data = await res.json();
  if (data.success) {
    await loadResults();
    renderTestCard(testId);
  } else {
    alert('Lỗi upload: ' + data.error);
  }
}

function navigateTest(direction) {
  const tests = state.testPlan.tests;
  const idx = tests.findIndex(t => t.test_id === state.activeTestId);
  if (idx !== -1 && tests[idx + direction]) {
    state.activeTestId = tests[idx + direction].test_id;
    renderSidebar();
    renderTestCard(state.activeTestId);
  }
}
