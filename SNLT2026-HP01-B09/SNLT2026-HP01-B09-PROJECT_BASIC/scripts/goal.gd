extends Area3D

signal goal_reached

func _ready() -> void:
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node3D) -> void:
	if body.is_in_group("player"):
		goal_reached.emit()
		print("[B08 Goal] Player reached goal portal!")
