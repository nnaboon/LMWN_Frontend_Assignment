import { action, computed, observable, makeObservable } from "mobx";

class KeywordStore {
  keyword: string = undefined;

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
