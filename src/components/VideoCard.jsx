import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import axios from 'axios';


const Container = styled.div`
  width: ${(props) => (props.type === 'sm' ? '360px' : '300px')};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '60px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  flex: 1;
  height: ${(props) => (props.type === 'sm' ? '150px' : '202px')};
`;
const VideoDetails = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type !== 'sm' ? '16px' : '0px')};
  gap: 10px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin: 0px;
`;
const ChannelName = styled.h2`
  font-size: 15px;
  color: ${({ theme }) => theme.textSoft};
  margin: 0px 0px;
`;
const Info = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.textSoft};
`;

function VideoCard({ type, video }) {

  const [ channel, setChannel ] = useState([]);

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`users/find/${video.userId}`);
      setChannel(res.data.data);
    }
    fetchChannel();
  }, [ video.userId ])


  return (
    <Link to="/video/test">
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <VideoDetails type={type}>
          <ChannelImage type={type} src={channel.img}/>
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views | {format(video.createdAt)}</Info>
          </Texts>
        </VideoDetails>
      </Container>
    </Link>
  );
}

export default VideoCard;
