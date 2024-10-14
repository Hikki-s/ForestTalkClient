export interface NewsPost {
  id: number;
  content: string;
  postMedia?: PostMedia[];
  owner: PostOwner;
  isLike: boolean;
  likeCount: number;
  commentCount: number;
  comments?: Comment[];
  createdAt: Date;
}

interface PostOwner {
  id: string;
  ownerName: string;
  avatarUrl?: string;
}

interface PostMedia {
  type: MediaType;
  url: string;
}

type MediaType = "image" | "video";

export interface Comment {
  id: number;
  commentOwner: CommentOwner;
  content: string;
  createdAt: Date;
}

export interface NewComment {
  postId: number;
  userId: number;
  content: string;
}

interface CommentOwner {
  userId: string;
  username: string;
  avatarUrl?: string;
}
