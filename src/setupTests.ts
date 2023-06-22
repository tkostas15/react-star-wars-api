// react-testing-library renders your components to document.body,
import "@testing-library/jest-dom";

// Polyfill "window.fetch" to get rid of error 'ReferenceError: fetch is not defined'
import 'whatwg-fetch'

// MSW server
import {mswServer} from "./mocks/server";
import React from 'react';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

global.React = React;


