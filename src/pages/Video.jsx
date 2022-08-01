import React from 'react'
import styled from "styled-components";
import Comments from "../components/Comments";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VideoCard from "../components/VideoCard";
const Container = styled.div`
    display : flex;
    gap : 0px;
`;
const Content = styled.div`
    flex : 5.5;
`;
const Recommendation = styled.div`
    flex : 2;
    margin-left : 20px;
`;

const Channel = styled.div`
    display : flex;
    justify-content : space-between;
`;
const ChannelInfo = styled.div`
    display : flex;
    align-items : center;
    
`;
const Image = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    margin-top: -50px;
`;

const ChannelDetail = styled.div`
    display : flex;
    flex-direction : column;
    color : ${({theme}) => theme.text};
    align-items : flex-start;
    margin-left : 10px;
    margin-top : -10px;

`;

const ChannelName = styled.span`
    font-weight : 500;
`;
const ChannelCounter = styled.span`
    margin : 5px 0px 5px 0px;
    color : ${({theme}) => theme.text};
    font-size:12px;
`;
const Description = styled.p`
    font-size : 14px;
`;
const Subscribe = styled.button`
    background-color : #cc1a00;
    font-weight : 500;
    color : white;
    border : none;
    border-radius : 5px;
    height : max-content;
    padding : 10px 20px;
`;

const VideoWrapper = styled.div`
`;

const Title = styled.h2`    
    font-size : 30px;
    font-weight : bold;
    margin-Top: 5px;
    margin-Bottom: 5px;
    color : ${({theme}) => theme.text};
`;
const Details = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    color : ${({theme}) => theme.text};

`;
const Info = styled.span`
    color: ${({theme}) => theme.text};
`;
const Buttons = styled.div`
    display : flex;
    align-items : center;
    gap : 20px;
`;
const Button = styled.div`
    display : flex;
    align-items : center;
    gap : 5px;
    cursor : pointer;
`;

const Hr = styled.hr`
    margin : 15px;
    border : 0.2px solid ${({theme}) => theme.text};
`;

const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe
                    width="100%"
                    height={650}
                    title='Youtube'
                    frameBorder={0}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                ></iframe>
            </VideoWrapper>
            <Title>
                Title
            </Title>
            <Details>
                <Info>
                    1,000,000 views - Jul 29, 2022
                </Info>
                <Buttons>
                    <Button>
                        <ThumbUpIcon />    
                        Like
                    </Button>
                    <Button>
                        <ThumbDownIcon/>
                        Dislike
                    </Button>
                    <Button>
                        <ShareIcon/>
                        Share
                    </Button>
                    <Button>
                        <PlaylistAddIcon/>
                        Save
                    </Button>
                </Buttons>
            </Details>
            <Hr/>
            <Channel>
                <ChannelInfo>
                    <Image src='somethng.pnf'></Image>
                    <ChannelDetail>
                        <ChannelName>Tan Hung</ChannelName>
                        <ChannelCounter>200K Sunscribers</ChannelCounter>
                        <Description>Some description here I guess</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe>
                    SUBSCRIBE
                </Subscribe>
            </Channel>
            <Comments/>
        </Content>
        <Recommendation>
            <VideoCard type="sm"/>
            <VideoCard type="sm"/>
            <VideoCard type="sm"/>
            <VideoCard type="sm"/>
            <VideoCard type="sm"/>
            <VideoCard type="sm"/>
            <VideoCard type="sm"/>
        </Recommendation>
    </Container>
  )
}

export default Video