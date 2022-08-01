import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
      <Avatar src="something.png" />
      <Details>
        <Name>
          Tan Hung
          <Date>
            1 day agos
          </Date>
        </Name>
        <Text>This is some comment I guess</Text>
      </Details>
    </Container>
  );
}

export default Comment;
