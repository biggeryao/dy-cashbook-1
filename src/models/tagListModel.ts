const localStorageKeyname = 'tagsList ';
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success'|'duplicated';
  save: () => void;
}
const tagListModel: TagListModel = {
  data: [],

  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('localStorageKeyname') || '[]');
    return this.data;
  },

  save() {
    window.localStorage.setItem('localStorageKeyname', JSON.stringify(this.data));
  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success'

  }


};
export {tagListModel};