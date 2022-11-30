export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

export type User = {
  email: string;
  id: number;
};

export type Entry = {
  title: string;
  text: string;
};

export type AuthContext = {
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => Promise<void>;
  resetPassword: (email: string) => void;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
};
