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
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2><span className='lab la-accusoft'>Accusoft</span></h2>
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
              <span>Customers</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-clipboard-list'></span>
              <span>Projects</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-shopping-bag'></span>
              <span>Orders</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-receipt'></span>
              <span>Inventory</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-user-circle'></span>
              <span>Accounts</span>
            </a>
            </li>
            <li>
            <a href="#">
              <span className='las la-clipboard-list'></span>
              <span>Tasks</span>
            </a>
            </li>
        </ul>
      </div>
    </div>

<div className="main-content">
  <header>
    <div className="header-title">
      <h2>
      <label htmlFor="">
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
          <span>Customers</span>
        </div>
        <div>
          <span className="las la-users"></span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <h1>79</h1>
          <span>Projects</span>
        </div>
        <div>
          <span className="las la-clipboard-list"></span>
        </div>
      </div>

      <div className="card-single">
        <div>
          <h1>124</h1>
          <span>Orders</span>
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
              <h3>Recent Projects</h3>

              <button>See all <span className="las la-arrow-right"></span></button>
            </div>
            <div className="card-body">
             <div className="table-responsive">
             <table width='100%'>
                <thead>
                  <tr>
                    <td>Project Title</td>
                    <td>Department</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>UI/UX Design</td>
                  <td>UI Team</td>
                  <td><span className="status purple"></span>
                    review
                  </td>
                  </tr>

                  <tr>
                    <td>Web Development</td>
                    <td>Frontend</td>
                  <td><span className="status pink"></span>
                    in progress
                  </td>
                  </tr>

                  <tr>
                    <td>Smart Change App</td>
                    <td>Mobile Team</td>
                  <td><span className="status orange"></span>
                    pending
                  </td>
                  </tr>

                  <tr>
                  <td>UI/UX Design</td>
                  <td>UI Team</td>
                  <td><span className="status purple"></span>
                    review
                  </td>
                  </tr>

                  <tr>
                    <td>Web Development</td>
                    <td>Frontend</td>
                  <td><span className="status pink"></span>
                    in progress
                  </td>
                  </tr>

                  <tr>
                    <td>Smart Change App</td>
                    <td>Mobile Team</td>
                  <td><span className="status orange"></span>
                    pending
                  </td>
                  </tr>

                  <tr>
                  <td>UI/UX Design</td>
                  <td>UI Team</td>
                  <td><span className="status purple"></span>
                    review
                  </td>
                  </tr>

                  <tr>
                    <td>Web Development</td>
                    <td>Frontend</td>
                  <td><span className="status pink"></span>
                    in progress
                  </td>
                  </tr>

                  <tr>
                    <td>Smart Change App</td>
                    <td>Mobile Team</td>
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
              <h3>New Users</h3>

              <button>See all <span className="las la-arrow-right"></span></button>
            </div>

            <div className="card-body">
            <div className="customer">
                <div className='info'>
                <img src={avatar} alt="" width='40px' height='40px' />
              <div>
                <h4>Great Adams </h4>
                <small>CEO TechHouse</small>
                </div>
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
                <img src={avatar} alt="" width='40px' height='40px' />
              <div>
                <h4>Great Adams </h4>
                <small>CEO TechHouse</small>
                </div>
              </div>
            </div>
            <div className='contact'>
              <span className="las la-user-circle"></span>
              <span className="las la-comment"></span>
              <span className="las la-phone"></span>
             </div>
             <div className="customer">
                <div className='info'>
                <img src={avatar} alt="" width='40px' height='40px' />
              <div>
                <h4>Great Adams </h4>
                <small>CEO TechHouse</small>
                </div>
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
    </main>
</div>




</>
  )
}

export default Dashboard
