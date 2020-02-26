import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";
import Select from "../Select";

export default class Tools extends Component {
  state = {
    tool: "",
    toolExperience: "",
    toolLastUse: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "tools")
    if(add){
      this.setState({
        tool: "",
        toolExperience: "",
        toolLastUse: ""
      })
    }
  }
  
  render() {
    const list = this.props.userForm.tools
    const { experienceDictionary,
            lastUseDictionary,
            toolsDictionary,
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
            section="tools" 
            rowName="tool"
            experienceDictionary="toolExperience"
            lastUseDictionary="toolLastUse"
            handlerDeleteRow={handlerDeleteRow} 
            handleEditChange={handleEditChange}
            startEditing={startEditing} 
            stopEditing={stopEditing}
            handleChange={this.handleChange}
            expirenceOptionsList={experienceDictionary}
            lastUseOptionsList={lastUseDictionary} />
        <Form.Row>

            <Select 
              label="Narzędzia" 
              section="tools"
              name="tool" 
              dictionary={toolsDictionary}
              handleChange={this.handleChange} 
              value={this.state.tool} 
              optionsList={optionsList} />

           
            <Select 
              label="Doświadczenie w latach" 
              name="toolExperience" 
              handleChange={this.handleChange} 
              value={this.state.toolExperience} 
              optionsList={experienceDictionary} />

            <Select 
              label="Ostatnie użycie (rok)" 
              name="toolLastUse" 
              handleChange={this.handleChange} 
              value={this.state.toolLastUse} 
              optionsList={lastUseDictionary} />
          
            <Form.Group as={Col} className="center">
                <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.tool,this.state.toolExperience,this.state.toolLastUse)} >
                    Dodaj
                </Button>
            </Form.Group>
          
        </Form.Row>
      </>
    );
  }
}
