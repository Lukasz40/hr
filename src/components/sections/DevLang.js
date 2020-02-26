import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";
import Select from "../Select";

export default class DevLang extends Component {
  state = {
    devLang: "",
    devExperience: "",
    devLastUse: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }; 

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "devLangs")
    if(add){
      this.setState({
        devLang: "",
        devExperience: "",
        devLastUse: ""
      })
    }
  }

  render() {
    const list = this.props.userForm.devLangs
    const { experienceDictionary,
            lastUseDictionary,
            devLangsDictionary,
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
            section="devLangs" 
            rowName="devLang"
            experienceDictionary="devExperience"
            lastUseDictionary="devLastUse"
            handlerDeleteRow={handlerDeleteRow} 
            handleEditChange={handleEditChange}
            startEditing={startEditing} 
            stopEditing={stopEditing}
            handleChange={this.handleChange}
            expirenceOptionsList={experienceDictionary}
            lastUseOptionsList={lastUseDictionary} />
        <Form.Row>
            <Select 
              label="Języki programowania" 
              section="devLangs"
              name="devLang" 
              dictionary={devLangsDictionary}
              handleChange={this.handleChange} 
              value={this.state.devLang} 
              optionsList={optionsList} />

            <Select 
              label="Doświadczenie w latach" 
              name="devExperience" 
              handleChange={this.handleChange} 
              value={this.state.devExperience} 
              optionsList={experienceDictionary} />

            <Select 
              label="Ostatnie użycie (rok)" 
              name="devLastUse" 
              handleChange={this.handleChange} 
              value={this.state.devLastUse} 
              optionsList={lastUseDictionary} />
          
            <Form.Group as={Col} className="center">
                <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.devLang,this.state.devExperience,this.state.devLastUse)} >
                    Dodaj
                </Button>
            </Form.Group>
          
        </Form.Row>
      </>
    );
  }
}
