import React, { useState, useEffect } from "react";
import { Text } from "components/Text";
import { TextSize } from "components/Text/types";
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

export const Trip = ({ trip }: any) => {
  return (
    <Container>
      <MainImage src={trip.photos[0]} alt='main trip img' />
      <ContentContainer>
        <TripLink href={trip.url} target='_blank' rel='noopener noreferrer'>
          <Text fontSize='20px' fontWeight={700} color='black'>
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
