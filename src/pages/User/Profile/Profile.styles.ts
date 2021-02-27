import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px;
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    color: #333;
  }
  .profile-head h6 {
    color: #0062cc;
  }
  .profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
  .profile-details {
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
  }
  .profile-email {
    font-size: 12px;
    color: #818182;
    margin-top: 2%;
  }
  .profile-details span {
    color: #495057;
    font-size: 15px;
    font-weight: 600;
  }
`;
