export interface Friend {
  id?: number;
  name: string;
  email: string;
  expense: number;
  avatar: string;
}

export const emptyFriend: Friend = {
  name: "",
  email: "",
  expense: 0,
  avatar: ""
};
