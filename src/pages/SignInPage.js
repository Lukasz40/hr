import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class SignIn extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    handlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    validateForm = () => {
        return (
            this.state.email.length > 0 
            && this.state.password.length > 0 
            && this.state.firstName.length > 0 
            && this.state.lastName.length > 0
        )
    }

    render() {
        const {handlerSubmitSignIn} = this.props;
        return (
            <Container className="signIn">
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <h3>Rejestracja</h3>
                        <Form onSubmit={(e) => handlerSubmitSignIn(e,this.state)}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>Imię</Form.Label>
                                    <Form.Control value={this.state.firstName} onChange={this.handlerChange} name="firstName"  placeholder="Wpisz imię" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridLastName">
                                <   Form.Label>Nazwisko</Form.Label>
                                    <Form.Control value={this.state.lastName} onChange={this.handlerChange} name="lastName" placeholder="Wpisz nazwisko" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={this.state.email} onChange={this.handlerChange} name="email" type="email"  placeholder="Wpisz email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPassword">
                                <   Form.Label>Hasło</Form.Label>
                                    <Form.Control value={this.state.password} onChange={this.handlerChange} name="password" type="password" placeholder="Wpisz hasło" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Button className="btn-block" disabled={!this.validateForm()} variant="primary" type="submit">
                                        Wyślij
                                    </Button>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <p className="forgot-password text-right">
                                        Masz konto? <Link to="/login">Zaloguj się</Link>
                                    </p>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}