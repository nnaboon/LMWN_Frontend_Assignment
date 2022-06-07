import styled from "@emotion/styled";
import { TEXT_COLOR } from "utils/theme";
import { mediaQueryMobile } from "style/responsive";

export const TripTagContainer = styled.div`
  display: inline-block;
  color: ${TEXT_COLOR.secondary};
  font-size: 14px;

  ${mediaQueryMobile} {
    font-size: 13px;
  }
`;

export const TripTag = styled.span`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${TEXT_COLOR.primary};
  }
`;
