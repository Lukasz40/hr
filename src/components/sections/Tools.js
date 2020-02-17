import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";
import Options from "../Options";

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
    const list = this.props.userForm.tools;
    const {experienceDictionary,lastUseDictionary,handlerDeleteRow} = this.props
    return (
      <>
        <RowList list={list} section="tools" handlerDeleteRow={handlerDeleteRow} />
        <Form.Row>
            <Form.Group as={Col} controlId="tool">
                <Form.Label>Narzędzia</Form.Label>
                <Form.Control 
                    as="select"
                    value={this.state.tool}
                    onChange={this.handleChange}
                    name="tool"
                    >
                    <option>Wybierz...</option>
                    <option>FTL</option>
                    <option>GIT</option>
                    <option>SVN</option>
                    <option>RWD</option>
                    <option>Freemarker</option>
                    <option>Maven</option>
                </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="toolExperience">
                <Form.Label>Doświadczenie w latach</Form.Label>
                <Form.Control 
                    as="select" 
                    value={this.state.toolExperience}
                    onChange={this.handleChange}
                    name="toolExperience"
                    >
                    <option>Wybierz...</option>
                    <Options list={experienceDictionary} />
                </Form.Control>

            </Form.Group>
            <Form.Group as={Col} controlId="toolLastUse">
                <Form.Label>Ostatnie użycie (rok</Form.Label>
                <Form.Control 
                    as="select" 
                    value={this.state.toolLastUse}
                    onChange={this.handleChange}
                    name="toolLastUse"
                >
                    <option>Wybierz...</option>
                    <Options list={lastUseDictionary} />
                </Form.Control>

            </Form.Group>
            <Form.Group as={Col} className="center">
                <Button
                    onClick={() => this.handleAdd()}
                >
                    Dodaj
                </Button>
            </Form.Group>
          
        </Form.Row>
      </>
    );
  }
}
