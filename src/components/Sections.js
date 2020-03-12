import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "./RowList";
import Inputs from "./Inputs";
import useForm from "./useForm"


const Sections = props => {
    const [state,handleChange,clearState] = useForm(props)

    const handleAdd = () => {
        const add = props.handlerAddRow(state, props.sectionInfo.name)
        if(add){
            clearState()
        }
    }

    const { 
        experienceDictionary,
        lastUseDictionary,
        handlerDeleteRow,
        handleEditChange,
        validateForm,
        editIdx,
        startEditing,
        stopEditing,
        optionsList,
        editedSection,
        sectionInfo} = props
    const {name} = sectionInfo
    const list = props.userForm[name]
    return (
        <>
            <RowList 
                list={list}
                optionsList={optionsList}
                sectionInfo={sectionInfo}
                editIdx={editIdx} 
                editedSection={editedSection}
                handlerDeleteRow={handlerDeleteRow} 
                handleEditChange={handleEditChange}
                startEditing={startEditing} 
                stopEditing={stopEditing}
                handleChange={handleChange}
                clearState={clearState}
                experienceDictionary={experienceDictionary}
                lastUseDictionary={lastUseDictionary} 
            />

            <Form.Row>

                 {sectionInfo.inputList.map((input,i) => (
                    <Inputs 
                        key={i} 
                        row={state[input.name]}
                        sectionInfo={sectionInfo} 
                        handleChange={handleChange} 
                        input={input} 
                        optionsList={optionsList} 
                        experienceDictionary={experienceDictionary}
                        lastUseDictionary={lastUseDictionary} />
                ))}

                <Form.Group as={Col} className="center">
                    <Button onClick={() => handleAdd()} disabled={validateForm()} >
                        Dodaj
                    </Button>
                </Form.Group>
            </Form.Row>

            
        </>
    )
}

export default Sections;