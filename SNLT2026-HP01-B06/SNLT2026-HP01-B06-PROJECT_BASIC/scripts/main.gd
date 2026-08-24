extends Node3D

@onready var player: CharacterBody3D = $Player
@onready var camera: Camera3D = $View/Camera

var respawn_position: Vector3

func _ready() -> void:
	if player != null:
		respawn_position = player.global_position

func _on_checkpoint_activated(pos: Vector3) -> void:
	respawn_position = pos
	print("[B06 Main] Checkpoint updated respawn_position to: ", respawn_position)

func respawn_player() -> void:
	if player != null:
		player.global_position = respawn_position
		player.velocity = Vector3.ZERO
		print("[B06 Main] Respawned player at: ", respawn_position)

func _on_hazard_player_hit() -> void:
	respawn_player()
