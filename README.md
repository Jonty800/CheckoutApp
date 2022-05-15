Example checkout app written using NextJS and TypeScript. Developed using VS Code.

This app has full SSR and focuses on performance, to improve the experience of the end user

![example](https://i.imgur.com/cgNWZUm.png)

## Deployment using Docker
```
docker run -it $(docker build -q .)
```

This command will build and then run on a docker container. This can be used for deployment.

## Install dependancies
```
npm i
``` 

## Build the app
```
npm run build
```

## Watch the app
```
npm run dev
```

## Start application and server
```
npm start
```

## Future Work
- Mobile screen size support
- Improve the hover effect of the QuantityButton
- Implement backend services
- Good unit test coverage
- End to End tests using Cypress
- CI/CD pipeline for deployments
- More PWA support
