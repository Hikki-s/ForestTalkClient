export interface NewsPost {
  id: number;
  content: string;
  postMedia?: PostMedia[];
  owner: PostOwner;
  isLike: boolean;
  likeCount: number;
  commentCount: number;
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

interface CommentOwner {
  userId: string;
  username: string;
  avatarUrl?: string;
}
