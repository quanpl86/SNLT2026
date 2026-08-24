extends Node3D

@onready var player: CharacterBody3D = $Player
@onready var camera: Camera3D = $View/Camera

# State variables
var respawn_position: Vector3
var last_checkpoint_position: Vector3

func _ready() -> void:
	if player != null:
		respawn_position = player.global_position
		last_checkpoint_position = player.global_position

func _on_checkpoint_activated(pos: Vector3) -> void:
	# BUG TASK A (K12 - State Mismatch): Checkpoint cập nhật last_checkpoint_position...
	last_checkpoint_position = pos
	print("[B06 Starter] Checkpoint updated last_checkpoint_position to: ", pos)

# Handler cho StateHazard (Task A)
func _on_state_hazard_player_hit() -> void:
	respawn_player_state()

# Handler cho ReferenceHazard (Task B)
func _on_reference_hazard_player_hit() -> void:
	respawn_player_reference()

# TASK A (K12): Respawn theo State Hazard
func respawn_player_state() -> void:
	if player != null:
		# BUG TASK A: ...nhưng khi respawn lại đọc respawn_position (biến chưa được cập nhật)!
		# Học sinh sửa: đổi respawn_position thành last_checkpoint_position (hoặc hợp nhất biến state).
		player.global_position = respawn_position
		player.velocity = Vector3.ZERO

# TASK B (K29): Respawn theo Reference Hazard
func respawn_player_reference() -> void:
	# BUG TASK B (K29 - Wrong Object Reference): Tham chiếu nhầm camera thay vì player!
	# Học sinh sửa: đổi camera.global_position thành player.global_position.
	if camera != null:
		camera.global_position = respawn_position
