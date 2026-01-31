export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
  gender: "female" | "male";
  refreshToken: string;
  accessToken: string;
}
