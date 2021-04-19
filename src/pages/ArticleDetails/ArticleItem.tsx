import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import { Article } from '../../types/Article';
import { fontSizes } from '../../styles';

interface Props {
  article: Article;
}

const StyledArticle = styled.article``;

const Title = styled.h2`
  font-size: ${fontSizes.xLarge};
`;

const Author = styled.h3`
  font-size: ${fontSizes.medium};
  margin: 0;
`;

const Time = styled.time`
  font-size: ${fontSizes.small};
  margin: 0;
`;

const Content = styled.p``;

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <StyledArticle>
      <Title>{article.title}</Title>
      <Author>{article.author.email}</Author>
      <Time>{dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Time>
      <Content>{article.content}</Content>
    </StyledArticle>
  );
};

export default ArticleItem;
