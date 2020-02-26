import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import RowList from "../RowList";
import Select from "../Select";

export default class Others extends Component {
    state = {
        otherName: "",
        otherExperience: "",
        otherLastUse: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleAdd = () => {
        const add = this.props.handlerAddRow(this.state, "others")
        if(add){
            this.setState({
            otherName: "",
            otherExperience: "",
            otherLastUse: ""
            })
        }
    }
    render(){
        const list = this.props.userForm.others
        const { experienceDictionary,
            lastUseDictionary,
            othersDictionary,
            handlerDeleteRow,
            handleEditChange,
            validateForm,
            editIdx,
            startEditing,
            stopEditing,
            optionsList,
            editedSection} = this.props
        return (
            <>
                <RowList 
                  list={list} 
                  editIdx={editIdx} 
                  editedSection={editedSection}
                  section="others" 
                  rowName="otherName"
                  experienceDictionary="otherExperience"
                  lastUseDictionary="otherLastUse"
                  handlerDeleteRow={handlerDeleteRow} 
                  handleEditChange={handleEditChange}
                  startEditing={startEditing} 
                  stopEditing={stopEditing}
                  handleChange={this.handleChange}
                  expirenceOptionsList={experienceDictionary}
                  lastUseOptionsList={lastUseDictionary} />
                <Form.Row>
                    <Select 
                        label="Inne (systemy operacyjne, platformy)" 
                        section="others"
                        name="otherName" 
                        dictionary={othersDictionary}
                        handleChange={this.handleChange} 
                        value={this.state.otherName} 
                        optionsList={optionsList} />
                    <Select 
                        label="Doświadczenie w latach" 
                        name="otherExperience" 
                        handleChange={this.handleChange} 
                        value={this.state.otherExperience} 
                        optionsList={experienceDictionary} />
                    <Select 
                        label="Ostatnie użycie (rok)" 
                        name="otherLastUse" 
                        handleChange={this.handleChange} 
                        value={this.state.otherLastUse} 
                        optionsList={lastUseDictionary} />
                    <Form.Group as={Col} className="center">
                        <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.otherName,this.state.otherExperience,this.state.otherLastUse)} >
                            Dodaj
                        </Button>
                    </Form.Group>
                </Form.Row>
            </>
        )
    }
}