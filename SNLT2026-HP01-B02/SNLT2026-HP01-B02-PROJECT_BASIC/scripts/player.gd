extends CharacterBody3D

# === B02 — VÙNG PHẢI HIỂU / CHỈNH SỬA ===
var speed: float = 6.0

func get_move_speed() -> float:
	return speed
# === HẾT VÙNG B02 ===

# Ownership C — Hạ tầng chương trình cung cấp sẵn (Không mở K06/K07/K08 ở B02)
const JUMP_VELOCITY = 6.5

@export var view_node_path: NodePath = NodePath("../View")
var view_node: Node3D = null

@onready var character_visual: Node3D = $Character
var animation_player: AnimationPlayer = null

func _ready() -> void:
	if has_node(view_node_path):
		view_node = get_node(view_node_path) as Node3D
	
	if has_node("Character"):
		animation_player = $Character.find_child("AnimationPlayer", true, false) as AnimationPlayer

func _physics_process(delta: float) -> void:
	# Trọng trường hạ tầng C
	if not is_on_floor():
		velocity.y -= ProjectSettings.get_setting("physics/3d/default_gravity", 18.0) * delta

	# Xử lý Nhảy (Space) - Hạ tầng C
	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Lấy vector điều hướng W/A/S/D
	var input_dir := Input.get_vector("move_left", "move_right", "move_forward", "move_back")
	var direction := Vector3.ZERO
	
	if input_dir != Vector2.ZERO:
		var camera_rotation_y := 0.0
		if view_node != null:
			camera_rotation_y = view_node.rotation.y
		
		var forward := Vector3(0, 0, 1).rotated(Vector3.UP, camera_rotation_y)
		var right := Vector3(1, 0, 0).rotated(Vector3.UP, camera_rotation_y)
		
		direction = (right * input_dir.x + forward * input_dir.y).normalized()

	# Gọi hàm lấy tốc độ di chuyển B02
	var move_speed := get_move_speed()

	if direction != Vector3.ZERO:
		velocity.x = direction.x * move_speed
		velocity.z = direction.z * move_speed
		
		var target_angle := atan2(direction.x, direction.z)
		character_visual.rotation.y = lerp_angle(character_visual.rotation.y, target_angle, delta * 12.0)
	else:
		velocity.x = move_toward(velocity.x, 0, move_speed)
		velocity.z = move_toward(velocity.z, 0, move_speed)

	move_and_slide()

	_update_animation()

	# Cứu hộ an toàn: reload scene nếu rơi khỏi sàn (y < -8.0)
	if global_position.y < -8.0:
		get_tree().reload_current_scene()

func _update_animation() -> void:
	if animation_player == null:
		return
	
	var anim_list := animation_player.get_animation_list()
	if anim_list.is_empty():
		return
	
	var target_anim := "idle"
	if not is_on_floor():
		if "jump" in anim_list:
			target_anim = "jump"
	else:
		var horiz_speed := Vector2(velocity.x, velocity.z).length()
		if horiz_speed > 0.2:
			if "walk" in anim_list:
				target_anim = "walk"

	if animation_player.has_animation(target_anim):
		if animation_player.current_animation != target_anim:
			animation_player.play(target_anim, 0.1)
