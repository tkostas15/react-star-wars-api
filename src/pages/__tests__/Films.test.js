// import component
import Films from "../Films";

// import custom utils
import {render, screen, waitFor} from "../../test-utils/test-utils";

// import user event library
import userEvent from "@testing-library/user-event";

// import msw
import {mswServer} from "../../mocks/server";
import {mockFilmsResponseHandlers} from "./exclude/mockFilmsResponseHandlers";

// [TEST SUITE]
describe("[TEST SUITE] Check films page", () => {
    beforeEach(() => {
        mswServer.use(...mockFilmsResponseHandlers);

        const FilmsComponent = () => <Films/>;
        render(FilmsComponent);
    });

    it("[TEST] Check films table exists", async () => {
        const table = await screen.findByTestId("films");
        expect(table).toMatchSnapshot();
        expect(table).toBeInTheDocument();
    });

    it("[TEST] Check table has exactly 6 rows (mocked)", async () => {
        await screen.findByTestId("films");
        expect(document.querySelectorAll("tbody tr")).toHaveLength(6);
    });

    it("[TEST] Checks search field and its functionality", async () => {
        const searchInput = await screen.findByPlaceholderText("Enter Title...");
        expect(searchInput).toBeInTheDocument();
        await userEvent.type(searchInput, "Hope");

        // now the user input must contain the word 'Hope'
        expect(searchInput.value).toEqual("Hope");

        // now the table must contain only one row
        await waitFor(() =>
            expect(document.querySelectorAll("tbody tr")).toHaveLength(1)
        ).then("Valid search applied!");

        // and this row should have the word searched in it
        const firstRow = document.querySelector("tbody tr td:first-child");
        expect(firstRow.innerHTML).toContain("Hope");
    });

    it("[TEST] Check table has 0 rows after falsy search", async () => {
        const searchInput = await screen.findByPlaceholderText("Enter Title...");
        await userEvent.type(searchInput, "jest");

        // now the user input must contain 'jest'
        expect(searchInput.value).toEqual("jest");

        // and table must contain no rows at all
        await waitFor(() =>
            expect(document.querySelectorAll("tbody tr")).toHaveLength(0)
        ).then("Invalid search applied!");
        await new Promise((r) => setTimeout(r, 2000));
    });
});
