import axios from "axios";

const root = "https://goodsmile-production-e99f.up.railway.app/"

export const logMe = async (body) => {

    return await axios.post(`${root}login`, body);
};

// export const newUser = async (body) => {
//     return await axios.post(`${root}/user`, body)
// };

export const getUserData = async (token) => {
    let config = {        headers: { 'Authorization': 'Bearer '+ token,   }    };
    return await axios.get(`${root}users`, config)
}

export const registerUser = async (body) => {
    return await axios.post(`${root}users`, body)
  }

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}users/admin`, config);
}

export const bringAppointments = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.get(`${root}appointments`, config);
}



export const nuevoAppointment = async (body, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.post(`${root}appointments`, body, config)

}


export const AppointmentsAll = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}appointments/doctor`, config);
}


// export const getUserData = async (token) => {

//     console.log("----------", token);
 
//      let config = {headers: { Authorization: `Bearer ${token}`}};
//      return await axios.get(`${root}profile`, config)
//  }

