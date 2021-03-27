import { User } from './User';

export interface ArticleToCreate {
  title: string;
  content: string;
}

export interface Article extends ArticleToCreate {
  id: number;
  createdAt: string;
  author: User;
}
