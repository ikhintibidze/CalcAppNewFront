import axios from 'axios';


let API_URL = "";


if ( process.env.NODE_ENV === 'development') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_DEV + "driver/";
  
}

if ( process.env.NODE_ENV === 'production') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_PRD + "driver/";
}



class OwnerService {
  
  getAll() {
    return axios.get(API_URL + 'all');
  }

  getById(id) {
    return axios.get(API_URL + `${id}`);
  }

  update (id, data)  {
    return axios.put(API_URL + `${id}`, data);
  };

  delete (id)  {
    return axios.delete(API_URL + `${id}`);
  };

  create (data)  {
    return axios.post(API_URL + 'add' , data);
  };

  
}

export default new OwnerService();
