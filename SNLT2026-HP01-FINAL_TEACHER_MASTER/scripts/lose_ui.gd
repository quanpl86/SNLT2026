extends Control

signal restart_requested
signal main_menu_requested

@onready var click_audio: AudioStreamPlayer = $ClickAudio

func show_lose() -> void:
	visible = true

func _on_restart_button_pressed() -> void:
	if click_audio != null:
		click_audio.play()
	restart_requested.emit()

func _on_main_menu_button_pressed() -> void:
	if click_audio != null:
		click_audio.play()
	main_menu_requested.emit()
