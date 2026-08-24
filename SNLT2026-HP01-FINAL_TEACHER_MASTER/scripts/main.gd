extends Node3D

@export var target_crystals: int = 5
@export var max_lives: int = 3

@onready var player: CharacterBody3D = $Player
@onready var hud: Control = $HUDLayer/HUD
@onready var win_ui: Control = $UILayer/WinUI
@onready var lose_ui: Control = $UILayer/LoseUI

@onready var audio_collect: AudioStreamPlayer = $Audio/CollectAudio
@onready var audio_checkpoint: AudioStreamPlayer = $Audio/CheckpointAudio
@onready var audio_hazard: AudioStreamPlayer = $Audio/HazardAudio
@onready var audio_win: AudioStreamPlayer = $Audio/WinAudio
@onready var audio_lose: AudioStreamPlayer = $Audio/LoseAudio

var crystal_count: int = 0
var lives: int
var respawn_position: Vector3
var checkpoint_active: bool = false
var is_finished: bool = false
var is_lost: bool = false

func _ready() -> void:
	lives = max_lives
	if player != null:
		respawn_position = player.global_position
	if hud != null:
		hud.update_crystals(crystal_count, target_crystals)
		hud.update_lives(lives)
		hud.update_checkpoint(false)

func _on_collectible_collected(val: int) -> void:
	if is_finished or is_lost: return
	crystal_count += val
	if audio_collect != null:
		audio_collect.play()
	if hud != null:
		hud.update_crystals(crystal_count, target_crystals)
	print("[Final Master Main] Collected crystal! ", crystal_count, "/", target_crystals)

func _on_checkpoint_activated(pos: Vector3) -> void:
	if checkpoint_active and respawn_position == pos: return
	respawn_position = pos
	checkpoint_active = true
	if audio_checkpoint != null:
		audio_checkpoint.play()
	if hud != null:
		hud.update_checkpoint(true)
	print("[Final Master Main] Checkpoint activated at: ", respawn_position)

func _on_hazard_player_hit() -> void:
	if is_finished or is_lost: return
	lives -= 1
	if audio_hazard != null:
		audio_hazard.play()
	if hud != null:
		hud.update_lives(lives)
	print("[Final Master Main] Player hit hazard! Lives left: ", lives)
	
	if lives <= 0:
		is_lost = true
		if audio_lose != null:
			audio_lose.play()
		if lose_ui != null:
			lose_ui.show_lose()
		print("[Final Master Main] GAME OVER - NO LIVES LEFT")
	else:
		respawn_player()

func respawn_player() -> void:
	if player != null:
		player.global_position = respawn_position
		player.velocity = Vector3.ZERO
		print("[Final Master Main] Respawned player at: ", respawn_position)

func _on_goal_reached() -> void:
	if is_finished or is_lost: return
	if crystal_count >= target_crystals:
		is_finished = true
		if audio_win != null:
			audio_win.play()
		if win_ui != null:
			win_ui.show_win()
		print("[Final Master Main] VICTORY - ALL CRYSTALS COLLECTED AND GOAL REACHED!")
	else:
		print("[Final Master Main] Reached goal, but crystals insufficient: ", crystal_count, "/", target_crystals)

func restart_game() -> void:
	get_tree().reload_current_scene()

func go_to_main_menu() -> void:
	get_tree().change_scene_to_file("res://scenes/main_menu.tscn")

func _on_win_ui_restart_requested() -> void:
	restart_game()

func _on_win_ui_main_menu_requested() -> void:
	go_to_main_menu()

func _on_lose_ui_restart_requested() -> void:
	restart_game()

func _on_lose_ui_main_menu_requested() -> void:
	go_to_main_menu()
