import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import VideoCard from '../components/VideoCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

function Home({ type }) {

  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data.data);
    }
    fetchVideo();
  }, [ type ])

  return (
    <Container>
      {
        videos.map(video => (
          <VideoCard key={video._id} video={video} />
        ))
      }
    </Container>
  );
}

export default Home;
