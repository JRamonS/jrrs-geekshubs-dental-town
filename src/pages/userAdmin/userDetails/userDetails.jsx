// import React, {useEffect} from 'react';

// import { useSelector } from 'react-redux';
// import NavBar from '../../../components/NavBar';
// import { detailData } from '../../detailSlice';
 
// export const UserDetails = () => {

//     //conexion a RDX en modo lectura
//     const detailRedux = useSelector(detailData);

//     useEffect(()=>{
     
//     },[])


//      return (
//         <>
//         <NavBar />
//         <hr />
       
//          <div className=''>
//             <div className='texto'>Username: </div>
//             {detailRedux?.choosenObject?.username}
//             <div className='texto'>Email: </div>
//             {detailRedux?.choosenObject?.email}
//             <div className='texto'>Name: </div>
//             {detailRedux?.choosenObject?.name}
//             <div className='texto'>Surname: </div>
//             {detailRedux?.choosenObject?.surname}
//             <div className='texto'>Address: </div>
//             {detailRedux?.choosenObject?.address}
//             <div className='texto'>Phone: </div>
//             {detailRedux?.choosenObject?.phone}
//          </div>
       
//          </>
//      )
// }