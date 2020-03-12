import React from "react";
import { Form, Col } from "react-bootstrap";

const Options = (props) => {
    const {list = []} = props;
    const listItems = list.map((item, index) => <option key={index}>{item}</option>)
    return (
        <>
            {listItems}
        </>
    )
};

const RenderInput = (props) => {
    const {input, handleChange, optionsList, sectionInfo,row} = props
    const {label, name, type, dictionary} = input
    const value = row
    const dictionaryArray = props[dictionary]
    
    switch(type) {
        case 'select':
            return (
                <Form.Group as={Col} controlId={name}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        as="select"
                        value={value || ''}
                        onChange={handleChange}
                        name={name}
                        >
                        <option value="">Wybierz...</option>
                        {dictionaryArray ? <Options list={dictionaryArray}/> : <Options list={optionsList(name,sectionInfo.name,sectionInfo.dictionary)} />}
                    </Form.Control>
                </Form.Group>
            );
        default:
            return (
                <Form.Group as={Col} controlId={name}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                        value={value || ''}
                        onChange={handleChange}
                        name={name}
                        placeholder="wypełnij pole"
                    />
                </Form.Group>
            )
        }
}



const Inputs = props => {
    const {input,optionsList,handleChange,sectionInfo,experienceDictionary,lastUseDictionary,row} = props
    return (
        <div>
            <RenderInput 
                row={row}
                input={input} 
                optionsList={optionsList} 
                handleChange={handleChange} 
                sectionInfo={sectionInfo}
                experienceDictionary={experienceDictionary}
                lastUseDictionary={lastUseDictionary} />
        </div>
        
    );
  };
  
  export default Inputs;