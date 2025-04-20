import { getRequest, putRequest } from '../requestHandler';
import endpoints from '../endpoints';  


export const getMyStudents = async () => {
  const request = {
    url: endpoints.dashboard.getMyStudents,
  };
  return getRequest(request); 
};

export const updateMyStudentsByStudentId = async ({ id, body }) => {
  const request = {
    url: endpoints.dashboard.updateMyStudentsByStudentId(id), 
    body,  
  };
  return putRequest(request);  
};
