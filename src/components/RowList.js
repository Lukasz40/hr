import React from "react";
//import Row from "./Row"
import { Table, Button, Form, Col } from 'react-bootstrap';
import Select from "./Select";

const Row = (props) => {
    const {
        handleEditChange,
        handlerDeleteRow,
        startEditing,
        stopEditing,
        editIdx,
        row, 
        index, 
        section,
        rowName,
        experienceDictionary,
        lastUseDictionary,
        expirenceOptionsList,
        lastUseOptionsList,
        rowsList} = props
    const currentlyEditing = editIdx === props.index
    
    return (
            <tr>
                {rowsList ? (
                    <>
                        { currentlyEditing ? (
                            <>
                                {rowsList.map((col,i) => (
                                    <td key={i}>
                                        <Form.Group as={Col} controlId={col.name}>
                                            <Form.Label>{col.label}</Form.Label>
                                            <Form.Control
                                                    value={row[col.name]}
                                                    onChange={(e) => handleEditChange(e,index,section)}
                                                    name={col.name}
                                                    placeholder="wypełnij pole"
                                                />
                                        </Form.Group>
                                    </td>
                                ))}
                            </>
                        ) : (
                            <>
                                {rowsList.map((col,i) => <td key={i}>{row[col.name]}</td>)}
                            </>
                        )}
                    </>
                ) : (
                    <>
                       <td>{row[rowName]}</td>
                        <td>
                            {
                            currentlyEditing ? 
                                (<Select 
                                    label={"Doświadczenie w latach"} 
                                    name={experienceDictionary} 
                                    handleChange={(e) => handleEditChange(e,index,section)}
                                    value={row[experienceDictionary]} 
                                    optionsList={expirenceOptionsList}
                                    />)
                            : 
                                (<>{row[experienceDictionary]}</>)
                            }
                        </td>
                        <td>
                            {
                            currentlyEditing ? 
                                (<Select 
                                    label="Ostatnie użycie (rok)" 
                                    name={lastUseDictionary} 
                                    handleChange={(e) => handleEditChange(e,index,section)}
                                    value={row[lastUseDictionary]} 
                                    optionsList={lastUseOptionsList}
                                    />)
                            : 
                                (<>{row[lastUseDictionary]}</>)
                            }    
                        </td> 
                    </>
                )}
                
                <td>
                    <Button onClick={() => {currentlyEditing ? stopEditing(index) : startEditing(index)}}>
                        {currentlyEditing ? "Zapisz" : "Edytuj"}
                    </Button>
                    <Button onClick={() => handlerDeleteRow(index,section)}>Usuń</Button>
                </td>
            </tr>
    )
};


const RowList = (props) => {
    const {list = []} = props;
    return (
        <>
            {
                list.length > 0 ? 
                (<Table striped bordered hover>
                    <tbody>
                        {list.map((row, index) => 
                            <Row 
                                key={index} 
                                row={row}
                                rowsList={props.rowsList} 
                                editIdx={props.editIdx} 
                                startEditing={props.startEditing} 
                                stopEditing={props.stopEditing} 
                                handlerDeleteRow={props.handlerDeleteRow} 
                                index={index} 
                                section={props.section}
                                rowName={props.rowName}
                                handleChange={props.handleChange}
                                handleEditChange={props.handleEditChange}
                                experienceDictionary={props.experienceDictionary}
                                lastUseDictionary={props.lastUseDictionary}
                                expirenceOptionsList={props.expirenceOptionsList}
                                lastUseOptionsList={props.lastUseOptionsList}
                                 />
                            )}
                    </tbody>
                </Table>) 
                : 
                <></>
            }
        </>
    )
};

export default RowList;