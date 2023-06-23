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

To run all the `Jest` tests with coverage, you must run the command

```
npm run test:cov
```

:information_source: The output folder is `coverage-jest`.

To run all the `Cypress` tests with coverage, you just have to run all the tests in headless mode

```
npm run cy:headless
```

:information_source: The output folder is `coverage-cypress`.

To display the `Jest` or `Cypress` coverage in text format, you must type one of the commands below

```
npm run report:jest
npm run report:cy
```

To combine both `Jest` and `Cypress` coverage reports into one and display it in text format, you must type the command

```
npm run report:all
```

:information_source: The output folder for the combined report is the `coverage-merged`.

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

## Font

The font used is the `Star Jedi` provided by `DAFONT FREE`.  
It is free for commercial use, and you can find it [here](https://www.dafontfree.io/star-jedi-font-family/).
