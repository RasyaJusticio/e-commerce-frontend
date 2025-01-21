export type AuthedResponse = {
  user: {
    name: string;
    role: "admin" | "user";
  };
};
