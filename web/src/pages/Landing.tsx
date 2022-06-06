import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keywordStore } from "store/keywordStore";
import { observer } from "mobx-react-lite";
import { Text } from "components/Text";
import { Trip } from "components/Trip/Trips";
import { useTrips } from "hooks/useTrips";
import { Container } from "./Landing.style";
import Flex from "components/Flex/Flex";
import { TEXT_COLOR } from "utils/theme";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Loading } from "components/Loading/Loading";

export const LandingPage = observer(() => {
  const { keyword } = keywordStore;
  const { data: trips, loading: tripsLoading, execute: getTrips } = useTrips();

  useEffect(() => {
    getTrips(keyword);
  }, [keyword]);

  return (
    <Flex justify='center'>
      <Container>
        <Text
          fontSize='32px'
          marginY='20px'
          fontWeight={500}
          color={TEXT_COLOR.primary}>
          เที่ยวไหนดี
        </Text>
        <SearchBar />
        {tripsLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {trips ? (
              <React.Fragment>
                {trips?.map((trip) => (
                  <Trip key={trip.eid} trip={trip} />
                ))}
              </React.Fragment>
            ) : (
              <div>not found</div>
            )}
          </React.Fragment>
        )}
      </Container>
    </Flex>
  );
});
