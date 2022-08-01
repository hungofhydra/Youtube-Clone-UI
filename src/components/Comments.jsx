import React from 'react';
import styled from 'styled-components';
import Comment from "./Comment";
const Container = styled.div``;


const NewComment = styled.div`
    display : flex;
    align-items : center;
`;
const Avatar = styled.img`
    width : 50px;
    height : 50px;
    border-radius : 50%;
`;
const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${({theme}) => theme.text};
    background-color: transparent;
    outline: none;npx eslint yourfile.js
    padding : 5px;
    width : 100%;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src= "something.png" />
                <Input placeholder="Add a comment..."/>
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    );
}

export default Comments;