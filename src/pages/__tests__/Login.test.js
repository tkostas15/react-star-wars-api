// import component
import Welcome from "../Welcome";

// import custom utils
import { render, screen } from "../../test-utils/test-utils";

// import user event library
import userEvent from "@testing-library/user-event";

// import msw
import { server } from "../../mocks/server";
import { mockFilmsResponseHandlers } from "./exclude/mockFilmsResponseHandlers";

// [TEST SUITE]
describe("[TEST SUITE] Check log in form", () => {
  beforeEach(() => {
    server.use(...mockFilmsResponseHandlers);

    const WelcomeComponent = () => <Welcome />;
    render(WelcomeComponent);
  });

  it("[TEST] Check username input exists and functionality", async () => {
    const usernameInput = screen.getByLabelText("username");
    expect(usernameInput).toBeInTheDocument();

    // type and check
    await userEvent.type(usernameInput, "username");
    expect(usernameInput.value).toEqual("username");
  });

  it("[TEST] Check password input exists and functionality", async () => {
    const passwordInput = screen.getByLabelText("password");
    expect(passwordInput).toBeInTheDocument();

    // type and check
    await userEvent.type(passwordInput, "password");
    expect(passwordInput.value).toEqual("password");
  });

  it("[TEST] Check submit is disabled before typing and enabled after", async () => {
    const usernameInput = screen.getByLabelText("username");
    const passwordInput = screen.getByLabelText("password");

    // submit should be disabled
    const submitButton = screen.getByText("Enter universe");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    // typing
    await userEvent.type(usernameInput, "username");
    await userEvent.type(passwordInput, "password");

    // submit should be enabled
    expect(submitButton).toBeEnabled();
  });
});
