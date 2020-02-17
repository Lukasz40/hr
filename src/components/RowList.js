import React from "react";
import Row from "./Row"
import { Table } from 'react-bootstrap';

const RowList = (props) => {
    const {list = []} = props;
    const listItem = list.map((row, index) => <Row key={index} row={row} handlerDeleteRow={props.handlerDeleteRow} index={index} section={props.section} />);
    return (
        <>
            {listItem.length > 0 ? (<Table striped bordered hover><tbody>{listItem}</tbody></Table>) : <></>}
        </>
    )
};

export default RowList;