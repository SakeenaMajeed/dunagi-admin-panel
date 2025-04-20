import { apiClient } from './config';
import { apiMethod } from '../constants/api-methods.constants';

const createApiRequest = (method) => {
  return async ({ url, body }) => {
    try {
      let response;
      
      switch (method) {
        case apiMethod.GET:
          response = await apiClient.get(url);
          break;
        case apiMethod.POST:
          response = await apiClient.post(url, body);
          break;
        case apiMethod.PUT:
          response = await apiClient.put(url, body);
          break;
        case apiMethod.DELETE:
          response = await apiClient.delete(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
      return response.data; 
    } catch (error) {
      console.error(`Error during ${method} request to ${url}:`, error);
      throw error;
    }
  };
};


export const getRequest = createApiRequest(apiMethod.GET);
export const postRequest = createApiRequest(apiMethod.POST);
export const putRequest = createApiRequest(apiMethod.PUT);
export const deleteRequest = createApiRequest(apiMethod.DELETE);
