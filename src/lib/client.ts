import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://sbctechnicalexamapi-default-rtdb.firebaseio.com',
});

export default apiClient;
