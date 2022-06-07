import styled from "@emotion/styled";
import { mediaQueryTablet, mediaQuerySmallTablet } from "../style/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
  padding: 50px 0px;
  word-break: break-all;
  box-sizing: border-box;

  ${mediaQueryTablet} {
    width: 60%;
  }

  ${mediaQuerySmallTablet} {
    width: 80%;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
