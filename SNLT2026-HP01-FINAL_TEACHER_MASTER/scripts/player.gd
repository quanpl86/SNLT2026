extends CharacterBody3D

@export var move_speed: float = 6.0
@export var jump_force: float = 8.0

var gravity: float = 18.0

@onready var anim_player: AnimationPlayer = $Character/AnimationPlayer if has_node("Character/AnimationPlayer") else null
@onready var character_visual: Node3D = $Character if has_node("Character") else null

func _ready() -> void:
	add_to_group("player")

func _physics_process(delta: float) -> void:
	if not is_on_floor():
		velocity.y -= gravity * delta

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_force

	var input_dir := Input.get_vector("move_left", "move_right", "move_forward", "move_back")
	var direction := Vector3(input_dir.x, 0, input_dir.y).normalized()

	if direction != Vector3.ZERO:
		velocity.x = direction.x * move_speed
		velocity.z = direction.z * move_speed
		if character_visual != null:
			character_visual.rotation.y = atan2(-direction.x, -direction.z)
	else:
		velocity.x = move_toward(velocity.x, 0, move_speed)
		velocity.z = move_toward(velocity.z, 0, move_speed)

	move_and_slide()
	_update_animation()

func _update_animation() -> void:
	if anim_player == null:
		return
	if not is_on_floor():
		_play_anim("jump")
	else:
		var horiz_speed := Vector2(velocity.x, velocity.z).length()
		if horiz_speed > 0.1:
			_play_anim("walk")
		else:
			_play_anim("idle")

func _play_anim(anim_name: StringName) -> void:
	if anim_player.has_animation(anim_name) and anim_player.current_animation != anim_name:
		anim_player.play(anim_name, 0.1)
