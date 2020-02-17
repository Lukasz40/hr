import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";

export default class Education extends Component {
  state = {
    school: "",
    department: "",
    direction: "",
    title: "",
    education_year: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "education")
    console.log(this.state)
    if(add){
      this.setState({
        school: "",
        department: "",
        direction: "",
        title: "",
        education_year: ""
      })
    }
  }

  render() {
    const list = this.props.userForm.education;
    return (
      <>
        <RowList list={list} section="education" />
        <Form.Row>
          <Form.Group as={Col} controlId="formGridShool">
            <Form.Label>Szkoła</Form.Label>
            <Form.Control
              value={this.state.school}
              onChange={this.handleChange}
              name="school"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDepartment">
            <Form.Label>Wydział</Form.Label>
            <Form.Control
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
              placeholder="wypełnij pole"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridDirection">
            <Form.Label>Kierunek</Form.Label>
            <Form.Control
              value={this.state.direction}
              onChange={this.handleChange}
              name="direction"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Uzyskany tytuł</Form.Label>
            <Form.Control
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              placeholder="wypełnij pole"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEducationYear">
            <Form.Label>Rok ukończenia</Form.Label>
            <Form.Control
              value={this.state.education_year}
              onChange={this.handleChange}
              name="education_year"
              placeholder="wypełnij pole"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button
            onClick={() => this.handleAdd()}
          >
            Dodaj
          </Button>
        </Form.Row>
      </>
    );
  }
}
