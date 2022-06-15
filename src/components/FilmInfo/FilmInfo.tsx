import { format, parseISO } from "date-fns";
import { Fragment, ReactElement } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable, { ColumnFormatter } from "react-bootstrap-table-next";
import { FilmInfoProps } from "../../types/AllTypes";
const styles = require("./FilmInfo.module.css");

const FilmInfo: React.FC<FilmInfoProps> = ({ info }): ReactElement => {
  // bootstrap formatters
  const producerFormatter: ColumnFormatter<any, any, string> = (
    cell,
    row,
    rowIndex
  ) => {
    return (
      <Fragment>
        {cell.split(", ").map((vl: string, key: number) => {
          return <div key={key}>{vl}</div>;
        })}
      </Fragment>
    );
  };
  const textFormatter: ColumnFormatter<any, any, string> = (
    cell,
    row,
    rowIndex
  ) => {
    return <Fragment>{cell.length}</Fragment>;
  };
  const dateFormatter: ColumnFormatter<any, any, string> = (
    cell,
    row,
    rowIndex
  ) => {
    return <div>{format(parseISO(cell), "MMM do, yyyy")}</div>;
  };

  // set up bootstrap
  const columns: Array<any> = [
    {
      dataField: "title",
      text: "Title",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
    },
    {
      dataField: "opening_crawl",
      text: "Opening crawl",
      style: { fontStyle: "italic", lineHeight: "1.5", minWidth: "450px" },
    },
    {
      dataField: "director",
      text: "Director",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
    },
    {
      dataField: "producer",
      text: "Producer(s)",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: producerFormatter,
    },
    {
      dataField: "release_date",
      text: "Release date",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: dateFormatter,
    },
    {
      dataField: "characters",
      text: "Characters (No)",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: textFormatter,
    },
    {
      dataField: "planets",
      text: "Planets (No)",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: textFormatter,
    },
    {
      dataField: "starships",
      text: "Starships (No)",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: textFormatter,
    },
    {
      dataField: "vehicles",
      text: "Vehicles (No)",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: textFormatter,
    },
    {
      dataField: "species",
      text: "Species (No)",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: textFormatter,
    },
    {
      dataField: "created",
      text: "Created date",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: dateFormatter,
    },
    {
      dataField: "edited",
      text: "Edited date",
      style: { whiteSpace: "nowrap", lineHeight: "1.5" },
      formatter: dateFormatter,
    },
  ];

  // return bootstrap table
  return (
    <section>
      <h1>
        <p>{info[0].title}</p>
        <p>by {info[0].director}</p>
      </h1>

      <div className={styles.tableWrapper} data-testid="film">
        <BootstrapTable
          classes={styles.table}
          keyField="id"
          data={info}
          columns={columns}
        />
      </div>
    </section>
  );
};

export default FilmInfo;
