import React from 'react';
import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

const UserItemBlock = styled.div`
  display: flex;
  background-color: brown;

  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;


const UserItem = ({ article }) => {
  const { userId, name, address, nick } = article;

  return (
    <UserItemBlock>
      {userId && (
        <div className='thumbnail'>
          <a href={nick} target='_blank' rel='noopener noreferrer'>
            <img src={userId} alt='thumbnail' />
          </a>
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href={userId} target='_blank' rel='noopener noreferrer'>
            {name}
          </a>

        </h2>
        <p>{address}</p>
      </div>
    </UserItemBlock>
  );
};

export default UserItem;