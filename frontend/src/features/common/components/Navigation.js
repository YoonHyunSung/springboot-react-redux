import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from '../counterSlice';
import { Link } from 'react-router-dom'


export default function Navigation() {
  
  return (
    <div>
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="useradd">UserAdd</Link></li>
            <li><Link to="userdetail">UserDetail</Link></li>
            <li><Link to="userlist">UserList</Link></li>
            <li><Link to="userlogin">UserLogin</Link></li>
            <li><Link to="usermodify">UserModify</Link></li>
            <li><Link to="userremove">UserRemove</Link></li>
        </ul>
    </div>
  );
}
