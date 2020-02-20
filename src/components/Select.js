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

const Select = (props) => {
    const {label, name, section, dictionary, value, handleChange, optionsList} = props
    return (
        <>
            <Form.Group as={Col} controlId={name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control 
                    as="select"
                    value={value}
                    onChange={handleChange}
                    name={name}
                    >
                    <option value="">Wybierz...</option>
                    {typeof optionsList !== "function" ? <Options list={optionsList}/> : <Options list={optionsList(name,section,dictionary)} />  }
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default Select;