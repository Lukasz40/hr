import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import RowList from "../RowList";
import Options from "../Options";

export default class DevLang extends Component {
  state = {
    devLangs: "",
    devExperience: "",
    devLastUse: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleAdd = () => {
    const add = this.props.handlerAddRow(this.state, "devLang")
    if(add){
      this.setState({
        devLangs: "",
        devExperience: "",
        devLastUse: ""
      })
    }
  }
  
  checkOptions = (item,listitem) => {
    const checkItem = listitem.includes(item)
    return checkItem
  }

  options = () => {
    const listitem = this.props.userForm.devLang.map(item => item.devLangs)
    const lists = this.props.devLangsDictionary.filter(item => (this.checkOptions(item,listitem) !== true ? item : '' ))
    return lists
  }

  render() {
    const list = this.props.userForm.devLang
    const {experienceDictionary, lastUseDictionary, handlerDeleteRow} = this.props
    return (
      <>
        <RowList list={list} section="devLang" handlerDeleteRow={handlerDeleteRow} />
        <Form.Row>
            <Form.Group as={Col} controlId="devLangs">
                <Form.Label>Języki programowania</Form.Label>
                <Form.Control 
                    as="select"
                    value={this.state.devLangs}
                    onChange={this.handleChange}
                    name="devLangs"
                    >
                    <option value="">Wybierz...</option>
                    <Options list={this.options()} />
                </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="devExperience">
                <Form.Label>Doświadczenie w latach</Form.Label>
                <Form.Control 
                    as="select" 
                    value={this.state.devExperience}
                    onChange={this.handleChange}
                    name="devExperience"
                    >
                    <option>Wybierz...</option>
                    <Options list={experienceDictionary} />
                </Form.Control>

            </Form.Group>
            <Form.Group as={Col} controlId="devLastUse">
                <Form.Label>Doświadczenie w latach</Form.Label>
                <Form.Control 
                    as="select" 
                    value={this.state.devLastUse}
                    onChange={this.handleChange}
                    name="devLastUse"
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
