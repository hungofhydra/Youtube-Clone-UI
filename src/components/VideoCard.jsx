import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

function VideoCard({ type }) {
  return (
    <Link to="/video/test">
      <Container type={type}>
        <Image type={type} src="https://assets.classicfm.com/2019/11/superman-violin-1553266007-view-0.jpg" />
        <VideoDetails type={type}>
          <ChannelImage type={type} />
          <Texts>
            <Title>Superman: The Musical</Title>
            <ChannelName>The Musical</ChannelName>
            <Info>0 views · 1 year ago</Info>
          </Texts>
        </VideoDetails>
      </Container>
    </Link>
  );
}

export default VideoCard;
