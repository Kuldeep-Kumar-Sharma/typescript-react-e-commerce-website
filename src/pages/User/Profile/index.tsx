import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Badge,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Wrapper } from "./Profile.styles";
import { User } from "../../../Models/User";

const Profile: React.FC<User> = (props) => {
  const [lgShow, setLgShow] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col md={4}>
            <div className="profile-img">
              <img src={props.profileImage} alt="" />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="profile-head">
              <h5>Name: {props.name}</h5>
              <h6>Phone Number: {props.phone}</h6>
              <p className="profile-email">Email: {props.email}</p>
              <p className="profile-details">
                {props.address?.map((addres) => {
                  return (
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>Address:</Card.Title>
                        <Card.Text>
                          <b>House Number:</b>
                          {addres.hno}
                          <br />
                          <b>Address:</b>
                          {addres.address}
                          <br />
                          <b>City:</b>
                          {addres.city}
                          <br />
                          <b>District:</b>
                          {addres.district}
                          <br />
                          <b>PIN:</b>
                          {addres.pin}
                          <br />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </p>
              <p className="proile-details">
                <Button variant="primary">
                  Order Details{" "}
                  <Badge variant="light">{props.orders?.length}</Badge>
                  <span className="sr-only">orders</span>
                </Button>
              </p>
            </div>
          </Col>
          <Col md={2}>
            <Button
              className="profile-edit-btn"
              onClick={() => setLgShow(true)}
            >
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Your Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCustomerName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formCustomerPhone">
                <Form.Label>Phone</Form.Label>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="prefix-phone">+91</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="974128536"
                    aria-label="Username"
                    aria-describedby="prefix-phone"
                  ></FormControl>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formCustomerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit" size="lg" block>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Wrapper>
    </Container>
  );
};

export default Profile;
