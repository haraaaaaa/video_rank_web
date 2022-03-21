import React, { useEffect } from 'react';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import ReactPlayer from 'react-player'
import axios from 'axios'

const PostList = props => {
  const [data, setData] = React.useState([])

  useEffect(() => {
    axios
      .get('/mostPopularYoutube')
      .then((res) => {
        setData(res.data)
      })
  })
  return (
    <>
      <CommonTable headersName={['순위', '제목', '영상', '채널', '태그']}>
        {
          data ? data.map((item, index) => {
            const youtubeUrl = 'https://www.youtube.com/watch?v='+item.videoId;
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.ranking }</CommonTableColumn>
                <CommonTableColumn>{ item.title }</CommonTableColumn>
                <CommonTableColumn>
                  <ReactPlayer url={youtubeUrl} playing controls/>
                </CommonTableColumn>
                <CommonTableColumn>{ item.channelTitle }</CommonTableColumn>
                <CommonTableColumn>{ item.tags.map(txt => <p>{txt}</p>) }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default PostList;