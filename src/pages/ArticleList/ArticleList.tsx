import React from 'react';
import styled from 'styled-components';

import useArticlePagination from '../../hooks/useArticlePagination';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Button from '../../components/Button';
import ArticleItem from './ArticleItem';

const StyledArticleList = styled.div`
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArticleList: React.FC = () => {
  const {
    loading,
    error,
    articles,
    goToNextPage,
    goToPreviousPage,
    page,
    totalPages,
  } = useArticlePagination(10);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <Error message={error} />
          ) : (
            <>
              <StyledArticleList>
                {articles.map((article) => {
                  return <ArticleItem article={article} key={article.id} />;
                })}
              </StyledArticleList>
              <ButtonContainer>
                <Button disabled={page === 1} onClick={goToPreviousPage}>
                  Prev
                </Button>
                <Button disabled={page === totalPages} onClick={goToNextPage}>
                  Next
                </Button>
              </ButtonContainer>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleList;
