import React from "react";
import { observer } from "mobx-react-lite";
import { keywordStore } from "store/keywordStore";
import { TripTagContainer, TripTag } from "./Tag.style";

export const Tag = observer(({ tags }: any) => {
  const { setKeyword } = keywordStore;

  return (
    <TripTagContainer>
      หมวด{" - "}
      {tags.map((tag, index) => (
        <React.Fragment key={tag}>
          <TripTag
            onClick={() => {
              window.scrollTo(0, 0);
              setKeyword(tag);
            }}>
            {tag}
          </TripTag>
          {index === tags.length - 2
            ? " และ "
            : index === tags.length - 1
            ? ""
            : ", "}
        </React.Fragment>
      ))}
    </TripTagContainer>
  );
});
