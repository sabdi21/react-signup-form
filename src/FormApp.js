import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Col, Button } from 'reactstrap';

class FormApp extends Component  {
    state= {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('this is the output:', e.target.value)
        // if (this.state.newItemText) {
        //     this.props.add(this.state.newItemText)
        //     this.setState({newItemText: ' '})
        // }
    }
    render () {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <h1>Complete the form below!</h1>
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input
                            type="firstname"
                            name="firstname"
                            id="firstname"
                            value={this.state.firstname}
                            // add an onchange method to get each character input 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input
                            type="lastname"
                            name="lastname"
                            id="lastname"
                            value={this.state.lastname}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                        />
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 50, offset: 0 }}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

}
export default FormApp
