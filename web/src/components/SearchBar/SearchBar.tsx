import React from "react";
import { observer } from "mobx-react-lite";
import { keywordStore } from "store/keywordStore";
import { SearchBarContainer, SearchBarField } from "./SearchBar.style";

export const SearchBar = observer(() => {
  const { keyword, setKeyword } = keywordStore;

  return (
    <SearchBarContainer>
      <SearchBarField
        placeholder='หาที่เที่ยวแล้วไปกัน...'
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
      />
    </SearchBarContainer>
  );
});
