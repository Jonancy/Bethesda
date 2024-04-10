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

export type TeamMembers =  {
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
}

export type Blogs = {
  id: string;
  
};


export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  picture: string;
  createdAt: string;
}

export interface MainDetails {
  company_name: string;
  phone_number: number;
  email: string;
  logo: File | null; 
  about: string;
  copyRights: string;
  location: string;
  hero: File | null;
  whatWeDoImage: File | null; 
  welcome: string;
  whatWeDo: string;
  whoWeAre: string;
}
