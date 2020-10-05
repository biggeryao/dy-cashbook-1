const localStorageKeyname='recordList'

const model = {

  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data))
  },

  fetch() {
    return JSON.parse(window.localStorage.getItem('localStorageKeyname') || '[]') as RecordItem[];
  },

  save(data: RecordItem[]) {
     window.localStorage.setItem('localStorageKeyname', JSON.stringify(data));
  }
};
export {model}