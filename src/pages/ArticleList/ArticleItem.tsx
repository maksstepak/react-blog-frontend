import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { Article } from '../../types/Article';
import { colors, fontSizes } from '../../styles';

interface Props {
  article: Article;
}

const StyledArticle = styled.div`
  border: solid 1px ${colors.black};
  border-radius: 12px;
  margin: 4px;
  padding: 6px;
`;

const Title = styled.h2`
  margin: 4px 0;
  font-size: ${fontSizes.large};
`;

const Author = styled.h3`
  margin: 2px 0;
  font-size: ${fontSizes.medium};
`;

const Time = styled.time`
  font-size: ${fontSizes.small};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
`;

const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <StyledArticle>
      <Title>
        <StyledLink to={`/articles/${article.id}`}>{article.title}</StyledLink>
      </Title>
      <Author>{article.author.email}</Author>
      <Time>{dayjs(article.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Time>
    </StyledArticle>
  );
};

export default ArticleItem;
