import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const Items = JSON.parse(sessionStorage.getItem("userInfo"));
    const [Info, setInfo] =useState(Items??[]);
    function handleSubmission() {
        let userData = {
          Name: name,
          Email: email,
          Number: number,
          Address: address,
          Password: password,
          Cpassword: cpassword,
        };
        const InfoValues = [...Info , userData];
        setInfo(InfoValues);
        sessionStorage.setItem("userInfo", JSON.stringify(InfoValues));
    document.getElementsByClassName("span").style = "block";
    alert("Data recorded!");
  }
  return (
    <>


<div className="background ">
      <div className="box flex flex-col justify-center items-center w-full">
        <div className=" flex flex-col bg-slate-50 p-8 mt-8 shadow-xl rounded-lg w-5/12">
          <h3 className='text-4xl text-center text-slate-700 font-semibold'>Sign Up</h3>
          <label className='mt-4'  htmlFor="name"> Name </label>
          <input
            className='rounded border border-slate-400 my-2 h-10 p-4 focus:outline-none focus:border focus:border-black'
            type="text"
            name="email"
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email"> Email </label>
          <input
            className='rounded border border-slate-400 my-2 h-10 p-4 focus:outline-none focus:border focus:border-black'
            type="email"
            name="email"
            placeholder="Type your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="number"> Number </label>
          <input
            className='rounded border border-slate-400 my-2 h-10 p-4 focus:outline-none focus:border focus:border-black'
            type="number"
            name="num"
            placeholder="Type your number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          <label htmlFor="address"> Address </label>
          <input
            className='rounded border border-slate-400 my-2 h-10 p-4 focus:outline-none focus:border focus:border-black'
            type="text"
            name="address"
            placeholder="Type your address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <label htmlFor="password"> Password </label>
          <input
            className='rounded border border-slate-400 my-2 h-10 p-4 focus:outline-none focus:border focus:border-black'
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="cpassword"> Confirm Password </label>
          <input
            className='rounded border border-slate-400 my-2 h-10 p-4 focus:outline-none focus:border focus:border-black'
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value)}
            value={cpassword}
          />
          <NavLink to='login' onClick={handleSubmission} className='bg-slate-700 text-white text-center py-2 my-2 rounded hover:bg-slate-900'>Sign Up</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registration