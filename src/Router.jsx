import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import App from './App'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Registration/>} />
            {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
            <Route path='/login' element={<Outlet/>}>
                <Route index element={<Login/>}/>
                <Route path='dashboard' element={<Dashboard/>} />
                
            </Route>
            

        </Route>
    </Routes>
  )
}

export default Router