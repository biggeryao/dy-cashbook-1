import clone from '@/lib/clone';

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
  create(record: RecordItem) {
      const record2: RecordItem=clone(record)
    record2.createdAt=new Date()
    this.data.push(record2)
  },
  save() {
     window.localStorage.setItem('localStorageKeyname', JSON.stringify(this.data));
  }
};
export {recordListModel}