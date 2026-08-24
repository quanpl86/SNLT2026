# ASSET PACKAGE REQUIREMENTS — B06

Package có 2 GLB program-authored:
- `B06_HAZARD_SPIKES_PROGRAM.glb`
- `B06_CHECKPOINT_BEACON_PROGRAM.glb`

Mục tiêu: làm hazard/checkpoint dễ nhận biết nhưng không mở kiến thức asset mới.

Antigravity phải:
1. import cả hai GLB trong Godot 4.7.1;
2. gắn dưới VisualAnchor, không thay Area3D root;
3. giữ CollisionShape3D riêng;
4. kiểm scale/visibility/camera;
5. tính SHA-256 và điền SOURCE_MANIFEST;
6. regression project sau khi gắn visual.

Optional reference: PJT-004 `models/flag.glb` có thể dùng để so sánh checkpoint visual, nhưng không cần ingest. Nếu ingest phải tải đúng frozen commit, audit license và checksum.
