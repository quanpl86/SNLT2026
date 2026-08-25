# BÁO CÁO KHÁC BIỆT (DIFF) STARTER vs MASTER - BÀI 03

Hai bản Starter và Master (Basic) hoàn toàn giống nhau về mọi mặt (assets, scenes, nodes, cấu hình project), ngoại trừ file `player.gd`.

## Chi tiết khác biệt trong `player.gd`:

**1. Lỗi hướng di chuyển Z (Tiến/Lùi)**
- **Basic:** `velocity.z = direction.z * get_move_speed()`
- **Starter:** `velocity.z = 0.0 # TODO B03: Hãy sửa dòng này để nhân vật có thể đi lùi và tiến!`

**2. Lỗi nhảy vô hạn (Thiếu is_on_floor)**
- **Basic:** 
```gdscript
if Input.is_action_just_pressed("jump") and is_on_floor():
    velocity.y = jump_speed
```
- **Starter:**
```gdscript
# TODO B03: Hãy thêm điều kiện để nhân vật chỉ nhảy khi đang chạm đất!
if Input.is_action_just_pressed("jump"):
    velocity.y = jump_speed
```

Tất cả sự khác biệt này đều nằm trong giới hạn kiểm soát đặc tả (Gap A và Gap B) của Bài 03, không rò rỉ mã nguồn giải pháp.
