import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const Signup: React.FC = () => {
  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">Enter your full name</Form.Text>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>91</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl placeholder="Phone Number" />
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg" block>
        Submit
      </Button>
    </Form>
  );
};

export default Signup;
