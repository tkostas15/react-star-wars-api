export {};

declare global {
  interface Window {
    msw: any;
    Cypress: any;
  }
}
