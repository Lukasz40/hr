import React from "react";
import {Form,Button,Col,Row,Container,Accordion,Card} from "react-bootstrap";
import configIndex from "../layouts/Config"
import Sections from "../components/Sections"
const experienceDictionary =  ["<0,5","1","2","3","4","5","6","7","8","9","10",">10"]
const lastUseDictionary =     ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015",
                              "2016","2017","2018","2019","2020"]

class UserForm extends React.Component {
  state = {
    editIdx: -1,
    editedSection: "",
    userForm: {
      firstName: "Łukasz",
      lastName: "Karbowniczek",
      devLangs: [
          { devLang: "HTML", devExperience: ">10", devLastUse: "2020" },
          { devLang: "HTML5", devExperience: "6", devLastUse: "2020" },
          { devLang: "CSS", devExperience: ">10", devLastUse: "2020" },
          { devLang: "CSS3", devExperience: ">10", devLastUse: "2020" }
    ],
      tools: [],
      database: [],
      others: [],
      education: [],
      languages: [],
      projects: [],
      certificates: []
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    //this.setState({})
  };

  handleChange = e => {
    const name = [e.target.name];
    const value = e.target.value;
    this.setState(prevState => {
      const userForm = {
        ...prevState.userForm,
        [name]: value
      };

      return {
        userForm
      };
    });
  };

  handlerAddRow = (rowState, sectionName) => {
    this.setState(prevState => {
      const section = prevState.userForm[sectionName].concat(rowState);
      const sections = {
        ...prevState.userForm,
        [sectionName]: section
      };
      return {
        userForm: sections
      };
    });
    return true;
  };

  handlerDeleteRow = (index, sectionName) => {
    const section = this.state.userForm[sectionName].splice(index, 1);
    const userForm = this.state.userForm
    this.setState({
        ...userForm,
        [sectionName]: section
    })
  }

  startEditing = (index,sectionName) => {
    this.setState({
       editIdx: index,
       editedSection: sectionName
    })
  }

  handleEditChange = (e, i, sectionName) => {
    const {name} = e.target
    const {value} = e.target
    this.setState(prevState => {
      const section = prevState.userForm[sectionName].map(
          (row, j) => (j === i ? {...row, [name]: value} : row)
        )
        const sections = {
          ...prevState.userForm,
          [sectionName]: section
        };
        return {
          userForm: sections
        };
    });
  }

  stopEditing = () => {
    this.setState({editIdx: -1})
  }

  validateForm = (a,b,c) => {
    if(a && b && c){
      return (a.length > 0 && b.length > 0 && c.length > 0)
    }else if(c === false) {
      return (a.length > 0 && b.length)
    }
  }

  checkOptions = (item,listitem) => {
    const checkItem = listitem.includes(item)
    return checkItem
  }

  optionsList = (name,section,dictionary) => {
    const listitem = this.state.userForm[section].map(item => item[name])
    const lists = dictionary.filter(item => (this.checkOptions(item,listitem) !== true ? item : '' ))
    return lists
  }

  render() {
    const { userForm } = this.state;
    const sections = configIndex.filter((section) => section.name)
    return (
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col xl={10}>
            <Form>
              <Form.Group>
                <h3>Szablon życiorysu pracownika</h3>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    value={userForm.firstName}
                    onChange={this.handleChange}
                    name="firstName"
                    placeholder="Wpisz imię"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>nazwisko</Form.Label>
                  <Form.Control
                    value={userForm.lastName}
                    onChange={this.handleChange}
                    name="lastName"
                    placeholder="Wpisz nazwisko"
                  />
                </Form.Group>
              </Form.Row>
              <Accordion>
                {sections.map((section) => (
                  <Card key={section.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={section.id}>
                      {section.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={section.id}>
                      <Card.Body>
                        <Sections
                          sectionInfo={section}
                          experienceDictionary={experienceDictionary}
                          lastUseDictionary={lastUseDictionary}
                          userForm={userForm}
                          editIdx={this.state.editIdx}
                          editedSection={this.state.editedSection}
                          handlerAddRow={this.handlerAddRow}
                          handleEditChange={this.handleEditChange}
                          handlerDeleteRow={this.handlerDeleteRow}
                          validateForm={this.validateForm}
                          startEditing={this.startEditing}
                          stopEditing={this.stopEditing}
                          optionsList={this.optionsList}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
              <Form.Row>
                <Button
                  onClick={this.handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserForm;
