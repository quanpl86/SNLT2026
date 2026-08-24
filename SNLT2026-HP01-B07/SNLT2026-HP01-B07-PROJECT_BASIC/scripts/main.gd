extends Node3D

@onready var player: CharacterBody3D = $Player
@onready var camera: Camera3D = $View/Camera
@onready var hud: Control = $HUDLayer/HUD

var respawn_position: Vector3
var crystal_count: int = 0
var target_count: int = 3

func _ready() -> void:
	if player != null:
		respawn_position = player.global_position
	if hud != null:
		hud.update_crystal_hud(crystal_count, target_count)
		hud.update_checkpoint_hud(false)

func _on_checkpoint_activated(pos: Vector3) -> void:
	respawn_position = pos
	if hud != null:
		hud.update_checkpoint_hud(true)
	print("[B07 Main] Checkpoint updated respawn_position to: ", respawn_position)

func _on_collectible_collected(val: int) -> void:
	crystal_count += val
	if hud != null:
		hud.update_crystal_hud(crystal_count, target_count)
	print("[B07 Main] Collected item! Total crystals: ", crystal_count)

func respawn_player() -> void:
	if player != null:
		player.global_position = respawn_position
		player.velocity = Vector3.ZERO
		print("[B07 Main] Respawned player at: ", respawn_position)

func _on_hazard_player_hit() -> void:
	respawn_player()
