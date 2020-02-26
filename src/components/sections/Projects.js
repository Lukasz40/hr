import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";

export default class Projects extends Component {
  state = {
    projectName: "",
    projectDescription: "",
    projectTechnologies: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "projects")
    if(add){
      this.setState({
        projectName: "",
        projectDescription: "",
        projectTechnologies: ""
      })
    }
  }

  render() {
    const list = this.props.userForm.projects;
    const {
          handlerDeleteRow,
          handleEditChange,
          validateForm,
          editIdx,
          startEditing,
          stopEditing,
          editedSection
          } = this.props
    return (
      <>
        <RowList 
          list={list} 
          editIdx={editIdx} 
          editedSection={editedSection}
          section="projects" 
          rowName="projectName"
          rowsList={[
            {
              name: "projectName",
              label: "Nazwa pracodawy/klienta"
            },
            {
              name: "projectDescription",
              label: "Opis projektu i prac w projekcie"
            },
            {
              name: "projectTechnologies",
              label: "Spis użytych technologii" 
            }
          ]}
          handlerDeleteRow={handlerDeleteRow} 
          handleEditChange={handleEditChange}
          startEditing={startEditing} 
          stopEditing={stopEditing}
          handleChange={this.handleChange}
        />
        <Form.Row>
          <Form.Group as={Col} controlId="projectName">
            <Form.Label>Nazwa pracodawy/klienta</Form.Label>
            <Form.Control
              value={this.state.projectName}
              onChange={this.handleChange}
              name="projectName"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="projectDescription">
            <Form.Label>Spis użytych technologii</Form.Label>
            <Form.Control
              value={this.state.projectDescription}
              onChange={this.handleChange}
              name="projectDescription"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="projectTechnologies">
            <Form.Label>Opis projektu i prac w projekcie</Form.Label>
            <Form.Control
              value={this.state.projectTechnologies}
              onChange={this.handleChange}
              name="projectTechnologies"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} className="center">
              <Button onClick={() => this.handleAdd()} disabled={!validateForm(this.state.projectName,this.state.projectDescription,this.state.projectTechnologies)} >
                  Dodaj
              </Button>
          </Form.Group>
        </Form.Row>
      </>
    );
  }
}
