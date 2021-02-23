/* Footer */
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
  }
  background: #007b5e !important;
  h5 {
    padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color: #ffffff;
  }
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  ul.social li {
    padding: 3px 0;
  }
  ul.social li a i {
    margin-right: 5px;
    font-size: 25px;
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }
  ul.social li:hover a i {
    font-size: 30px;
    margin-top: -10px;
  }
  ul.social li a,
  ul.quick-links li a {
    color: #ffffff;
  }
  ul.social li a:hover {
    color: #eeeeee;
  }
  ul.quick-links li {
    padding: 3px 0;
    -webkit-transition: 0.5s all ease;
    -moz-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }
  ul.quick-links li:hover {
    padding: 3px 0;
    margin-left: 5px;
    font-weight: 700;
  }
  ul.quick-links li a i {
    margin-right: 5px;
  }
  ul.quick-links li:hover a i {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    h5 {
      padding-left: 0;
      border-left: transparent;
      padding-bottom: 0px;
      margin-bottom: 10px;
    }
  }
`;
