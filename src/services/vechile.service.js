import axios from 'axios';

let API_URL = "";


if ( process.env.NODE_ENV === 'development') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_DEV + "vechile/";
  
}

if ( process.env.NODE_ENV === 'production') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_PRD + "vechile/";
}

class VechileService {
  
  


  getAll() {
    return axios.get(API_URL + 'all');
  }

  getById(id) {
    return axios.get(API_URL + `${id}`);
  }

  update (id, data)  {
    return axios.put(API_URL + `${id}`, data);
  };

  
  updateStatus (id, statId, statUser)  {
    
    if (statUser=="")  statUser="free";
    
    return axios.put(API_URL + "status/" + `${id}` +`/`+ `${statId}` +`/`+ `${statUser}`);
  };


  delete (id)  {
    return axios.delete(API_URL + `${id}`);
  };

  create (data)  {
    return axios.post(API_URL + 'add' , data);
  };
  
  calculateDistance(src,dst) {
    return axios.get(API_URL + `${src}` +`/`+`${dst}`);
  }
  
}

export default new VechileService();
