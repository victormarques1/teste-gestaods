import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding-left: 46px;
  padding-right: 46px;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-direction: row;
    height: 96px;
  }
`;

export const SearchBarText = styled.p`
  font-size: 14px;
  margin-top: 0;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    margin-bottom: 10px;
  }
`;
