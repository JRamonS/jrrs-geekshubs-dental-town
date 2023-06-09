import axios from "axios";

// const root = "https://goodsmile-production-e99f.up.railway.app/"

const root = "http://localhost:3000/"


export const logMe = async (body) => {

    return await axios.post(`${root}login`, body);
};


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

export const updateAppointment = async (id, body, token) => {

  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
  };

  return await axios.put(`${root}appointments/${id}`, body, config)

}

// export const updateAppointment = async ( params, body, token  ) => {
//   console.log("----------------------------------------------",)
//   console.log("esto vale body", body)
//   console.log("Esto vale tokensss:",token)
//   let config = {
//     headers: { 
//       'Authorization': 'Bearer '+ token,  
//     }};
//         return await axios.put(`${root}/appointment/update/${params}`,body, config )
// }


// export const getUserData = async (token) => {

//     console.log("----------", token);
 
//      let config = {headers: { Authorization: `Bearer ${token}`}};
//      return await axios.get(`${root}profile`, config)
//  }



export const changeRole = async (id, body, token) => {
  // const { id, rol_id } = body;
  // const userId = req.params
  const bodyParameters = {
    id: id,
    rol_id: rol_id,
          //       where: {
          // id: userId
          // }
    };
  const config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }}
  return await axios.put(`${root}rols/${id}`,  bodyParameters, config);
}

// export const changeRole = async (id, body) => {
//   let config = {
//     headers: { 
      
//       'Authorization': 'Bearer '+ token,  
//     }
//   };
//   return await axios.put(`${root}rols/${id}`, body)
// }

