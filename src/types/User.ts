export interface UserToCreate {
  email: string;
  plainPassword: string;
}

export interface User {
  id: number;
  email: string;
}

export interface UserWithDetails extends User {
  roles: string[];
}
