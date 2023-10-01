import React from 'react';
import './dashboard.css';
import TranBox from './TranBox';
import { FaCoins, FaUserPlus , FaUsers} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

function Dashboard() {
    return (
        <div className='Dash-board'>
            <div className='top-row'>
                <p>My Transactions</p>
            </div>

            <div className='tran-details'>
                <TranBox
                    value="6"
                    iconName={<FaCoins />}
                    content="Earnings"
                    colorName="#00c0ef"
                />

                <TranBox
                    value="6"
                    iconName={<VscGraph />}
                    content="Number of Actives"
                    colorName="#00a65a"
                />

                <TranBox
                    value="0"
                    iconName={<FaUsers />}
                    content="No.of Closed Loans"
                    colorName="#f39c12"
                />

                <TranBox
                    value="0"
                    iconName={<FaUserPlus />}
                    content="No.of Disbursed Deals"
                    colorName="#dd4b39"
                />
            </div>
        </div>
    )
}

export default Dashboard;