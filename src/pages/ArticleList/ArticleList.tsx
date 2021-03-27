import React from 'react';
import useArticlePagination from '../../hooks/useArticlePagination';

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
      <h2>Articles</h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              <p>{JSON.stringify(articles)}</p>
              <button disabled={page === 1} onClick={goToPreviousPage}>
                Prev
              </button>
              <button disabled={page === totalPages} onClick={goToNextPage}>
                Next
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleList;
