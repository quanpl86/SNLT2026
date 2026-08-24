# HP1 FINAL PRODUCT SPEC — “PHIÊU LƯU TINH THỂ”

## 1. Art direction tham chiếu

Teacher Master sử dụng chủ đề **Đảo Tinh Thể Trên Mây**:
- low-poly, sáng, dễ đọc với học sinh 12–14;
- nền xanh navy/teal;
- collectible cyan;
- checkpoint vàng/cyan;
- hazard coral/red;
- goal portal cyan/gold;
- UI nền tối trong suốt, viền cyan/gold.

Đây là art direction mẫu của chương trình. B10 cho phép học sinh cá nhân hóa chủ đề nhưng phải giữ readability và chức năng.

## 2. Luồng trải nghiệm

```text
Start Screen
→ Bắt đầu
→ Gameplay
→ Chạy/Nhảy
→ Thu thập 5 tinh thể
→ Tránh hazard
→ Kích hoạt checkpoint
→ Mất mạng → respawn
→ Hết mạng → Lose Screen
→ Đủ tinh thể → Goal mở
→ Goal → Win Screen
→ Chơi lại / Về màn hình chính
```

## 3. Scene architecture

```text
Boot/MainMenu [Control]
├── Background
├── TitlePanel
├── StartButton
├── HowToPlayButton
└── HowToPlayOverlay

Game [Node3D]
├── Environment
├── Player [CharacterBody3D]
│   ├── CollisionShape3D
│   └── CharacterVisual
│       └── <animated character>
├── CameraRig
├── World
│   ├── Platforms
│   ├── Collectibles x5
│   ├── Hazards
│   ├── Checkpoint
│   └── FinishGate
├── HUDLayer
│   └── HUD [Control]
└── ResultLayer
    ├── WinOverlay
    └── LoseOverlay
```

## 4. Game state tối giản

Canonical values:
- target_crystals = 5
- max_lives = 3
- crystal_count = 0
- lives = max_lives
- respawn_position = start position
- checkpoint_active = false
- is_finished = false
- is_lost = false

Hazard/fall:
1. lives -= 1
2. nếu lives > 0 → Player về respawn_position + velocity zero
3. nếu lives <= 0 → LoseOverlay + khóa gameplay

Win:
- Goal event AND crystal_count >= target_crystals AND not is_finished
- show WinOverlay

Restart:
- run mới sạch bằng reload_current_scene() hoặc reset đầy đủ tương đương.

## 5. Start screen

Bắt buộc có:
- tên game;
- nút **Bắt đầu**;
- nút **Cách chơi**;
- overlay hướng dẫn:
  - W/A/S/D di chuyển;
  - Space nhảy;
  - thu đủ tinh thể;
  - tránh nguy hiểm;
  - checkpoint lưu vị trí hồi sinh trong lượt;
  - tới cổng đích.

Web không cần nút “Thoát game”.

## 6. HUD

Hiển thị:
- Crystal: `x/5`;
- Lives: icon + `x3`;
- Checkpoint: `Chưa kích hoạt` / `Đã kích hoạt`.

HUD phải lấy dữ liệu runtime thật; không hard-code state giả.

## 7. Animation

### Character
Preferred source: PJT-004 frozen Kenney `models/character.glb`.
Nguồn project đã xác nhận script reference sử dụng animation names:
- `idle`
- `walk`
- `jump`

Required behavior:
- đứng yên trên sàn → idle;
- có horizontal velocity → walk, speed_scale theo tốc độ ở mức hợp lý;
- airborne → jump;
- landing có squash nhẹ hoặc particle/audio feedback.

Animation layer là polish/infrastructure C trừ khi B10 học sinh chủ động cá nhân hóa bằng kiến thức đã có. Không dùng animation làm minh chứng thay cho CIO cốt lõi.

### Other motion
- collectible: rotate + bob loop;
- checkpoint inactive: nhẹ/đều; active: pulse + glow;
- goal: portal pulse/rotate; ready state sáng hơn;
- UI: fade/scale ngắn khi win/lose.

Không đưa AnimationTree/state machine nâng cao thành yêu cầu học sinh.

## 8. VFX/Audio

Bắt buộc tối thiểu:
- jump/land feedback;
- collect chime + burst;
- checkpoint activation chime + burst;
- hazard feedback;
- win feedback;
- lose feedback.

Package có program-authored WAV fallback. Antigravity có thể thay bằng PJT-004 CC0 sound effects nếu audit exact file/checksum.

## 9. Asset Blockbench

Release của **học sinh** phải chứa ít nhất một asset `.bbmodel` + `.glb` do học sinh tạo/chỉnh sửa có ý nghĩa và hoạt động trong gameplay.

Teacher Master canonical có:
- blank/reference Blockbench files;
- placeholder/fallback;
nhưng các file Ownership C không được dùng thay MC-3D cá nhân.

## 10. Web

Godot 4.7.1 candidate + Compatibility.
Final release:
- Web export;
- HTTP/browser test;
- core loop;
- start screen;
- animation;
- audio;
- win/lose/restart;
- no blocker.

Không tuyên bố Web PASS trước test thật.
