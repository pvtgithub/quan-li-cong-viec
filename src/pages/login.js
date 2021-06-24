import React, {useEffect, useState} from 'react';
import {TextField,Button,makeStyles} from '@material-ui/core'
import axios from 'axios';
import {useSnackbar} from 'notistack'

const styles = makeStyles({
    containerStyle: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    input: {
      margin: 10,
      width: 300,
    },
  });

  const submitLoginAPI = (data) =>{
    const url = "http://localhost:5555/api/login";
    return axios.post(url,data);
  }

function Login() {

    const {enqueueSnackbar} = useSnackbar();
    const[info,setInfo] = useState({usename: '',password: ''})

    useEffect(()=>{
        console.log("account: ",info)
    },[info])
    const onValueChangeUsername=(event)=>{
        setInfo(prev => ({...prev,usename: event.target.value}))
    }

    const onValueChangePassword=(event)=>{
        setInfo(prev => ({...prev,password: event.target.value}))
    }
    
    const onSubmit= async() =>{
      const data = new FormData();
      data.append("usename", info.usename)
      data.append("password", info.password)
      try{
        const result = await submitLoginAPI(data);
        console.log(JSON.stringify(result));
        if (result.data === "success") {
          enqueueSnackbar("Đăng nhập thành công!", { variant: "success" });
        } else {
          enqueueSnackbar("Đăng nhập thất bại!", { variant: "error" });
        }
      }catch(e){
        console.log("Error",e)
        enqueueSnackbar("Đăng nhập thất bại!", { variant: "error" });
      }
    }
    const classes = styles();
    return (
        <div className={classes.containerStyle}>
            <TextField  className={classes.input} onChange={onValueChangeUsername} label="Username" variant="outlined" />
            <TextField  className={classes.input} onChange={onValueChangePassword} label="Password" variant="outlined" />
            <Button color="primary" variant="contained" onClick={onSubmit}>Login</Button>
        </div>
        );
}

export default Login