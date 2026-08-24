extends Area3D

signal collected(value: int)

@export var value: int = 1
var collected_once: bool = false

func _ready() -> void:
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node3D) -> void:
	if collected_once:
		return

	if body.is_in_group("player"):
		collected_once = true
		collected.emit(value)
		print("[B05 Collectible] Player collected item! Value: ", value)
		queue_free()
