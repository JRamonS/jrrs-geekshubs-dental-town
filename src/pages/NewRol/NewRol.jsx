import React, { useState, useEffect }  from 'react';
import { Button, Form } from 'react-bootstrap';
import { InputText } from '../../Components/InputText/InputText';
import { changeRole, getUserData } from '../../Services/apiCalls';
import { userData } from '../userSlice';


export const NewRol = () => {
    const [credenciales, setCredenciales] = useState({
        // fullName: '',
        // email: '',
        // password: '',
        rol_id: '',
      });
    
      const inputHandler = (e) => {
        setCredenciales((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    



    useEffect(()=>{
        if (userData.name === ""){
          getUserData().then(
          ).catch(error => (console.log(error)))
        }
    }, [userData]);

    const checkError = (e) => {

    }



    const changeRol = () => {
      changeRole(credenciales)
          .then(() => {
              setTimeout(() => {
                  navigate("/");
              }, 2000);
          })
          .catch((error) => console.log(error));
  };

    return (
        <>
        <hr />
        <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <Form>
           <Form.Group>
              <Form.Label>userid:</Form.Label>
              <InputText className={"inputLogin"}
              type={"number"} name={"userid"} placeholder={"userid..."} required={true}
              changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
              </Form.Group>
          {/* <Form.Group>
              <Form.Label>email:</Form.Label>
              <InputText className={"inputLogin"}
              type={"email"} name={"email"} placeholder={"email..."} required={true} 
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>
          <Form.Group>
              <Form.Label>password:</Form.Label>
              <InputText className={"inputLogin"}
              type={"password"} name={"password"} placeholder={"password..."} required={true} 
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>  */}
          <Form.Group>
              <Form.Label>Role Id:</Form.Label>
              <InputText className={"rol_id"}
                type={"number"} name={"rol_id"} placeholder={"rol_id"} required={true}
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>
              <br />
              <div className='botonModificar'>
                  <Button variant="primary" type="submit" onClick={changeRol}>
                      Modificar Datos
                  </Button>
              </div>
          </Form>
        </div>
        </>
    );
}
