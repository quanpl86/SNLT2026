extends Control

signal restart_requested

@onready var restart_button: Button = %RestartButton

func _ready() -> void:
	hide()
	if restart_button != null:
		restart_button.pressed.connect(_on_restart_pressed)

func show_win() -> void:
	show()

func _on_restart_pressed() -> void:
	restart_requested.emit()
