extends CharacterBody3D

# === B04 — BÀI ÔN TẬP CHECKPOINT SỐ 1 ===
var speed: float = 6.0
var jump_speed: float = 6.5

func get_move_speed() -> float:
	return speed
# === HẾT VÙNG KHỞI TẠO B04 ===

@export var view_node_path: NodePath = NodePath("../View")
var view_node: Node3D = null

func _ready() -> void:
	if has_node(view_node_path):
		view_node = get_node(view_node_path) as Node3D

func _physics_process(delta: float) -> void:
	# Trọng trường (Gravity)
	if not is_on_floor():
		velocity.y -= ProjectSettings.get_setting("physics/3d/default_gravity", 18.0) * delta

	# Xử lý Nhảy (Jump) - B04: Phím Space + Điều kiện ở trên sàn is_on_floor()
	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_speed

	# Lấy vector điều hướng W/A/S/D từ InputMap
	var input_dir := Input.get_vector("move_left", "move_right", "move_forward", "move_back")
	var direction := Vector3.ZERO
	
	if input_dir != Vector2.ZERO:
		var camera_rotation_y := 0.0
		if view_node != null:
			camera_rotation_y = view_node.rotation.y
		
		var forward := Vector3(0, 0, 1).rotated(Vector3.UP, camera_rotation_y)
		var right := Vector3(1, 0, 0).rotated(Vector3.UP, camera_rotation_y)
		
		direction = (right * input_dir.x + forward * input_dir.y).normalized()

	# Gán vector di chuyển vào velocity x và z
	var move_speed := get_move_speed()

	if direction != Vector3.ZERO:
		velocity.x = direction.x * move_speed
		velocity.z = direction.z * move_speed
	else:
		velocity.x = move_toward(velocity.x, 0, move_speed)
		velocity.z = move_toward(velocity.z, 0, move_speed)

	# Thực thi va chạm và di chuyển CharacterBody3D
	move_and_slide()

	# Cứu hộ an toàn: reload scene nếu rơi khỏi sàn (y < -8.0)
	if global_position.y < -8.0:
		get_tree().reload_current_scene()
