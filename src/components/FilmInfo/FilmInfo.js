import styles from "./FilmInfo.module.css";
import { format, parseISO } from "date-fns";
import { Fragment } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable from "react-bootstrap-table-next";

const FilmInfo = (props) => {
    // info set up
    let info = props.info;
    
    // set up bootstrap
    const columns = [
        {dataField: 'title', text: 'Title', style: {whiteSpace: "nowrap", lineHeight: "1.5"}},
        {dataField: 'opening_crawl', text: 'Opening crawl', style: {fontStyle: "italic", lineHeight: "1.5", minWidth: "450px"}},
        {dataField: 'director', text: 'Director', style: {whiteSpace: "nowrap", lineHeight: "1.5"}},
        {
            dataField: 'producer', text: 'Producer(s)', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent, row) => {
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
            dataField: 'release_date', text: 'Release date', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent, row) => {
                return <div>{format(parseISO(rowContent), "MMM do, yyyy")}</div>;
            },
        },
        {
            dataField: 'characters', text: 'Characters (No)', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent) => {
                return (
                    <Fragment>
                        {rowContent.length}
                    </Fragment>
                );
            },
        },
        {
            dataField: 'planets', text: 'Planets (No)', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent) => {
                return (
                    <Fragment>
                        {rowContent.length}
                    </Fragment>
                );
            },
        },
        {
            dataField: 'starships', text: 'Starships (No)', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent) => {
                return (
                    <Fragment>
                        {rowContent.length}
                    </Fragment>
                );
            },
        },
        {
            dataField: 'vehicles', text: 'Vehicles (No)', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent) => {
                return (
                    <Fragment>
                        {rowContent.length}
                    </Fragment>
                );
            },
        },
        {
            dataField: 'species', text: 'Species (No)', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent) => {
                return (
                    <Fragment>
                        {rowContent.length}
                    </Fragment>
                );
            },
        },
        {
            dataField: 'created', text: 'Created date', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent, row) => {
                return <div>{format(parseISO(rowContent), "MMM do, yyyy")}</div>;
            },
        },
        {
            dataField: 'edited', text: 'Edited date', style: {whiteSpace: "nowrap", lineHeight: "1.5"}, formatter: (rowContent, row) => {
                return <div>{format(parseISO(rowContent), "MMM do, yyyy")}</div>;
            },
        },
    ];
    
    // return bootstrap table
    return <section>
        <h1>
            <p>{info[0].title}</p>
            <p>by {info[0].director}</p>
        </h1>
        
        <div className={styles.tableWrapper}>
            <BootstrapTable classes={styles.table}
                            keyField="id"
                            data={info}
                            columns={columns} />
        </div>
    </section>;
};

export default FilmInfo;
