import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import './Dashboard.css'
import avatar from '../Assets/avatar.svg'



const Dashboard = () => {
  
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
   document.title='Dashboard'
  return (
    <>
    <input type='checkbox' id='nav-toggle'/>
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2><span className="las la-lightbulb"></span> <span>Smart Change</span></h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="#" className='active'>
              <span className='las la-igloo'></span>
              <span>Dashboard</span>
            </a>
            </li>
            <li>
            <a href="#">
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
        <h4>John Doe</h4>
        <small>Super admin</small>
      </div>
    </div>
  </header>

  <main>
    <div className="cards">
      <div className="card-single">
        <div>
          <h1>54</h1>
          <span>Users</span>
        </div>
        <div>
          <span className="las la-users"></span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <h1>79</h1>
          <span>Merchants</span>
        </div>
        <div>
          <span className="las la-clipboard-list"></span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <h1>124</h1>
          <span>Transactions</span>
        </div>
        <div>
          <span className="las la-shopping-bag"></span>
        </div>
      </div>
      <div className="card-single">
        <div>
          <h1>$6k</h1>
          <span>Income</span>
        </div>
        <div>
          <span className="lab la-google-wallet"></span>
        </div>
      </div>
      </div>

      <div className="recent-grid">
        <div className="projects">
          <div className="card">
            <div className="card-header">
              <h3>Recent Signups</h3>

              <button>See all <span className="las la-arrow-right"></span></button>
            </div>
            <div className="card-body">
             <div className="table-responsive">
             <table width='100%'>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>Gidigbi Ayomide</td>
                  <td>Draysongz</td>
                  <td><span className="status purple"></span>
                    verified
                  </td>
                  </tr>

                  <tr>
                    <td>Great Adams</td>
                    <td>Great</td>
                  <td><span className="status pink"></span>
                    in progress
                  </td>
                  </tr>

                  <tr>
                    <td>Ademola Abidemi</td>
                    <td>Abidemi</td>
                  <td><span className="status orange"></span>
                    pending
                  </td>
                  </tr>

                  <tr>
                  <td>Karla Obakpolor</td>
                  <td>karlagod</td>
                  <td><span className="status purple"></span>
                    verified
                  </td>
                  </tr>

                  <tr>
                    <td>Onyeka ekwemozor</td>
                    <td>itzroyale</td>
                  <td><span className="status pink"></span>
                    in progress
                  </td>
                  </tr>

                  <tr>
                    <td>Annabel Allison</td>
                    <td>Annabel</td>
                  <td><span className="status orange"></span>
                    pending
                  </td>
                  </tr>

                  <tr>
                  <td>Augustina omahdigwe</td>
                  <td>tinatruth</td>
                  <td><span className="status purple"></span>
                    review
                  </td>
                  </tr>

                  <tr>
                    <td>Phillip Ebube</td>
                    <td>PhilBubs</td>
                  <td><span className="status pink"></span>
                    in progress
                  </td>
                  </tr>

                  <tr>
                    <td>Stephen Ogbaje</td>
                    <td>sirSteve</td>
                  <td><span className="status orange"></span>
                    pending
                  </td>
                  </tr>
                </tbody>
              </table>
             </div>
            </div>
          </div>
        </div>

      <div className="customers">
        <div className="card">
          <div className="card-header">
            <h3>New Merchants</h3>

            <button>see all <span className='las la-arrow-right'></span></button>
          </div>

          <div className="card-body">
            <div className="customer">
              <div className='info'>
              <img src={avatar} width='40px' height='40px' alt="" />

              <div>
              <h4>Karla God</h4>
              <small>CEO Cryptosmart</small>
              </div>
              </div> 
              <div className='contact'>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
                
              </div>
            </div>

            <div className="customer">
              <div className='info'>
              <img src={avatar} width='40px' height='40px' alt="" />

              <div>
              <h4>Karla God</h4>
              <small>CEO Cryptosmart</small>
              </div>
              </div> 
              <div className='contact'>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
                
              </div>
            </div>

            <div className="customer">
              <div className='info'>
              <img src={avatar} width='40px' height='40px' alt="" />

              <div>
              <h4>Karla God</h4>
              <small>CEO Cryptosmart</small>
              </div>
              </div> 
              <div className='contact'>
                <span className="las la-user-circle"></span>
                <span className="las la-comment"></span>
                <span className="las la-phone"></span>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </main>
</div>




</>
  )
}

export default Dashboard
