import React from 'react';
import './header.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Hello } from '../../Hello';
import { Info } from '../../Info';
// import { AiOutlineLogin } from "react-icons/bi";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Reg from '../register/reg';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import LoanList from '../Loanlist/LoanList';
import ProfileDetails from '../ProfileDetails/profileDetails';
import { useState } from 'react';

function Header() {
 
    const [regIcon, setregIcon] = useState(<span> <span>  <FiLogIn style={{ fontSize: '20px' }} /> </span> <span> Sigin/Login </span> </span>);

    const updateRegIcon = (newIcon) => {
        console.log(newIcon);
        console.log("called");
        setregIcon(newIcon);
    }



    return (
        <div>
            <header className="header">
                <nav>
                    <div className="logo">
                        <Link to="/">LENB<span>O</span></Link>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="dashboard">Dashboard</Link></li>
                        <li><Link to="loan">Loan Listing</Link></li>
                        <li><Link to="profile">Profile Details</Link></li>
                        <li><Link to="reg"  > {regIcon}  </Link></li>
                    </ul>
                </nav>
            </header>
            <section>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="reg" element={<Reg updateRegIcon = {updateRegIcon} a = "helloworld" />} />
                    <Route path="/" element={<Home />} />
                    <Route path="loan" element={<LoanList />} />
                    <Route path="profile" element={<ProfileDetails />} />
                </Routes>
            </section>

            
        </div>

    )
}

export default Header;