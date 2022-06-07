import React, { useEffect } from "react";
import { keywordStore } from "store/keywordStore";
import { observer } from "mobx-react-lite";
import { Text } from "components/Text";
import { Trip } from "components/Trip/Trips";
import { useTrips } from "hooks/useTrips";
import { Container } from "./Landing.style";
import Flex from "components/Flex/Flex";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Loading } from "components/Loading/Loading";
import { TripNotFound } from "components/Empty/TripNotFound";
import { TEXT_COLOR } from "utils/theme";
import { useSearchParams, Link } from "react-router-dom";
import { TextSize } from "components/Text/types";

export const LandingPage = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: trips, loading: tripsLoading, execute: getTrips } = useTrips();
  const { setKeyword } = keywordStore;

  useEffect(() => {
    getTrips(searchParams.get("keyword"));
  }, [searchParams]);

  useEffect(() => {
    setKeyword(searchParams.get("keyword") ?? "");
  }, []);

  return (
    <Flex justify='center'>
      <Container>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Text
            size={TextSize.HEADER_1}
            marginY={20}
            fontWeight={500}
            color={TEXT_COLOR.primary}
            onClick={() => {
              setSearchParams({});
              setKeyword("");
            }}>
            เที่ยวไหนดี
          </Text>
        </Link>
        <SearchBar />
        {tripsLoading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {trips?.length > 0 ? (
              <React.Fragment>
                {trips?.map((trip) => (
                  <Trip key={trip.eid} trip={trip} />
                ))}
              </React.Fragment>
            ) : (
              <TripNotFound />
            )}
          </React.Fragment>
        )}
      </Container>
    </Flex>
  );
});
