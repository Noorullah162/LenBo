import React from 'react';
import './header.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Hello } from '../../Hello';
import { Info } from '../../Info';
// import { AiOutlineLogin } from "react-icons/bi";
import { AiFillAlipayCircle } from "react-icons/ai";

import { FiLogIn } from "react-icons/fi";
import Reg from '../register/reg';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import LoanList from '../Loanlist/LoanList';

function Header() {
    return (
        <div>
            <header class="header">
                <nav>
                    <div class="logo">
                        <a ><Link to="/">LENB<span>O</span></Link></a>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <ul class="menu">
                        <li><a ><Link to="/">Home</Link></a></li>
                        <li><a ><Link to="dashboard">Dashboard</Link></a></li>
                        <li><a ><Link to="loan">Loan Listing</Link></a></li>
                        <li><a ><Link to="dashboard">Profile Details</Link></a></li>
                        <li><Link to="reg"> <span> <FiLogIn style={{ fontSize: '20px' }} /> </span> <span> Sigin/Login </span> </Link></li>
                    </ul>
                </nav>
            </header>
            <section>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="reg" element={<Reg />} />
                    <Route path="/" element={<Home />} />
                    <Route path="loan" element={<LoanList />} />

                </Routes>
            </section>

            
        </div>

    )
}

export default Header;