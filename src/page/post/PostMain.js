import React from 'react';
import PostList from './PostList';

const PostMain = props => {
  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let dateString = year + '년 ' + month  + '월 ' + day + '일';
  return (
    <>
      <h2 align="center"> {dateString} 유튜브 최신 인기 동영상</h2>
      <PostList />
    </>
  )
}

export default PostMain;