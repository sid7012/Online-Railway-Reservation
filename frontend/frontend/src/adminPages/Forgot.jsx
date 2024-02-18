import './forgetPassword.css'
import { toast } from 'react-toastify'
import React ,{Component, useState} from 'react';
import axios from 'axios'
import { URL } from '../config'
import emailjs from "emailjs-com";


const Forgot = () =>{

  const [email, setEmail] = useState('');

  function sendEmail(e) {
    e.preventDefault();
 
    //console.log(e.target.email)
    console.log(email)
    if (email.length == 0) {
      toast.warning("please enter email");
    } else {
      const url = `${URL}/users/sendEmail`;
        
      axios.get(url, {params:{email:email}}).then((response) => {
        const result = response.data;
  
        if (result["status"] == "success") {
           //sendEmail(e);
           console.log(result.data)
           sessionStorage.newEmail = email;
           localStorage.setItem("email",email)
           console.log("Email: ",localStorage.getItem('email'))
           console.log("email",email)
          console.log(result);
          localStorage.setItem('email',email)
          emailjs.sendForm('train_service', 'template_8vfgm65', e.target, 'auLXVroD_1wdtWLw6')
          .then((result) => {
            console.log( e.target)
              console.log(result.text);
              toast.success("email sent to your emailId");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        } else {
          toast.error("email does not exist");
        }
      });
    }

   

} 


// const searchUser = (e) => {
//   e.preventDefault();
//   let email = e.target.email.value
//   if (email.length == 0) {
//     toast.warning("please enter email");
//   } else {
//     const url = `${URL}/user/search-employee/${email}`;

//     axios.get(url).then((response) => {
//       const result = response.data;

//       if (result["status"] == "success") {
//         toast.success("success");
//         sessionStorage['emailId'] = email;
//          //sendEmail(e);
//         console.log(result);
//       } else {
//         toast.error("email does not exist");
//       }
//     });
//   }
// };



//   const navigate = useNavigate()

//   const cancelReset = ()=>{
//       navigate('/login')
//   }

 



    return (
        <div>
          
         <div className='row'></div>

          <div>
          
          
            <form onSubmit={sendEmail}>
                           
                          <label>Email</label>
                            <input onChange={(e)=>{
                              setEmail(e.target.value)
                            }} type="email" className="form-control" placeholder="Email Address" name="email"/>
                            <div style={{marginTop:"30px"}}>
                            <input style={{width:"100%"}} type="submit" className="btn btn-primary" value="Send password reset email"></input>
                          </div>       
                    
                </form>
                </div>
            
        </div>
      )

}

export default Forgot