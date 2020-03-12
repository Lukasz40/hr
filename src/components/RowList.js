import React from "react";
import { Table, Button } from "react-bootstrap";
import Inputs from "./Inputs"

const Cell = (props) => {
  const {row,rowInfo,index} = props
  const {
    editIdx,
    stopEditing,
    startEditing,
    handlerDeleteRow,
    editedSection,
    sectionInfo,
    optionsList,
    experienceDictionary,
    lastUseDictionary,
    handleEditChange} = rowInfo
  const {inputList} = sectionInfo
  const sectionName = sectionInfo.name
  const currentlyEditing = editIdx === index && editedSection === sectionName;
  return (
      <>
        {inputList.map((input,i) => (
          <td key={i}>
            {(currentlyEditing && input.editable === true) ? (
              <Inputs 
                row={row[input.name]}
                sectionInfo={sectionInfo}  
                input={input} 
                handleChange={e => handleEditChange(e, index, sectionName)}
                optionsList={optionsList} 
                experienceDictionary={experienceDictionary}
                lastUseDictionary={lastUseDictionary} />
            ) : (
              <>{row[input.name]}</>
            )}
          </td>
        ))}
        <td>
          <Button
            onClick={() => {
              currentlyEditing
                ? stopEditing(index)
                : startEditing(index, sectionName);
            }}
          >
            {currentlyEditing ? "Zapisz" : "Edytuj"}
          </Button>
          <Button onClick={() => handlerDeleteRow(index, sectionName)}>Usuń</Button>
        </td>
      </>
  )
};

const RowList = props => {
  const { list = [] } = props;
  return (
    <>
      {list.length > 0 ? (
        <Table striped bordered hover>
          <tbody>
            {list.map((row, i) => (
              <tr key={i}>
                <Cell rowInfo={props} row={row} index={i} />
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <></>
      )}
    </>
  );
};

export default RowList;
