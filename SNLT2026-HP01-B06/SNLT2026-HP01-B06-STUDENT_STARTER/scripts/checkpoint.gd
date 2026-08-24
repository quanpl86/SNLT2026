extends Area3D

signal activated(position: Vector3)

var is_activated: bool = false

func _ready() -> void:
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node3D) -> void:
	if body.is_in_group("player") and not is_activated:
		is_activated = true
		activated.emit(global_position)
		print("[B06 Checkpoint] Activated at position: ", global_position)
