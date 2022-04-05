import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { dateString, RankToolbarProps } from '../type/rank';
import SearchBar from "material-ui-search-bar";



export function RankTableToolbar (props: RankToolbarProps){
    // const { searched, data, setData, setSearched}= props;
    
    // const requestSearch = (searchedVal: string) => {
    //     const filteredRows = data.filter((row) => {
    //       return row.tags.toString().includes(searchedVal) || row.title.includes(searchedVal);
    //     });
    //     setData(filteredRows);
    // };
    
    //   const cancelSearch = () => {
    //     setSearched("");
    //     requestSearch(searched);
    //     setData(data);
    // };
    return (
        <Toolbar
        color="primary"
        sx={{
        pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
        }}
        >
        <Typography
            sx={{ flex: '1 1 100%' }}
            align="center"
            variant="h4"
            id="tableTitle"
            component="div"
            fontFamily="'IBM Plex Sans KR', sans-serif"
            fontWeight='700'
        >
            {dateString} 유튜브 인기 동영상 📈
        </Typography>
        {/* <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}/> */}
        </Toolbar>
    );
};