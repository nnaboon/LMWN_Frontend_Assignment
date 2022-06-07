import { action, observable, makeObservable } from "mobx";

class KeywordStore {
  keyword: string = "";

  constructor() {
    makeObservable(this, {
      keyword: observable,
      setKeyword: action,
    });
  }

  setKeyword = (keyword: string) => {
    this.keyword = keyword;
  };
}

export const keywordStore = new KeywordStore();
