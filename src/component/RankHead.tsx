import React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { Data, RankTableHeadProps, headCells, TableLabelProps } from '../type/rank';


function RankTableLabel(props: TableLabelProps){
  const {headCell, onRequestSort, order, orderBy }= props;
  const createSortHandler =
  (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
    };

  if(!headCell.isSorting){
    return (<Typography fontSize= '1.2rem' fontWeight='600' fontFamily={"'IBM Plex Sans KR', sans-serif"}>{headCell.label}</Typography>)
  }
  else
    return (
        <TableSortLabel
        active={true}
        direction={orderBy === headCell.id ? order : 'asc'}
        onClick={createSortHandler(headCell.id)}
      >
        <Typography fontSize= '1.2rem' fontWeight='600' fontFamily={"'IBM Plex Sans KR', sans-serif"}>
          {headCell.label}
        </Typography>
        {orderBy === headCell.id ? (
          <Box component="span" sx={visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </Box>
        ) : null}
      </TableSortLabel>
    )
}

export function RankTableHead(props: RankTableHeadProps) {
  const { order, orderBy, onRequestSort } =
  props;

    return (
      <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            width={headCell.width}
            key={headCell.id}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <RankTableLabel headCell={headCell} onRequestSort={onRequestSort} order={order} orderBy={orderBy}/>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}