const localStorageKeyname='recordList'

const recordListModel = {
  data:[] as RecordItem[],

  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data))
  },

  fetch() {

    this.data=  JSON.parse(window.localStorage.getItem('localStorageKeyname') || '[]') as RecordItem[];
    return this.data
  },

  save() {
     window.localStorage.setItem('localStorageKeyname', JSON.stringify(this.data));
  }
};
export {recordListModel}