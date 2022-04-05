export const ONEHOUR = 3600000;

let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);
let hour = today.getHours();
export let dateString = `${year}년 ${month}월 ${day}일 ${hour}시`;

export type Order = 'asc' | 'desc';

export interface Data {
  ranking: number;
  videoId: string;
  title: string;
  tags: string[];
}

export interface RankToolbarProps {
  searched: string;
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
}

export interface RankTableHeadProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

export interface TableLabelProps {
  headCell: HeadCell;
  order: Order;
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
}

export interface RankTableListProps {
  row: Data;
}

export interface HeadCell {
  id: keyof Data;
  disablePadding: boolean;
  label: string;
  isSorting: boolean;
  numeric: boolean;
  width: string;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'ranking',
    numeric: true,
    disablePadding: false,
    isSorting: true,
    label: '순위',
    width: '10%'
  },
  {
    id: 'videoId',
    numeric: false,
    disablePadding: false,
    isSorting: false,
    label: '영상',
    width: '40%'

  },
  {
    id: 'tags',
    numeric: false,
    isSorting: false,
    disablePadding: false,
    label: '태그',
    width: '50%'
  }
];

