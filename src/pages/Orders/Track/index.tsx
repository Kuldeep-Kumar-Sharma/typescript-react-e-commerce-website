import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Badge,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./style";

const Track: React.FC = () => {
  return (
    <Wrapper>
      <Row className="shop-tracking-status">
        <Container>
          <div className="well">
            <div className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label">Order id</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputOrderTrackingID"
                    value=""
                    placeholder="# put your order id here"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button
                    type="button"
                    id="shopGetOrderStatusID"
                    className="btn btn-success"
                  >
                    Get status
                  </button>
                </div>
              </div>
            </div>

            <h4>Your order status:</h4>

            <ul className="list-group">
              <li className="list-group-item">
                <span className="prefix">Date created:</span>
                <span className="label label-success">12.12.2013</span>
              </li>
              <li className="list-group-item">
                <span className="prefix">Last update:</span>
                <span className="label label-success">12.15.2013</span>
              </li>
              <li className="list-group-item">
                <span className="prefix">Comment:</span>
                <span className="label label-success">
                  customer's comment goes here
                </span>
              </li>
              <li className="list-group-item">
                You can find out latest status of your order with the following
                link:
              </li>
              <li className="list-group-item">
                <a href="//tracking/link/goes/here">
                  //tracking/link/goes/here
                </a>
              </li>
            </ul>

            <div className="order-status">
              <div className="order-status-timeline">
                <div className="order-status-timeline-completion c3"></div>
              </div>

              <div className="image-order-status image-order-status-new active img-circle">
                <span className="status">
                  <FontAwesomeIcon color="brown" icon={faForward} /> Accepted
                </span>
                <div className="icon"></div>
              </div>
              <div className="image-order-status image-order-status-active active img-circle">
                <span className="status">
                  <FontAwesomeIcon color="brown" icon={faForward} /> In progress
                </span>
                <div className="icon"></div>
              </div>
              <div className="image-order-status image-order-status-intransit active img-circle">
                <span className="status">
                  <FontAwesomeIcon color="brown" icon={faForward} /> Shipped
                </span>
                <div className="icon"></div>
              </div>
              <div className="image-order-status image-order-status-delivered active img-circle">
                <span className="status">
                  <FontAwesomeIcon color="brown" icon={faForward} /> Delivered
                </span>
                <div className="icon"></div>
              </div>
              <div className="image-order-status image-order-status-completed active img-circle">
                <span className="status">
                  <FontAwesomeIcon color="brown" icon={faForward} /> Completed
                </span>
                <div className="icon"></div>
              </div>
            </div>
          </div>
        </Container>
      </Row>
    </Wrapper>
  );
};

export default Track;
