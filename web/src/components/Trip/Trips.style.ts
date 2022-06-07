import styled from "@emotion/styled";
import { mediaQueryMobile } from "style/responsive";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
`;

export const MainImage = styled.img`
  width: 200px;
  border-radius: 15px;
  object-fit: cover;

  ${mediaQueryMobile} {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${mediaQueryMobile} {
    gap: 0;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  object-fit: cover;

  ${mediaQueryMobile} {
    width: 90px;
    height: 90px;
  }
`;

export const TripLink = styled.a`
  text-decoration: none;
  color: #0000;
`;
