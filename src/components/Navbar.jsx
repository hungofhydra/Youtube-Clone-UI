import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import axios from 'axios';

import { loginFailure, logout } from '../redux/userSlice';
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({ theme }) => theme.backgroundLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
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
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap : 10px;
  font-weight: 500;
  color : ${({ theme }) => theme.text};
`;

const AvatarUser = styled.img`
  width : 32px;
  height : 32px;
  border-radius : 50%;
  background-color : #999;
`;


function Navbar() {

  const navigate = useNavigate()
  const [ open, setOpen ] = useState(false);
  const [ q, setQ ] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem('access_token');
    try {
      const res = await axios.get('/auth/logout')
      dispatch(logout());
      navigate('/');
    } catch (error) {
      dispatch(loginFailure());
    }

  }

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" />
            <SearchIcon />
          </Search>
          {currentUser ? (
            <User>
              <Button onClick={handleLogout}> Log out </Button>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <AvatarUser src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin">
              <Button>Signin</Button>
            </Link>)}
        </Wrapper>
      </Container>

      {open && <Upload setOpen={setOpen} />}
    </>
  );
}

export default Navbar;
