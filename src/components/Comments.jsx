import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    background-color: transparent;
    outline: none;npx eslint yourfile.js
    padding : 5px;
    width : 100%;
    color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin : 10px;  
`;


function Comments({ videoId }) {

  const { currentUser } = useSelector((state) => state.user);

  const [ newComment, setNewComment ] = useState('');
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data.data);
      } catch (err) { }
    };
    fetchComments();
  }, [ videoId, comments ]);

  const handleNewComment = async (e) => {
    e.preventDefault();
    console.log(newComment);
    const res = await axios.post(`/comments`, {
      desc: newComment,
      videoId
    });
    setComments([ ...comments, res.data.data ]);
    setNewComment('');
  }

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." onChange={e => {
          setNewComment(e.target.value)
        }} />
        <Button onClick={handleNewComment}>Send</Button>
      </NewComment>

      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
}

export default Comments;
