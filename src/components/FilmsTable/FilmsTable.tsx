import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable, { ColumnFormatter } from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Fragment } from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
const styles = require("./FilmsTable.module.css");

const FilmsTable = (props: any): any => {
  // Create the bootstrap table
  let filmsTable = props.films;

  // column formatters
  const producerFormatter: ColumnFormatter<any, any, string> = (
    cell,
    row,
    rowIndex
  ): any => {
    return (
      <Fragment>
        {cell.split(", ").map((vl: string, key: number) => {
          return <div key={key}>{vl}</div>;
        })}
      </Fragment>
    );
  };
  const dateFormatter: ColumnFormatter<any, any, string> = (
    cell,
    row,
    rowIndex
  ): any => {
    return <div>{format(parseISO(cell), "dd/MM/yyyy")}</div>;
  };
  const urlFormatter: ColumnFormatter<any, any, string> = (
    cell,
    row,
    rowIndex
  ): any => {
    return (
      <Fragment>
        <Link
          to={`${"/films/"}${cell.split("/")[cell.split("/").length - 2]}`}
          className={styles.link}
        >
          Check movie
        </Link>
      </Fragment>
    );
  };

  // set up bootstrap with formatters above
  const columns: Array<any> = [
    {
      dataField: "title",
      text: "Title",
      style: { whiteSpace: "nowrap" },
      filter: textFilter({
        style: {
          display: "block",
          margin: "1rem 0 0",
          backgroundColor: "transparent",
          border: "1px solid #ffffff",
          color: "#ffffff",
          padding: ".5rem",
        },
      }),
    },
    {
      dataField: "opening_crawl",
      text: "Opening crawl",
      style: { fontStyle: "italic", lineHeight: "1.5", minWidth: "450px" },
    },
    {
      dataField: "director",
      text: "Director",
      style: { whiteSpace: "nowrap" },
    },
    {
      dataField: "producer",
      text: "Producer",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: producerFormatter,
    },
    {
      dataField: "release_date",
      text: "Release Date",
      formatter: dateFormatter,
    },
    {
      dataField: "url",
      text: "URL",
      formatter: urlFormatter,
    },
  ];

  // Return the bootstrap table
  return (
    <div className={styles.tableWrapper} data-testid="films">
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
