import React from 'react';
import './dashboard.css';
import { FaCoins, FaUserPlus } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

function TranBox(props) {
  return (
    <div className='tran-box' style={{backgroundColor: props.colorName}}>
        <div className='tran-box-top-row'>
            <div className='top-row-left'><p>{props.value}</p></div>
            <div className = "icon-style">
                {props.iconName}
            </div>
        </div>
        <div className='end-row'>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default TranBox;