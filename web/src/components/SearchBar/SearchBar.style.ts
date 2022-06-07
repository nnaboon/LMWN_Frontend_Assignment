import { TEXT_COLOR } from "../../utils/theme";
import styled from "@emotion/styled";

export const SearchBarContainer = styled.div`
  border-bottom: 1px solid ${TEXT_COLOR.search};
  display: flex;
  align-items: center;
  width: 80%;
  color: ${TEXT_COLOR.search};
`;

export const SearchBarField = styled.input`
  color: ${TEXT_COLOR.search};
  text-align: center;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: "Noto Sans Thai", sans-serif;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;
