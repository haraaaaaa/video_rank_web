import React from 'react';
import YouTube from 'react-youtube';
import Box, { BoxProps } from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { RankTableListProps } from '../type/rank';


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 3,
        fontFamily: "'IBM Plex Sans KR', sans-serif",
        fontSize: '0.875rem',
        fontWeight: '600',
        ...sx,
      }}
      {...other}
    />
  );
}

export function RankTableList(props: RankTableListProps) {
  const { row  } =  props;
    return (
    <TableRow>
      <TableCell align="center"><Typography fontSize= '1.1rem' fontWeight='400'  fontFamily={"'IBM Plex Sans KR', sans-serif"}>{row.ranking + "위"}</Typography></TableCell>
      <TableCell align="center">
        <Box>
          <YouTube videoId={row.videoId.toString()} />
          <Divider light sx={{m: 2}} />
          <Typography fontSize= '1.1rem' fontWeight='400'  fontFamily={"'IBM Plex Sans KR', sans-serif"}>
            {row.title}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="center" >
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}>
            {row.tags.map(tagTxt =>tagTxt !== "" ?<Item>{tagTxt}</Item>: <Typography fontSize= '1.1rem' fontWeight='400' fontFamily={"'IBM Plex Sans KR', sans-serif"}>태그 없음</Typography>)}
          </Box> 
      </TableCell>
    </TableRow>
  );
}
