import axios from "axios";

const root = "http://localhost:3000/"

export const logMe = async (body) => {

    return await axios.post(`${root}login`, body);
};

// export const newUser = async (body) => {
//     return await axios.post(`${root}/user`, body)
// };

export const getUserData = async () => {
    let config = {        headers: { Authorization: `Bearer ${credentials.token}` }    };
    return await axios.get(`${root}/user`, config)
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



export const nuevoAppointment = async (body) => {
    let token = credentials.token
    let config = {        headers: { Authorization: `Bearer ${token}` }    };
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
