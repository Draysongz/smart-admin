import React, { useContext } from 'react'
import './Login.css'
import wave from '../Assets/wave.png'
import avatar from '../Assets/avatar.svg'
import bg from '../Assets/bgg.svg'
import { useState } from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import {auth, db, collection} from '../firebase'
import {toast} from 'react-toastify'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
      function focus(){
        setIsFocused(true)
    }
    const navigate = useNavigate()

const {dispatch}= useContext(AuthContext)

    const onSubmit= async (e)=>{
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                dispatch({type: "LOGIN", payload:user})
            })
            toast('Successful')
            navigate('/dashboard')
        }
        catch(error){
            if(error.message === 'Firebase: Error (auth/invalid-email).'){
                toast.error('Invalid email')
            }else if(error.message === 'Firebase: Error (auth/user-not-found).'){
                toast.error('User not found')
            }else if(error.message==='Firebase: Error (auth/wrong-password).'){
                toast.error('Wrong Password')
            }
        }
        
    }
  return (
    <>
      <img src={wave} alt="" className="wave" />
      <div className="container">
        <div className="img">
            <img src={bg} alt="" />
        </div>
        <div className="login-container">
            <form action="" onSubmit={onSubmit}>
                <img src={avatar} alt="" className='avatar' />
                <h2>Welcome</h2>
                <div className={`input-div one ${isFocused ? " focus" : "" }`} onFocus={focus} >
                    <div className="i">
                        <i className='fas fa-user'></i>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email" className="input" onChange={e=>setEmail(e.target.value)} />
                    </div>
                </div>
                <div className={`input-div two ${isFocused ? " focus" : "" }`} onClick={focus}  >
                    <div className="i">
                        <i className='fas fa-lock'></i>
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input onClick={focus} type="password" className="input" onChange={e=>setPassword(e.target.value)} />
                    </div>
                </div>
                <a className='forgot' href="#">forgot password?</a>
                <input type="submit" className='btn' value='Login' />
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
