# HP1 ENGINE BASELINE

ENGINE_CANDIDATE:
Godot 4.7.1 stable

RENDERER:
Compatibility

SCRIPT_LANGUAGE:
GDScript

ASSET_PIPELINE:
Blockbench → glTF/GLB → Godot

TARGET:
Web-first

BLENDER:
Không sử dụng

RULES:
- Không tự nâng Godot version.
- Không tự đổi renderer.
- Không dùng Forward+ nếu specification bài không yêu cầu.
- Không thêm C#.
- Không thêm Blender.
- Mọi project phải được kiểm tra bằng exact engine version đã khóa.
- Runtime/Web PASS chỉ được ghi khi đã chạy kiểm thử thực tế.
