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
  designationId: Number;
  postId: Number;
  designation: {
    type: string;
  };
  post: {
    type: string;
  };
};
