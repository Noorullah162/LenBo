import React, { useState } from 'react';
import './reg.css';
// import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import Datainfo from '../DataInfo/DataInfo';
import { useNavigate } from 'react-router-dom';
import { studentCollection } from '../../../api/links';
import { FaUserCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useTracker } from 'meteor/react-meteor-data';
import { useFind } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

function Reg({ updateRegIcon, a }) {
    const [logedIn, setlogedIn] = useState(false);
    const [nameValue, setnameValue] = useState('');
    const [ageValue, setageValue] = useState('');
    const [emailValue, setemailValue] = useState('');
    const [pwdValue, setpwdValue] = useState('');
    const [logemailValue, setlogemailValue] = useState('');
    const [logpwdValue, setlogpwdValue] = useState('');
    const [selectedOption, setselectedOption] = useState("lender");
    const [genderOption, setgenderOption] = useState("Gender");
    const [logselectedOption, logsetselectedOption] = useState("lender");
    var [infoValue, setinfoValue] = useState({});
    const navigate = useNavigate();

    var val = {};
    const tempdata = { Name: '', option: '', login: false }
    localStorage.setItem('userValue', JSON.stringify(tempdata));

    const { loading, infor } = useTracker(() => {
        const handle = Meteor.subscribe('sample.all');
        return {
            loading: !handle.ready(),
            infor: studentCollection.find().fetch()
        };
    });


    // const isLoading = useSubscribe('links');
    // const links = useFind(() => studentCollection.find());
    // const history = useHistory();
    const SubmitHandler = (e) => {
        e.preventDefault();
        Datainfo.push({
            Name: emailValue,
            paswd: pwdValue,
            option: selectedOption
        });

        const mydata = {
            name: nameValue,
            email: emailValue,
            pwd: pwdValue,
            option: selectedOption,
            age: ageValue,
            gender: genderOption
        }

        Meteor.call('sample.insert', mydata, (error) => {
            if (!error) {
                // Clear the input field on success
                setemailValue('');
                setpwdValue('');
                setselectedOption('');

            } else {
                // Handle error
                console.error("hello", error.reason);
            }
        });

    }


    // const l = studentCollection.find().fetch();

    const logout = (e) => {
        e.preventDefault();
        setlogedIn(false);
        updateRegIcon(<span> <span>  <FiLogIn style={{ fontSize: '20px' }} /> </span> <span> Sigin/Login </span> </span>);
    }
    var obj = {};
    var email = 'a';
    const Checklog = (e) => {
        e.preventDefault();
        console.log(logemailValue, logpwdValue);
        obj = { Name: logemailValue, option: logselectedOption, login: true }
        // console.log(obj);
        // console.log();
        // if (Datainfo.filter(value => (value.Name == obj.Name && value.paswd == obj.paswd && obj.option == value.option)).length > 0) {
        //     console.log("True");
        //     return navigate('/', { replace: true });
        //     // history('loan', from {'reg'})
        // }
        // else {
        //     alert("Please Sign Up");
        // }

        val = infor.filter(value => (value.email == logemailValue && value.pwd == logpwdValue && value.option == logselectedOption))
        console.log("infor", infor);
        console.log("retrive", val);

        if (val.length > 0) {
            localStorage.setItem('loginUserValue', JSON.stringify(val));
            console.log('user before', localStorage.getItem('userValue'));
            localStorage.setItem('userValue', JSON.stringify(val));
            console.log('user after', localStorage.getItem('userValue'));

            setlogedIn(true);
            // setinfoValue(val);
            // infoValue = val;
            setinfoValue(val);
            // console.log("InfoValue ",infoValue);
            // console.log(infoValue[0].name, infoValue[0].email, infoValue[0].age);
            // console.log(a);
            console.log(logedIn);
            if (!logedIn) {
                console.log("reg called");
                updateRegIcon(<FaUserCircle style={{ fontSize: "30px" }} />)
                console.log(a);
            }
            email = logemailValue;


        }


        // setlogemailValue('');
        // setlogpwdValue('');
    }

    return (

        !logedIn ?
            <div>
                <div className="container">
                    <input type="checkbox" id="check" />
                    <div className="login form">
                        <header>Login</header>
                        <form onSubmit={Checklog}>
                            <input type="email" placeholder="Enter your email" value={logemailValue} onChange={e => setlogemailValue(e.target.value)} />
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
                            <input type="text" placeholder="Enter your Name" value={nameValue} onChange={e => setnameValue(e.target.value)} />
                            <input type="email" placeholder="Enter your email" value={emailValue} onChange={e => setemailValue(e.target.value)} />
                            <input type="password" placeholder="Create a password" value={pwdValue} onChange={e => setpwdValue(e.target.value)} />
                            <input type="password" placeholder="Confirm your password" value={pwdValue} onChange={e => setpwdValue(e.target.value)} />
                            <select value={selectedOption} onChange={e => setselectedOption(e.target.value)}>
                                <option value="lender">Lender</option>
                                <option value="borrower">Borrower</option>
                            </select>

                            <select value={genderOption} onChange={e => setgenderOption(e.target.value)}>
                                <option value="Gender">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <input type="text" placeholder="Enter your Age" value={ageValue} onChange={e => setageValue(e.target.value)} />

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

            :

            <div>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>Name : {infoValue[0].name} </h4>
                            <h4 className='card-title'>Email : {infoValue[0].email} </h4>
                            <h4 className='card-title'>User : {infoValue[0].option} </h4>
                            <h4 className='card-title'>Gender : {infoValue[0].gender} </h4>
                            <h4 className='card-title'>Age : {infoValue[0].age} </h4>
                            {/* <h4 className='card-title'>Name : {infoValue[0].name} </h4>
                            <h4 className='card-title'>Name : {infoValue[0].name} </h4> */}
                            <input type="submit" className="btn btn-warning" value="Logout" onClick={logout} />
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Reg;