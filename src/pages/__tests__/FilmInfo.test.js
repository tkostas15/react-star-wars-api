// import component
import Film from "../Film";

// import custom utils
import {render, screen} from "../../test-utils/test-utils";

// import msw
import {mswServer} from "../../mocks/server";
import {mockFilmsResponseHandlers} from "./exclude/mockFilmsResponseHandlers";

// mock router params
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        filmId: 1,
    }),
}));

// [TEST SUITE]
describe("[TEST SUITE] Check film info page", () => {
    beforeEach(() => {
        mswServer.use(...mockFilmsResponseHandlers);

        const FilmComponent = () => <Film/>;
        render(FilmComponent);
    });

    it("[TEST] Check film info table exists", async () => {
        const table = await screen.findByTestId("film");
        expect(table).toMatchSnapshot();
        expect(table).toBeInTheDocument();
    });

    it("[TEST] Check table only has one row", async () => {
        const $ = require("jquery");
        const table = await screen.findByTestId("film");
        expect($("tbody tr")).toHaveLength(1);
    });
});
