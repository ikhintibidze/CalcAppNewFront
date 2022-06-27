import axios from 'axios';
import authHeader from './auth-header';

let API_URL = "";


if ( process.env.NODE_ENV === 'development') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_DEV + "user/";
  
}

if ( process.env.NODE_ENV === 'production') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_PRD + "user/";
}



class UserService {
  
  getAll() {
    return axios.get(API_URL + 'all', { headers: authHeader() });
  }

  getById(id) {
    return axios.get(API_URL + `${id}`, { headers: authHeader() });
  }

  update (id, data)  {
    return axios.put(API_URL + `${id}`, data, { headers: authHeader() });
  };

  delete (id)  {
    return axios.delete(API_URL + `${id}`, { headers: authHeader() });
  };

  create (data)  {
    return axios.post(API_URL + 'add' , data, { headers: authHeader() });
  };

  
}

export default new UserService();

