import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'timeago.js';

import Comments from '../components/Comments';
import VideoCard from '../components/VideoCard';
import { useLocation } from 'react-router-dom';
import { fetchSuccess } from '../redux/videoSlice';

const Container = styled.div`
  display: flex;
  gap: 0px;
`;
const Content = styled.div`
  flex: 5.5;
`;
const Recommendation = styled.div`
  flex: 2;
  margin-left: 20px;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: -50px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  align-items: flex-start;
  margin-left: 10px;
  margin-top: -10px;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin: 5px 0px 5px 0px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 5px;
  height: max-content;
  padding: 10px 20px;
`;
const VideoWrapper = styled.div``;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.span`
  color: ${({ theme }) => theme.text};
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px;
  border: 0.2px solid ${({ theme }) => theme.text};
`;

function Video() {

  const currentUser = useSelector((state) => state.user.currentUser)
  const currentVideo = useSelector((state) => state.video.currentVideo)

  const dispatch = useDispatch();
  const path = useLocation().pathname.split('/')[ 2 ];
  const [ channel, setChannel ] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(`/users/find/${videoRes.data.data.userId}`);
        setChannel(channelRes.data.data);
        dispatch(fetchSuccess(videoRes.data.data));
      } catch (error) {

      }
    }
    fetchData();

  }, [ path, dispatch ])


  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder={0}
            height={650}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Youtube"
            width="100%"
          />
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views | {format(currentVideo.createdAt)} </Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              {currentVideo.likes?.length}
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
            <Button>
              <PlaylistAddIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers}</ChannelCounter>
              <Description>{currentVideo.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Comments />
      </Content>
      <Recommendation>
        {/* <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" /> */}
      </Recommendation>
    </Container>
  );
}

export default Video;
