export interface UserProfile {
  firstname: string;
  name: string;
  phone: string;
  gender: string;
  title: string;
}

export interface User {
  profile: UserProfile;
  usertype: string;
  __typename: string;
}