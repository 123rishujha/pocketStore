import React,{useState} from 'react'
import { loginSuccess } from '../redux/auth/auth.action';
import { useAppDispatch } from '../redux/store'
import { LoginType } from '../utils/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex, Input } from '@chakra-ui/react';

const Login = () => {
  const dispatch = useAppDispatch();
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("")
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.data || '/';


  const handleLogin = () =>{
    if(email && password){
      const payload:LoginType = {
        email,
        password
      }
      dispatch(loginSuccess(payload))
      .then(()=>{
        navigate(comingFrom,{replace:true})
      })
    }
  }

  return (
    <Flex flexDirection={'column'}>
      <Input type="text" value={email} onChange={(e)=>setEmail(e.target.value) } />
      <Input type="text" value={password} onChange={(e)=>setPassword(e.target.value) } />
      <Button onClick={handleLogin}>Login</Button>
    </Flex>
  )
}

export default Login;

