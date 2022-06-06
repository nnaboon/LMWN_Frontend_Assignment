import React from "react";
import { Text } from "components/Text";
import { DescriptionContainer, Content, ReadMore } from "./Description.style";

export const Description = ({ description, url }: any) => {
  const truncateDescription = description?.slice(0, 200).concat(" .... ");

  return (
    <DescriptionContainer>
      <Content>
        {truncateDescription}
        <ReadMore href={url} target='_blank' rel='noopener noreferrer'>
          อ่านต่อ
        </ReadMore>
      </Content>
    </DescriptionContainer>
  );
};
