import axios from "axios";

let API_URL = "";


if ( process.env.NODE_ENV === 'development') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_DEV + "user/";
  
}

if ( process.env.NODE_ENV === 'production') {
  
   API_URL = process.env.REACT_APP_DISTANCECALC_API_PRD + "user/";
}


class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
