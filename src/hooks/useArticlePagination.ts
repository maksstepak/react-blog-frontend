import { useEffect, useState } from 'react';
import articleService from '../services/articleService';
import { Article } from '../types/Article';

const useArticlePagination = (perPage: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  const totalPages = Math.ceil(total / perPage);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      const offset = (page - 1) * perPage;

      try {
        const response = await articleService.paginate(perPage, offset);

        setArticles(response.data);
        setTotal(response.total);
      } catch (e) {
        if (e.response) {
          setError(e.response.data.detail);
        } else {
          setError('Something went wrong');
        }
      }

      setLoading(false);
    };

    fetchArticles();
  }, [page, perPage]);

  const goToNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    loading,
    error,
    articles,
    goToNextPage,
    goToPreviousPage,
    page,
    totalPages,
  };
};

export default useArticlePagination;
