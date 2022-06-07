import React from "react";
import { TripNotFoundContainer } from "./TripNotFound.style";
import { Text } from "components/Text";
import { TextSize } from "components/Text/types";
import { useResponsive } from "style/responsive";

export const TripNotFound = () => {
  const { isMobile } = useResponsive();

  return (
    <TripNotFoundContainer>
      <Text
        size={isMobile ? TextSize.TITLE_1 : TextSize.HEADER_4}
        fontWeight={400}
        color='black'>
        ขออภัย ไม่พบข้อมูลการท่องเที่ยวที่คุณค้นหา
      </Text>
    </TripNotFoundContainer>
  );
};
