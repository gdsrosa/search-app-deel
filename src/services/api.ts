import { APIResponse, APIType } from '../types';

const API: APIType = {
  // url: 'src/mocks/usersList.json',
  url: import.meta.env.VITE_API_ENDPOINT,
  fetchData: async (): Promise<APIResponse[]> => {
    const response = await fetch(API.url);
    const data = await response.json();

    return data;
  },
};

export default API;
