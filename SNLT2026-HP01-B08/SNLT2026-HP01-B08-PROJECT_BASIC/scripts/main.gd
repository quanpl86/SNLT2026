extends Node3D

@onready var player: CharacterBody3D = $Player
@onready var camera: Camera3D = $View/Camera
@onready var hud: Control = $HUDLayer/HUD
@onready var win_ui: Control = $UILayer/WinUI

var respawn_position: Vector3
var crystal_count: int = 0
var target_count: int = 3
var is_finished: bool = false

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
	print("[B08 Main] Checkpoint updated respawn_position to: ", respawn_position)

func _on_collectible_collected(val: int) -> void:
	if is_finished: return
	crystal_count += val
	if hud != null:
		hud.update_crystal_hud(crystal_count, target_count)
	print("[B08 Main] Collected item! Total crystals: ", crystal_count)

func _on_goal_reached() -> void:
	if is_finished: return
	if crystal_count >= target_count:
		finish_game()
	else:
		print("[B08 Main] Reached goal, but not enough crystals! Needed: ", target_count, " Got: ", crystal_count)

func finish_game() -> void:
	is_finished = true
	if win_ui != null:
		win_ui.show_win()
	print("[B08 Main] GAME FINISHED! VICTORY!")

func restart_game() -> void:
	get_tree().reload_current_scene()

func _on_win_ui_restart_requested() -> void:
	restart_game()

func respawn_player() -> void:
	if player != null:
		player.global_position = respawn_position
		player.velocity = Vector3.ZERO
		print("[B08 Main] Respawned player at: ", respawn_position)

func _on_hazard_player_hit() -> void:
	if not is_finished:
		respawn_player()
