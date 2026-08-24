extends Control

@onready var crystal_label: Label = $Panel/CrystalLabel
@onready var lives_label: Label = $Panel/LivesLabel
@onready var checkpoint_label: Label = $Panel/CheckpointLabel

func update_crystals(value: int, target: int) -> void:
	if crystal_label != null:
		crystal_label.text = "%d/%d" % [value, target]

func update_lives(value: int) -> void:
	if lives_label != null:
		lives_label.text = "x%d" % value

func update_checkpoint(active: bool) -> void:
	if checkpoint_label != null:
		checkpoint_label.text = "Đã kích hoạt" if active else "Chưa kích hoạt"
