npm:
	npm install

prod:
	yarn build
	serve -s build

dev:
	npm start NODE_ENV=production
