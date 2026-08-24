extends Control

@export_file("*.tscn") var game_scene_path := "res://scenes/main.tscn"

@onready var how_to_play_overlay: Control = $HowToPlayOverlay
@onready var click_audio: AudioStreamPlayer = $ClickAudio

func _on_start_button_pressed() -> void:
	if click_audio != null:
		click_audio.play()
	get_tree().change_scene_to_file(game_scene_path)

func _on_how_to_play_button_pressed() -> void:
	if click_audio != null:
		click_audio.play()
	if how_to_play_overlay != null:
		how_to_play_overlay.visible = true

func _on_back_button_pressed() -> void:
	if click_audio != null:
		click_audio.play()
	if how_to_play_overlay != null:
		how_to_play_overlay.visible = false
