export interface NewsPost {
  id: string;
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
  id: string;
  commentOwner: CommentOwner;
  content: string;
  createdAt: Date;
}

export interface NewComment {
  postId: string;
  userId: string;
  content: string;
}

interface CommentOwner {
  userId: string;
  username: string;
  avatarUrl?: string;
}
