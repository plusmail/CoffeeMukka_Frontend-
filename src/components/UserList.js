import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import axios from 'axios';

const UserItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 700px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const UserList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(articles);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/user/findAll');
        console.log(response);
        setArticles(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <UserItemBlock>대기중 ...</UserItemBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <UserItemBlock>
      {articles.map(article => (
        <UserItem key={article.userno} article={article} />
      ))}
    </UserItemBlock>
  );

};

export default UserList;