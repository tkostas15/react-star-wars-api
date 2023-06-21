# Intro

This is a `ReactJS` app that uses the [SWAPI](https://swapi.dev/), for practice/education purpose.  
It retrieves and displays films using the free API above.

## Code review

It consists of three pages, and therefore it uses `routes` with authorization validation.

There is state management for both films and authorization.  
To achieve that, I used `redux-sagas` along with `redux-toolkit`.

## Testing

For testing, both [Cypress](https://www.cypress.io/) and [Jest](https://jestjs.io/) are used.

To open the `Jest` menu where you can run all tests, you must type
```
npm run test
```

To run all `Cypress` tests in headless mode, you must type

```
npm run cy:headless
```
and for the open mode, you must run
```
npm run cy:open
```

### Coverage

The results of all the tests, can use the coverage functionality.  
To run both `Jest` and `Cypress` tests with coverage, you must run the command
```
npm run test:cov
```

Then, in order to create the coverage report for all the tests, you must type the command
```
npm run report:all
```
For either `Jest` or `Cypress` tests report, you must run one of the commands below
```
npm run report:js
```
```
npm run report:cy
```

## Run and build

This project uses [Create React App](https://create-react-app.dev/) as the building tool.  

To run the dev server, you must type
```
npm run start
```
:information_source: The dev server's default port is `3000`.  

:warning: In order to be able to run the dev server, you must use the node version `16.15.1`.

:warning: For Windows users, you must replace the `start` command with the one below
```
Set REACT_APP_ENV=dev && react-scripts -r @cypress/instrument-cra start
```

In order to build the app, you must type
```
npm run build
```

