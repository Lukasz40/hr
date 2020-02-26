import React, { Component } from "react";
import { Form, Col, Button } from 'react-bootstrap';
import RowList from "../RowList";
import Select from "../Select";

export default class  DataBase extends Component {
    state = {
        databaseName: "",
        databaseExperience: "",
        databaseLastUse: ""
      };
    
      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      };
    
      handleAdd = () => {
        const add = this.props.handlerAddRow(this.state, "database")
        if(add){
          this.setState({
            databaseName: "",
            databaseExperience: "",
            databaseLastUse: ""
          })
        }
      }

    render(){
      const list = this.props.userForm.database
      const { experienceDictionary,
            lastUseDictionary,
            databaseDictionary,
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
                  section="database" 
                  rowName="databaseName"
                  experienceDictionary="databaseExperience"
                  lastUseDictionary="databaseLastUse"
                  handlerDeleteRow={handlerDeleteRow}
                  handleEditChange={handleEditChange}
                  startEditing={startEditing}
                  stopEditing={stopEditing}
                  handleChange={this.handleChange}
                  expirenceOptionsList={experienceDictionary}
                  lastUseOptionsList={lastUseDictionary} />
              <Form.Row>

                  <Select 
                    label="Bazy danych" 
                    section="database"
                    name="databaseName" 
                    dictionary={databaseDictionary}
                    handleChange={this.handleChange} 
                    value={this.state.database} 
                    optionsList={optionsList} />

                
                  <Select 
                    label="Doświadczenie w latach" 
                    name="databaseExperience" 
                    handleChange={this.handleChange} 
                    value={this.state.databaseExperience} 
                    optionsList={experienceDictionary} />

                  <Select 
                    label="Ostatnie użycie (rok)" 
                    name="databaseLastUse" 
                    handleChange={this.handleChange} 
                    value={this.state.databaseLastUse} 
                    optionsList={lastUseDictionary} />
                
                  <Form.Group as={Col} className="center">
                      <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.databaseName,this.state.databaseExperience,this.state.databaseLastUse)} >
                          Dodaj
                      </Button>
                  </Form.Group>
                
              </Form.Row>
            </>
        )
    }
}