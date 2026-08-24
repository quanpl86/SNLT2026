# ASSET SWAP TECHNICAL GUIDE — GV / ANTIGRAVITY — B04

Tài liệu này **không dành làm nội dung học sinh B04**.

1. Freeze/download asset đã được SOURCE_MANIFEST cho phép.
2. Import vào thư mục `assets/` của project.
3. Player: giữ CharacterBody3D + collider + script; chỉ thay child `Visual`.
4. Platform: giữ StaticBody3D + collider; chỉ thay/add visual child.
5. Không chỉnh InputMap, speed, jump, gravity, camera để “bù” cho model.
6. Nếu scale visual, kiểm tra chân model khớp đáy collider và không che camera.
7. Run regression: W/A/S/D → jump → landing → platform collision → full course.
8. So sánh Starter/Master: visual phải giống nhau; chỉ learning bugs khác nhau.
9. Ghi exact source path, commit/version, license, SHA-256 vào SOURCE_MANIFEST.
10. Không đưa Blockbench Gallery model vào B04 nếu chưa có license/canonical source approval.
