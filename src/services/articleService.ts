import { Article } from '../types/Article';
import apiClient from '../utils/apiClient';

interface ArticlesResponse {
  data: Article[];
  total: number;
}

class ArticleService {
  async paginate(limit: number = 10, offset: number = 0) {
    const response = await apiClient.get<ArticlesResponse>(
      `/articles?limit=${limit}&offset=${offset}`
    );
    return response.data;
  }
}

const articleService = new ArticleService();

export default articleService;
