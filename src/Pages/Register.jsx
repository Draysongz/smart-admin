import React from 'react' 
import './Register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from '../Assets/avatar.svg'
import { addDoc, collection } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth, db } from '../firebase'
import {toast} from 'react-toastify'

const Register = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const navigate = useNavigate()
      function focus(){
        setIsFocused(true)
    }

    const redirect = ()=>{
        navigate('/login')
    }

    const onSubmit= async(e)=>{
        e.preventDefault()
        try {
            const userCredential= await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user
            updateProfile(user, {
                displayName: username
            })
            const colref= await addDoc(collection(db, 'users'),{
                name: name,
                displayName: username,
                email: email,

            })
            toast('successful')
            navigate('/login')
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className="signup-container">
        <div className="left">
            <h2 className='title'>Are you one of us?</h2>
            <button className='signin' type='submit' onClick={redirect}>Log in</button>
        </div>
        <div className="form-container">
        <form action="" onSubmit={onSubmit} >
                <img src={avatar} alt="" className='avatar' />
                <h2>SIGN UP</h2>
                <div className={`input-div one ${isFocused ? " focus" : "" }`} onFocus={focus} >
                    <div className="i">
                        <i className='fas fa-user'></i>
                    </div>
                    <div>
                        <h5>Full Name</h5>
                        <input type="text" className="input" onChange={e=>setName(e.target.value)} required />
                    </div>
                </div>
                <div className={`input-div one ${isFocused ? " focus" : "" }`} onFocus={focus} >
                    <div className="i">
                        <i className='fas fa-user'></i>
                    </div>
                    <div>
                        <h5>Username</h5>
                        <input type="text" className="input" onChange={e=>setUsername(e.target.value)} required />
                    </div>
                </div>
                <div className={`input-div one ${isFocused ? " focus" : "" }`} onFocus={focus} >
                    <div className="i">
                        <i className='fas fa-envelope'></i>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input type="email" className="input" onChange={e=>setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className={`input-div two ${isFocused ? " focus" : "" }`} onClick={focus}  >
                    <div className="i">
                        <i className='fas fa-lock'></i>
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input onClick={focus} type="password" className="input" onChange={e=>setPassword(e.target.value)} required/>
                    </div>
                </div>
                <input type="submit" className='btn' value='Sign Up' />
            </form>
        </div>
    </div>
  )
}

export default Register