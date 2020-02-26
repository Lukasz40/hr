import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";

export default class Education extends Component {
  state = {
    school: "",
    years: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "education")
    if(add){
      this.setState({
        school: "",
        years: ""
      })
    }
  }

  render() {
    const list = this.props.userForm.education;
    const {
          handlerDeleteRow,
          handleEditChange,
          validateForm,
          editIdx,
          startEditing,
          stopEditing,
          editedSection} = this.props
    return (
      <>
        <RowList 
          list={list} 
          editIdx={editIdx} 
          editedSection={editedSection}
          section="education" 
          rowName="school"
          rowsList={[
            {
              name: "school",
              label: "Nazwa uczelni"
            },
            {
              name: "years",
              label: "Od - do ( lata)"
            }
          ]}
          handlerDeleteRow={handlerDeleteRow} 
          handleEditChange={handleEditChange}
          startEditing={startEditing} 
          stopEditing={stopEditing}
          handleChange={this.handleChange}
        />
        <Form.Row>
          <Form.Group as={Col} controlId="school">
            <Form.Label>Nazwa uczelni</Form.Label>
            <Form.Control
              value={this.state.school}
              onChange={this.handleChange}
              name="school"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="years">
            <Form.Label>Od - do ( lata)</Form.Label>
            <Form.Control
              value={this.state.years}
              onChange={this.handleChange}
              name="years"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} className="center">
              <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.school,this.state.years,false)} >
                  Dodaj
              </Button>
          </Form.Group>
        </Form.Row>
      </>
    );
  }
}
