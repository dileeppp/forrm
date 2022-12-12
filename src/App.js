import { useState } from 'react';
import './App.css';
import FormInput from './Compponents/FormInput';

function App() {
  const [values,setValues] = useState({
    username:'',
    email:'',
    fullname:'',
    birthday:'',
    password:'',
    confirmPassword:'',



  })
  const inputs = [
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      errorMessage:'please fill the username',
      label:'Username',
      required:true
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'Email',
      errorMessage:'its mandatory to fill email',
      required:true,
      label:'Email',
      
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      errorMessage:' ! fill this ...',
      label:'Birthday',
      required:true
    },{
      id:4,
      name:'password',
      type:'password',
      placeholder:'Password',
      errorMessage:'password should contain 8 nos ',
      required:true,
      label:'Password'
    },
    {
      id:5,
      name:'confirmpassword',
      type:'password',
      placeholder:'Confirm Password',
      errorMessage:'password did not matched',
      label:'Confirm Password',
      required:true
    }

  ]


const handleSubmit=(e)=>{
  e.preventDefault()
}

const onChange = (e)=>{
  setValues({...values,[e.target.name]:e.target.value})
}
const eventHandle = (e)=>{
  alert(` ${values.username} ! you are sucessfully logged in`)
}
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
    <h1>Register</h1>

     {inputs.map((input)=>(
      <FormInput key={input.id} {...input} value={values[input.name]}  onChange={onChange}/>
     ))}
      <button onClick={eventHandle}>submit</button>


    </form>
    </div>
  );
}

export default App;
