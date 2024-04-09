export interface HeroDetails {
  hero: string;
  welcome: string;
}

export interface WhatWeDoDetails {
  whatWeDoImage: string;
  whatWeDo: string;
}

export type WhoWeareDetails = {
  whoWeAre: string;
  whoWeAreImage: string;
};

export interface TeamMembers {
  id: string;
  name: string;
  profile: string;
  designationId: number;
  postId: number;
  designation: {
    type: string;
  };
  post: {
    type: string;
  };
};

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  picture: string;
  createdAt: string;
};
