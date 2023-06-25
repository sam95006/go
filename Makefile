flask:
	python3 -m flask --app  main run --port 8000
sam:
	echo "hi"
.PHONY: flask sam
.SILENT: flask sam