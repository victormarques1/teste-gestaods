import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface LabelProps extends SpaceProps {}

export const LabelInput = styled.label<LabelProps>`
  font-size: 14px;
  margin-bottom: 4px;

  ${space}
`;
