import theme from "@/styles/theme";
import { styled } from "styled-components";

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
  flex: 1;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div`
  padding: 25px 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export const TextArea = styled.textarea`
  width: 95%;
  max-width: 100%;
  padding: 15px;
  height: 73px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;

  @media (max-width: 600px) {
    height: auto;
  }

  &:focus {
    outline: none;
  }
`;
