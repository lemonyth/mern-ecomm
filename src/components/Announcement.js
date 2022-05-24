import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>Super Deal! Free shipping on all orders above $50!</Container>
  );
}

export default Announcement;
