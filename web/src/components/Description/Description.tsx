import React from "react";
import { DescriptionContainer, Content, ReadMore } from "./Description.style";

interface DescriptionProps {
  description?: string;
  url?: string;
}

export const Description = ({ description, url }: DescriptionProps) => {
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
