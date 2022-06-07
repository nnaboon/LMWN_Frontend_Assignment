import React from "react";
import { observer } from "mobx-react-lite";
import { keywordStore } from "store/keywordStore";
import { SearchBarContainer, SearchBarField } from "./SearchBar.style";
import { useSearchParams } from "react-router-dom";

export const SearchBar = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { keyword, setKeyword } = keywordStore;

  return (
    <SearchBarContainer>
      <SearchBarField
        type='text'
        placeholder='หาที่เที่ยวแล้วไปกัน...'
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearchParams({ keyword });
          }
        }}
        value={keyword}
      />
    </SearchBarContainer>
  );
});
