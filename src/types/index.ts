export type APIType = {
  url: string;
  fetchData: () => Promise<APIResponse[]>;
};

export interface APIResponse {
  name: string;
  id: number;
}

export interface ErrorType {
  message: string;
}
