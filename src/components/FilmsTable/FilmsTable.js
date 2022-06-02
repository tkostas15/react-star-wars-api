import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import styles                        from "./FilmsTable.module.css";
import BootstrapTable                from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Fragment }                  from "react/cjs/react.production.min";
import { format, parseISO }          from "date-fns";
import { Link }                      from "react-router-dom";

const FilmsTable = (props) => {
    // Create the bootstrap table
    let filmsTable = props.films;
    
    // set up bootstrap
    const columns = [
        {
            dataField: "title",
            text     : "Title",
            style    : {whiteSpace: "nowrap"},
            filter   : textFilter({
                                      style: {
                                          display        : "block",
                                          margin         : "1rem 0 0",
                                          backgroundColor: "transparent",
                                          border         : "1px solid #ffffff",
                                          color          : "#ffffff",
                                          padding        : ".5rem",
                                      },
                                  }),
        },
        {
            dataField: "opening_crawl",
            text     : "Opening crawl",
            style    : {fontStyle: "italic", lineHeight: "1.5", minWidth: "450px"},
        },
        {
            dataField: "director",
            text     : "Director",
            style    : {whiteSpace: "nowrap"},
        },
        {
            dataField: "producer",
            text     : "Producer",
            style    : {whiteSpace: "nowrap", lineHeight: "1.5"},
            formatter: (rowContent, row) => {
                return (
                    <Fragment>
                        {rowContent.split(", ").map((vl, key) => {
                            return <div key={key}>{vl}</div>;
                        })}
                    </Fragment>
                );
            },
        },
        {
            dataField: "release_date",
            text     : "Release Date",
            formatter: (rowContent, row) => {
                return <div>{format(parseISO(rowContent), "dd/MM/yyyy")}</div>;
            },
        },
        {
            dataField: "url",
            text     : "URL",
            formatter: (rowContent, row) => {
                return (
                    <Fragment>
                        <Link to={`${'/films/'}${rowContent.split("/")[rowContent.split("/").length - 2]}`} className={styles.link}>Check movie</Link>
                    </Fragment>
                );
            },
        },
    ];
    
    // Return the bootstrap table
    return (
        <div className={styles.tableWrapper}>
            <BootstrapTable
                classes={styles.table}
                keyField="title"
                data={filmsTable}
                columns={columns}
                filter={filterFactory()}
            />
        </div>
    );
};

export default FilmsTable;
