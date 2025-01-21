export type APIResponse<T> = {
  status: string;
  data: T;
};

export type APISuccessResponse<T> = {
  status: "success";
} & APIResponse<T>;

export type APIFailResponse = {
  status: "fail";
  data: {
    message?: string;
    [key: string]: string[] | string | undefined;
  };
};
