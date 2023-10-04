import React, { useState } from 'react';
import './reg.css';

import Datainfo from '../DataInfo/DataInfo';
import { useNavigate} from 'react-router-dom';
function Reg() {

    const [emailValue, setemailValue] = useState('');
    const [pwdValue, setpwdValue] = useState('');
    const [logemailValue, setlogemailValue] = useState('');
    const [logpwdValue, setlogpwdValue] = useState('');
    const [selectedOption, setselectedOption] = useState("lender");
    const [logselectedOption, logsetselectedOption] = useState("lender");
    const navigate = useNavigate();
    // const history = useHistory();
    const SubmitHandler = (e) => {
        e.preventDefault();
        Datainfo.push({
            Name: emailValue,
            paswd: pwdValue,
            option: selectedOption
        });
        console.log(Datainfo); 
        setemailValue('');
        setpwdValue('');
        setselectedOption('');
    }

    const Checklog = (e) => {
        e.preventDefault();
        const obj = { Name : logemailValue, paswd: logpwdValue, option: logselectedOption}
        // console.log(obj);
        // console.log();
        if (Datainfo.filter(value => (value.Name == obj.Name && value.paswd == obj.paswd && obj.option == value.option )).length  > 0){
            console.log("True");
            return navigate('/',  {replace: true});
            // history('loan', from {'reg'})
        }
        else{
           alert("Please Sign Up");
        }

        setlogemailValue('');
        setlogpwdValue('');
    }
    
    return (
        <div>
             <div className="container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={Checklog}>
                        <input type="text" placeholder="Enter your email" value={logemailValue} onChange={e => setlogemailValue(e.target.value)} />
                        <input type="password" placeholder="Enter your password" value={logpwdValue} onChange={e => setlogpwdValue(e.target.value)} />
                        
                        <select value={logselectedOption} onChange={e => logsetselectedOption(e.target.value)}>
                            <option value="lender">Lender</option>
                            <option value="borrower">Borrower</option>
                        </select>
                        <input type="submit" className="button" value="Login" />

                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account?
                            <label htmlFor="check">Signup</label>
                        </span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Enter your email" value={emailValue} onChange={e => setemailValue(e.target.value)} />
                        <input type="password" placeholder="Create a password" value={pwdValue} onChange={e => setpwdValue(e.target.value)}/>
                        <input type="password" placeholder="Confirm your password" value={pwdValue} onChange={e => setpwdValue(e.target.value)} />
                        <select value={selectedOption} onChange={e => setselectedOption(e.target.value)}>
                            <option value="lender">Lender</option>
                            <option value="borrower">Borrower</option>
                        </select>
                        <input type="submit" className="button" value="Signup" />
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account?
                            <label htmlFor="check">Login</label>
                        </span>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Reg;