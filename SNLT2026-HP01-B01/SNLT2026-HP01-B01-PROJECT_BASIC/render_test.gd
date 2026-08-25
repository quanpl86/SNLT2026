extends SceneTree

func _init():
	var scene = load("res://scenes/main.tscn").instantiate()
	root.add_child(scene)
	create_timer(0.3).timeout.connect(func():
		var img = root.get_texture().get_image()
		img.save_png("res://render_output.png")
		print("SUCCESS: Saved rendered frame to render_output.png")
		quit()
	)
