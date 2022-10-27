import React from 'react'
import Table  from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import './Users.css'
import avatar from '../Assets/avatar.svg'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import { child, ref } from 'firebase/database'
import { signOut } from 'firebase/auth'
import { onValue } from 'firebase/database'
import { sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Users = () => {
    const [userArray, setUserArray]= useState([])
    const [useremail, setUserMail] = useState('')
    const [ismerchant, setIsMerchant]= useState(false)

    useEffect(()=>{
     
      const userRef= ref(db, 'users')
      onValue(userRef, (snapshot) => {
        let records = []
        snapshot.forEach(childSnapshot=>{
          let keyName = childSnapshot.key
          let data = childSnapshot.val()
          records.push({"key": keyName, "data":data})
        })
        setUserArray(records)
        userArray.map((user, index)=>{
          if(user.data.merchant!= true){
            setIsMerchant('User')
          }
        })
      })


        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUserMail(user.email)
          }else(
            console.log('no user')
          )})
    },[])
    const navigate = useNavigate()
    const logout = async (e)=>{
        e.preventDefault()

        try {
            const logout = await signOut(auth)
            localStorage.clear()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
    document.title='Users'

  return (
   <>
   <div className='table-container'>
   <input type='checkbox' id='nav-toggle'/>
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2><span className="las la-lightbulb"></span> <span>Smart Change</span></h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="/dashboard" >
              <span className='las la-igloo'></span>
              <span>Dashboard</span>
            </a>
            </li>
            <li>
            <a href="#" className='active'>
              <span className='las la-user'></span>
              <span>Users</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-clipboard-list'></span>
              <span>Merchants</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-shopping-bag'></span>
              <span>Transactions</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-user-circle'></span>
              <span>Account</span>
            </a>
            </li>
            <li>
              <a href="#">
              <span className="las la-power-off"></span>
              <span onClick={logout} className='logbtn'>Log out</span>
              </a>
            </li>
            
        </ul>
      </div>
    </div>

<div className="main-content">
  <header>
    <div className="header-title">
      <h2>
      <label htmlFor="nav-toggle">
        <span className='las la-bars'></span>
      </label>
         Dashboard
      </h2>
    </div>
    
    <div className="search-wrapper">
      <span className="las la-search"></span>
      <input type="search" placeholder='search here' />
    </div>
    <div className="user-wrapper">
      <img src={avatar} alt="" width='30px' height='30px' />
      <div>
        <h4>{useremail}</h4>
        <small>Super admin</small>
      </div>
    </div>
  </header>

         <Table responsive="sm" striped  bordered hover className='userTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {userArray.map((user, index)=>{
                return(
                    <tr key={index}>
                        <td>{user.data.username}</td>
                        <td>{user.data.email}</td>
                        <td>
                        {user.data.phone}
                        </td>
                        <td>{ismerchant}</td>
                        <td>
                            <span><button>Edit</button></span>
                            <span><button>Delete</button></span>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
        </div>

   </div>
   </>
  )
}

export default Users
