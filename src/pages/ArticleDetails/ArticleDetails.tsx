import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import articleService from '../../services/articleService';
import { Article } from '../../types/Article';
import { Comment } from '../../types/Comment';
import ArticleItem from './ArticleItem';
import CommentList from './CommentList';

interface RouteParams {
  articleId: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ArticleDetails: React.FC = () => {
  const { articleId } = useParams<RouteParams>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = parseInt(articleId);

        const [articleItem, comments] = await Promise.all([
          articleService.findOneById(id),
          articleService.getComments(id),
        ]);

        setArticle(articleItem);
        setComments(comments);
      } catch (e) {
        if (e.response) {
          setError(e.response.data.detail);
        } else {
          setError('Something went wrong');
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [articleId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && <Error message={error} />}
          {article && comments && (
            <Wrapper>
              <ArticleItem article={article} />
              <CommentList comments={comments} />
            </Wrapper>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleDetails;
