import React from 'react'
import Card from '../Card/Card';
import './LoanList.css';
import DATA from './Data';
import { NavLink } from "react-router-dom";
function LoanList() {

    const cardItem = (item) => {
        return (
            <div className="card my-5" key={item.id} style={{ width: "30rem", padding: "0px" }}>
                {/* <img src={item.img} class="card-img-top" alt={item.title} /> */}
                <div className="card-body text-center" style={{padding:"0px ", margin:"0px"}}>
                    <div style={{ backgroundColor: "#00a65a", color: "white", height: "100px" , paddingTop: "20px"}}>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="lead">Age: {item.age}</p>
                    </div>
                    <div style={{padding: "30px"}}>
                    <button className='btn btn-success'>Participated lender</button> &nbsp; &nbsp; &nbsp;
                    <button className='btn btn-primary'>Application</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='container-fluid'>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Loans</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>

    )
}

export default LoanList;