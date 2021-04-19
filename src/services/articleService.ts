import { Article } from '../types/Article';
import { Comment } from '../types/Comment';
import apiClient from '../utils/apiClient';

interface ArticlesResponse {
  data: Article[];
  total: number;
}

class ArticleService {
  async paginate(
    limit: number = 10,
    offset: number = 0
  ): Promise<ArticlesResponse> {
    const response = await apiClient.get<ArticlesResponse>(
      `/articles?limit=${limit}&offset=${offset}`
    );
    return response.data;
  }

  async findOneById(id: number): Promise<Article> {
    const response = await apiClient.get<Article>(`/articles/${id}`);
    return response.data;
  }

  async getComments(id: number): Promise<Comment[]> {
    const response = await apiClient.get<Comment[]>(`/articles/${id}/comments`);
    return response.data;
  }
}

const articleService = new ArticleService();

export default articleService;
