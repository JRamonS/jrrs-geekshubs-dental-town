// export const validate = (name, data, required) => {
//   switch (name) {
//     case "name":
//     case "surname":
//     case "nombre":
//     case "apellido":
//     case "fullname":
//     case "nombrecompleto":
//       //Aqui evaluaremos strings que NO pueden tener números

//       if (data === "" && required === true) {

        
//         return {message: "Please fill the field", validated: false};

//         //Evaluamos mediante la expresión regular 
//       } else if (!/[a-zA-Z]/gi.test(data)) {
//         return {message: "Please fill with a valid text", validated: false};
//       }

//       return {message: "", validated: true};

//     case "email":
//     case "e-mail":
//     case "correo":

//       if (data === "" && required === true) {
//         return {message: "Please fill the field", validated: false};
//       } else if (
//         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
//       ) {
//         return {message: "Please fill with a valid text", validated: false};
//       }

//       return {message: "", validated: true};

//       case "password":
//       case "contraseña":

//           if (data === "" && required === true) {
//             return {message: "Please fill the field", validated: false};
//           } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-=?\[\]{};:<>,./]).{8,}$/g
//           .test(data)) {
//             return {message: "Please fill with a valid text", validated: false};
//           }
//           return {message: "", validated: true};          

//     case "phone":
//     case "tfno":
//     case "telefono":
//     case "phonenumber":

  
//       if (data === "" && required === true) {
  
          
//         return {message: "Please fill the field", validated: false};

//         //Evaluamos mediante la expresión regular 
//       } else if (!/^[\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]+$/gi.test(data)) {
//         return {message: "Please fill with a valid text", validated: false};
//       }

//       return {message: "", validated: true};


//     case "dni":
//     case "document":
//     case "nif":

//       if (data === "" && required === true) {

        
//         return {message: "Please fill the field", validated: false};

//         //Evaluamos mediante la expresión regular 
//       } else if (!/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/g.test(data)) {
//         return {message: "Please fill with a valid text", validated: false};
//       }

//       return {message: "", validated: true};

//       case "direction":
//         //Aqui evaluaremos strings que NO pueden tener números
  
//         if (data === "" && required === true) {
  
          
//           return {message: "Please fill the field", validated: false};
  
//           //Evaluamos mediante la expresión regular 
//         } else if (!/[a-zA-Z]/gi.test(data)) {
//           return {message: "Please fill with a valid text", validated: false};
//         }
  
//         return {message: "", validated: true};

//       case "birth_of_date":
//         //Aqui evaluaremos strings que NO pueden tener números
  
//         if (data === "" && required === true) {
  
          
//           return {message: "Please fill the field", validated: false};
  
//           //Evaluamos mediante la expresión regular 
//         } else if (!/^\d{4}-\d{2}-\d{2}$/gi.test(data)) {
//           return {message: "Please fill with a valid text (yyyy-mm-dd)", validated: false};
//         }
  
//         return {message: "", validated: true};


//     default:
//       console.log("Fielt not recognized");
//   }
// };






export const validate = (name, data, required) => {
  switch (name) {
    case "name":
    case "surname":
    case "nombre":
    case "apellido":
    case "fullname":
    case "nombrecompleto":
    case "username":
    case "gender":
    case "status":
    case "observations":

      if (data === "" && required === true) {
        return { message: "Please fill the field", validated: false };
      } else if (!/[a-z]/gi.test(data)) {
        return { message: "Please fill with a valid text", validated: false };
      }

      return { message: "", validated: true };

    case "email":
    case "e-mail":
    case "correo":
      if (data === "" && required === true) {
        return { message: "Please fill the field", validated: false };
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
      ) {
        return { message: "Invalid e-mail format", validated: false };
      }

      return { message: "", validated: true };

    case "password":
    case "contraseña":
      if (data === "" && required === true) {
        return { message: "Please fill the field", validated: false };
      } else if (!/[\d()+-]/g.test(data)) {
        return { message: "Invalid password format", validated: false };
      }

      return { message: "", validated: true };

    case "phone":
    case "tfno":
    case "tlfno":
    case "telefono":
    case "phonenumber":
    case "postcode":

      if (data === "" && required === true) {
        return { message: "Please fill the field", validated: false };
      } else if (!/[\d()+-]/g.test(data)) {
        return { message: "Invalid phone format", validated: false };
      }
      return { message: "", validated: true };

      case "address":
      case "direccion":
        //Aqui evaluaremos strings que NO pueden tener números
  
        if (data === "" && required === true) {
  
          
          return {message: "Please fill the field", validated: false};
  
          //Evaluamos mediante la expresión regular 
        } else if (!/[a-zA-Z]/gi.test(data)) {
          return {message: "Please fill with a valid text", validated: false};
        }
  
        return {message: "", validated: true};

        case "date_of_birth":
        case "fecha de nacimiento":
        case "date":
                  //Aqui evaluaremos strings que NO pueden tener números
            
                  if (data === "" && required === true) {
            
                    
                    return {message: "Please fill the field", validated: false};
            
                    //Evaluamos mediante la expresión regular 
                  } else if (!/^\d{4}-\d{2}-\d{2}$/gi.test(data)) {
                    return {message: "Please fill with a valid text (yyyy-mm-dd)", validated: false};
                  }
            
                  return {message: "", validated: true};

      default:
            console.log("Field not recognized");
  };
};
