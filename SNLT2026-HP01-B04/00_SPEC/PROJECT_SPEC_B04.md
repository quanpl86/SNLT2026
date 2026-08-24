# PROJECT SPEC B04 — Checkpoint chơi được số 1

## Product
Một Thử thách Nền tảng 3D chơi được từ đầu tới đích, tích hợp đúng các cơ chế B1–B3 và có phiên gỡ lỗi cá nhân. B04 không mở kỹ thuật lõi mới.

## Project Basic
- Kế thừa construct B03: Player CharacterBody3D, camera, InputMap, Vector3 movement, gravity, collision, single jump với floor condition.
- Course hoàn chỉnh tối thiểu 5 platform + đích.
- Visual refresh gắn sẵn theo ASSET_REFRESH_SPEC.
- `move_right` có D; ChallengePlatform03 collision hoạt động.

## Student Starter
Giống visual/project structure của Master nhưng có đúng hai lỗi ôn tập:
1. `move_right` action tồn tại nhưng thiếu D.
2. `ChallengePlatform03/CollisionShape3D.disabled = true`.

Không thêm lỗi lạ, không làm hỏng project theo cách đòi kiến thức B5+.

## E2E học sinh
Tái hiện → ghi Actual/Expected → hypothesis → sửa InputMap → run regression → sửa collision → run → hoàn thành course → lưu/mở lại → giải thích.

## Ownership
- A: Bug Ticket, hypothesis, kết quả, giải thích, phần đóng góp cá nhân.
- B: sửa mapping D và collision flag; tích hợp/chạy sản phẩm.
- C: visual refresh, source assets, project config, course art, hạ tầng đã cung cấp.

## Không được làm
- Không dạy asset import/Blockbench.
- Không Area3D/Signal/collectible/hazard/checkpoint/HUD.
- Không double jump/coyote time.
- Không dùng asset refresh để thay collider.
- Không lộ đáp án 25 câu checkpoint.
