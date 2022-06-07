import React from "react";
import { Text } from "components/Text";
import {
  Container,
  ContentContainer,
  Image,
  ImageContainer,
  MainImage,
  TripLink,
} from "./Trips.style";
import { Description } from "components/Description/Description";
import { Tag } from "components/Tag/Tag";
import { TextSize } from "../Text/types";
import { useResponsive } from "style/responsive";

export const Trip = ({ trip }: any) => {
  const { isMobile } = useResponsive();

  return (
    <Container>
      <MainImage src={trip.photos[0]} alt='main trip img' />
      <ContentContainer>
        <TripLink href={trip.url} target='_blank' rel='noopener noreferrer'>
          <Text
            size={isMobile ? TextSize.HEADER_4 : TextSize.HEADER_3}
            fontWeight={700}
            color='black'>
            {trip.title}
          </Text>
        </TripLink>
        <Description description={trip.description} url={trip.url} />
        <Tag tags={trip.tags} />
        <ImageContainer>
          {trip.photos.slice(1).map((photo) => (
            <Image key={photo} src={photo} alt='trip another img' />
          ))}
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};
