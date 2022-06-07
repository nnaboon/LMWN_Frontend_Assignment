import styled from "@emotion/styled";
import { TEXT_COLOR } from "utils/theme";

export const DescriptionContainer = styled.div`
  div + a {
    display: inline-block;
    vertical-align: top;
    margin-top: -1px;
  }
`;

export const Content = styled.div`
  display: inline-block;
  color: ${TEXT_COLOR.secondary};
  font-size: 15px;
`;

export const ReadMore = styled.a`
  color: ${TEXT_COLOR.primary};
`;
