extends Node3D

@onready var player: CharacterBody3D = $Player
@onready var camera: Camera3D = $View/Camera
@onready var hud: Control = $HUDLayer/HUD
@onready var win_ui: Control = $UILayer/WinUI

var respawn_position: Vector3
var start_position: Vector3
var crystal_count: int = 0
var target_count: int = 3
var is_finished: bool = false

func _ready() -> void:
	if player != null:
		start_position = player.global_position
		respawn_position = player.global_position
	if hud != null:
		hud.update_crystal_hud(crystal_count, target_count)
		hud.update_checkpoint_hud(false)

func _on_checkpoint_activated(pos: Vector3) -> void:
	respawn_position = pos
	if hud != null:
		hud.update_checkpoint_hud(true)
	print("[B08 Starter] Checkpoint updated respawn_position to: ", respawn_position)

func _on_collectible_collected(val: int) -> void:
	if is_finished: return
	crystal_count += val
	if hud != null:
		hud.update_crystal_hud(crystal_count, target_count)
	print("[B08 Starter] Collected item! Total crystals: ", crystal_count)

# GAP A (CIO15/K15): Thắng quá sớm! Khi chạm Goal lập tức thắng mà không kiểm tra crystal_count >= target_count!
# Học sinh sửa: bổ sung `if crystal_count >= target_count: finish_game()`
func _on_goal_reached() -> void:
	if is_finished: return
	finish_game()

func finish_game() -> void:
	is_finished = true
	if win_ui != null:
		win_ui.show_win()
	print("[B08 Starter] GAME FINISHED! VICTORY!")

# GAP B (CIO15/K15): Chơi lại nhưng state bị bẩn! Chỉ đưa player về đầu mà giữ nguyên crystal_count, is_finished, HUD state!
# Học sinh sửa lại thành lượt chơi mới sạch: get_tree().reload_current_scene()
func restart_game() -> void:
	if player != null:
		player.global_position = start_position

func _on_win_ui_restart_requested() -> void:
	restart_game()

func respawn_player() -> void:
	if player != null:
		player.global_position = respawn_position
		player.velocity = Vector3.ZERO

func _on_hazard_player_hit() -> void:
	if not is_finished:
		respawn_player()
