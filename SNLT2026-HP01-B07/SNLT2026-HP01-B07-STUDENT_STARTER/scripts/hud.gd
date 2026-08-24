extends Control

@onready var crystal_label: Label = %CrystalLabel
@onready var checkpoint_label: Label = %CheckpointLabel

func update_crystal_hud(value: int, total: int) -> void:
	if crystal_label != null:
		# GAP A (CIO13/K13): HUD nhận giá trị runtime value, total nhưng đang bị hard-code chuỗi "0/5"!
		# Học sinh sửa lại dòng này thành: crystal_label.text = "%d/%d" % [value, total]
		crystal_label.text = "0/5"

func update_checkpoint_hud(is_active: bool) -> void:
	if checkpoint_label != null:
		if is_active:
			checkpoint_label.text = "Đã kích hoạt"
		else:
			checkpoint_label.text = "Chưa kích hoạt"
