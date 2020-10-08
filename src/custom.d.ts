type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
  save: () => void;
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  remove: (id: string) => boolean;
  updateTag: (id: string,name: string) => 'success' | 'not found' | 'duplicated';
  findTag: (id: string) => Tag|undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;

}