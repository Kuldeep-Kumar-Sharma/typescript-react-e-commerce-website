import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card from "../Card";
import { ProductCardProps } from "../../../Models/ProductCard";
import { Wrapper } from "./Search.style";
import { SearchProps } from "../../../Models/Search";

//
const PC: ProductCardProps = {
  name: "Blouse",
  price: 250,
  rating: 5,
  sale: true,
  discount: 10,
  productImage:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
  productImage2:
    "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg",
};

const Search: React.FC<SearchProps> = (props) => {
  const filter = [];
  for (let i: number = 0; i < props.filters.length; i++) {
    filter.push(
      <Nav.Item>
        <Nav.Link eventKey={props.filters[i].eventKey}>
          {props.filters[i].name}
        </Nav.Link>
      </Nav.Item>
    );
  }

  return (
    <Wrapper>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {filter}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Container>
                  <Row>
                    {props.productCards.map((product) => (
                      <Card {...product} />
                    ))}
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Wrapper>
  );
};

export default Search;
