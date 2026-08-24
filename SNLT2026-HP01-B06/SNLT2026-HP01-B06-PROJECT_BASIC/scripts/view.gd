extends Node3D

# Ownership C — Hạ tầng camera follow (Không can thiệp thuộc tính rotation do học sinh đặt)

@export var target_path: NodePath = NodePath("../Player")
var target: Node3D = null

func _ready() -> void:
	if has_node(target_path):
		target = get_node(target_path) as Node3D

func _process(delta: float) -> void:
	if target == null:
		return
	
	# Theo vị trí Player (giữ nguyên rotation hiện tại của View)
	global_position = global_position.lerp(target.global_position, 10.0 * delta)
