import styled from "styled-components";
import theme from "@/styles/theme";
import {
  fontWeight,
  color,
  space,
  SpaceProps,
  ColorProps,
  FontWeightProps,
} from "styled-system";

interface DeleteModalProps extends SpaceProps, ColorProps, FontWeightProps {}

export const DeleteContainer = styled.div`
  position: fixed;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.border_gray};
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.purple};
  padding: 10px 14px;
`;

export const StyledIcon = styled.div`
  padding: 14px;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.dark_gray};
  }
`;

export const BodyContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.border_gray};
`;

export const StyledText = styled.p<DeleteModalProps>`
  ${color}
  ${space}
  ${fontWeight}
`;

export const ButtonContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: end;
`;

export const CancelButton = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.blue};
  border: 1px solid ${theme.colors.blue};
  border-radius: 4px;
  font-weight: 600;
  padding: 8px 16px;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.light_blue};
  }
`;

export const DeleteButton = styled.button`
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  border-radius: 4px;
  font-weight: 600;
  padding: 8px 16px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.light_red};
    color: ${theme.colors.white};
  }
`;
