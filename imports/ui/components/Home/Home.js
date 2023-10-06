import React from 'react';
import './home.css';
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
function Home() {
    return (
        <div>
            <div>
                <img src="https://eldorar.com/en/sites/default/files/field/image/loans.jpg" alt="image1" width="100%" height="500px" />
            </div>

            <div>
                <h1 className='home-head'><center>LENDER</center></h1>
                <div style={{ textAlign: "center" }}>
                    <img src="https://oxyloans.com/wp-content/themes/oxyloan/oxyloan/_ui/images/shape1.png" />
                </div>
                <div className="service-info">
                    <div className="service-content">
                        <div className="content-1">

                            <p>
                                Lenders on our platform can earn returns as high as 36% from individual tranches of investments. However we encourage them to diversify the risk by investing in multiple customers across different risk class such that risk remains low and returns are maximized, which in turn depends on the risk appetite of customers. The criteria for Lender on boarding too follows policies similar to those followed for Borrowers. It includes physical verification of location and income & expense statements.
                            </p>
                            <p>
                                All of these benefits, known as ecosystem services,
                                depend on a healthy environment.
                            </p>

                            <ul>
                                <li>
                                    <GiTakeMyMoney /> All Indian citizens are eligible.
                                </li>
                                <li><GiTakeMyMoney /> Lenders are free to choose their preferred Borrowers.</li>
                                <li><GiTakeMyMoney /> They can quote the rate of interest they want on their principal.</li>
                                <li><GiTakeMyMoney /> They can distribute the principal among Borrowers to minimize the risk.</li>
                            </ul>

                            <h1><center>LENDER CRITERIA</center></h1>
                            <div style={{ textAlign: "center" }}>
                                <img src="https://oxyloans.com/wp-content/themes/oxyloan/oxyloan/_ui/images/shape1.png" />
                            </div>

                            <ul>
                                <li>
                                    <FaRegMoneyBillAlt /> All Indian citizens are eligible.
                                </li>
                                <li><FaRegMoneyBillAlt /> Be over 21 years of age – Passport / Voter ID Card / Driving License.</li>
                                <li><FaRegMoneyBillAlt /> Be an Indian Citizen – Passport / Voter ID Card / Adhaar Card</li>
                                <li><FaRegMoneyBillAlt /> Holds a Valid Bank Account – Last 6 Months Bank Statement.</li>
                                <li><FaRegMoneyBillAlt /> Has Government of India recognized Identity Proof – as per KYC </li>
                                <li><FaRegMoneyBillAlt /> Has PAN Card</li>
                            </ul>

                        </div>

                        <div className="nature-img1">
                            <img width="70%" height="100%"
                                src="https://miro.medium.com/v2/resize:fit:1200/1*IrsY7pM5Hne2fZdqJ7jiyg.png" />
                        </div>

                        <h2 className='bo'><center>BORROWER</center></h2>
                        <div style={{ textAlign: "center" }}>
                            <img src="https://oxyloans.com/wp-content/themes/oxyloan/oxyloan/_ui/images/shape1.png" />
                        </div>
                        <p>

                            A borrower refers to an individual or business entity that receives a financial loan, asset, or service from a commercial lender on credit. They receive it on a pre-determined agreement on fixed tenure and repayment terms along with a necessary guarantee based on the debtors' credit score.
                        </p>
                        <p>
                            All of these benefits, known as ecosystem services,
                            depend on a healthy environment.
                        </p>

                        <ul>
                            <li>
                                <GiReceiveMoney /> Our focus in India is to enable P2P Loans, Indian Borrowers can avail only P2P loans.
                            </li>
                            <li><GiReceiveMoney /> Borrowers can negotiate with Lenders directly through OxyLoans platform about the interest rates, tenure, and repayment cycles.</li>
                            <li><GiReceiveMoney /> Our platform carefully screens each Borrower.</li>
                            <li><GiReceiveMoney /> Holds a Valid Bank Account – Last 6 Months Bank Statement.</li>
                            <li><GiReceiveMoney /> We encourage borrowers with valid documents. </li>

                        </ul>



                        <h1><center> BORROWERS ELIGIBILITY</center></h1>
                        <div style={{ textAlign: "center" }}>
                            <img src="https://oxyloans.com/wp-content/themes/oxyloan/oxyloan/_ui/images/shape1.png" />
                        </div>

                        <ul>
                            <li>
                                <FaRegMoneyBillAlt /> Only Indian Citizens are eligible.
                            </li>
                            <li><FaRegMoneyBillAlt /> Borrower must register your details on the website Oxyloans.com</li>
                            <li><FaRegMoneyBillAlt /> He/she must have valid Indian ID proof, valid Indian bank account.</li>
                            <li><FaRegMoneyBillAlt /> Holds a Valid Bank Account – Last 6 Months Bank Statement.</li>
                            <li><FaRegMoneyBillAlt /> Has Government of India recognized Identity Proof – as per KYC </li>
                            <li><FaRegMoneyBillAlt /> Has PAN Card</li>
                        </ul>
                    </div>

                    <div className="nature-img1">
                        <img width="100%" height="60%"
                            src="https://media.istockphoto.com/id/1306417458/vector/businessman-getting-credit-from-bank-flat-vector-illustration-loan-agreement-banker-and.jpg?s=612x612&w=0&k=20&c=t6LVYS6wjZ3joDbUtn4cD0vpEK41TNMyjG6_DhWvamc=" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;