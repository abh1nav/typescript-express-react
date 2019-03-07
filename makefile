.PHONY: all

run: clean
	@npm run build-backend
	@npm run build-frontend
	@npm run watch

clean:
	@rm -Rf dist

install: clean
	@npm i