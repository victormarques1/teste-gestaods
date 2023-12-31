import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  flex: 1;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export const ContactFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
