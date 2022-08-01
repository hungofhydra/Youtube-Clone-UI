import React from 'react'
import styled from "styled-components";
import { Link} from "react-router-dom";
const Container = styled.div`
    width: 300px;
    margin-bottom: 60px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
`;
const VideoDetails = styled.div`
    display: flex;
    gap: 10px;
    `
const ChannelImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #999;
    
`;

const Texts = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    
`;
const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color : ${({theme}) => theme.textSoft};
    margin: 0px
 
`;
const ChannelName = styled.h2`
    font-size: 15px;
    color : ${({theme}) => theme.textSoft};
    margin : 0px 0px;
`;
const Info = styled.div`
    font-size: 15px;
    color : ${({theme}) => theme.textSoft};
`;

const VideoCard = () => {
  return (
    <Link to='/video/test'>
        <Container>
            <Image src='https://assets.classicfm.com/2019/11/superman-violin-1553266007-view-0.jpg'></Image>
            <VideoDetails>
                <ChannelImage></ChannelImage>
                <Texts>
                    <Title>Superman: The Musical</Title>
                    <ChannelName>The Musical</ChannelName>
                    <Info>0 views · 1 year ago</Info>
                </Texts>
            </VideoDetails>
        </Container>
    </Link>
  )
}


export default VideoCard