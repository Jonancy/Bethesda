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

export type TeamMembers = {
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

export type Gallery = {
  id: number;
  image: string;
  createdAt: string;
  updatedAt: string | null;
};

export type Blogs = {
  id: string;
  title: string;
  content: string;
  picture: string;
  createdAt: string;
  updatedAt: string | null;
};

export type Service = {
  id: string;
  title: string;
  content: string;
  picture: string;
  createdAt: string;
  updatedAt: string | null;
};

export type NewsArticle = {
  id: string;
  title: string;
  content: string;
  picture: string;
  createdAt: string;
  updatedAt: string | null;
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

export interface NavbarDetails {
  phone_number: number;
  email: string;
  logo: string;
}

export interface FooterDetails {
  phone_number: number;
  email: string;
  logo: string;
  location: string;
  copyRights: string;
  about: string;
}

export type Blog ={
  id: string;
  title: string;
  content: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
}

export type AboutUsType = {
  whoWeAre: string;
  whatWeDoImage: string;
  teamMembers:TeamMembers[];
}