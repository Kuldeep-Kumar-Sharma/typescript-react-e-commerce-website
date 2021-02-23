import React from "react";
import { Container, Jumbotron, Card, Tabs, Tab } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import { Wrapper } from "./Authentication.styles";

const Authentication = () => {
  return (
    <Container>
      <Jumbotron fluid>
        <Container>
          <h3>Dummy Store</h3>
          <p>One Place to buy all your dummies.</p>
        </Container>
      </Jumbotron>
      <Card>
        <Card.Body>
          <Container>
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
              <Tab eventKey="login" title="Login">
                <Wrapper>
                  <Login />
                </Wrapper>
              </Tab>
              <Tab eventKey="signup" title="Signup">
                <Wrapper>
                  <Signup />
                </Wrapper>
              </Tab>
            </Tabs>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Authentication;
