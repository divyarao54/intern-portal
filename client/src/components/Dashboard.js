import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import DashboardImage from '../assets/dashboard-img.png'
import NameImage from '../assets/name-img.png';
import ReferralImage from '../assets/referral-img.png';
import DonationImage from '../assets/donation-img.png';
import LeaderboardIcon from '../assets/leaderboard-icon.png';
import BeginnerReward from '../assets/beginner-reward.png';
import LockedReward from '../assets/locked-reward.png';
import YellowDiamond from '../assets/yellow-diamond.gif'
import '../styles/dashboard.css';
import config from '../config';


const Dashboard = () => {
    const { referralCode } = useParams();
    const [intern, setIntern] = useState(null);

    useEffect(() => {
    const fetchIntern = async () => {
        try {
            const res = await axios.get(`${config.API_URL}/api/intern/${referralCode}`);
            setIntern(res.data);
        } catch (err) {
            console.error('Error fetching intern:', err.message);
        }
        };

        fetchIntern();
    }, [referralCode]);

    if (!intern) return <p>Loading...</p>;

    return (
        <div>
            <img src={DashboardImage} alt='dashboard-image' className='dashboard-image'/>
            <div className='dashboard-container'>
                <div className='dashboard-title'>Intern Dashboard</div>
                <div className='dashboard-cards'>
                    <div className='dashboard-card'>
                        <div className='dashboard-card-title'>Name:</div> 
                        <div className='dashboard-card-img'>
                            <img src={NameImage} className='name-icon' alt='name-icon'/>
                        </div>
                        <div className='dashboard-card-value'>{intern.name}</div>
                    </div>
                    <div className='dashboard-card'>
                        <div className='dashboard-card-title'>Referral Code:</div> 
                        <div className='dashboard-card-img'>
                            <img src={ReferralImage} className='referral-icon' alt='referral-icon'/>
                        </div>
                        <div className='dashboard-card-value'>{intern.referralCode}</div>
                    </div>
                    <div className='dashboard-card'>
                        <div className='dashboard-card-title'>Total Donations:</div>
                        <div className='dashboard-card-img'>
                            <img src={DonationImage} className='donation-icon' alt='donation-icon'/>
                        </div> 
                        <div className='dashboard-card-value'>₹{intern.donations}</div>
                    </div>
                </div>
                <div className='reward-section'>
                    <div className='reward-title'>Rewards & Unlockables</div>
                    <div className='reward-cards'>
                        <div className='reward-card-unlocked'>
                            <div className='reward-card-title'>
                                <div className='reward-card-title-1' style={{color: "#1B2A2D"}}>Current Tier -&nbsp;</div><div className='reward-card-title-2' style={{color: '#F7A05E'}}>Beginner</div>
                            </div>
                            <div className='reward-img-container'>
                                <img src={YellowDiamond} className='yellow-diamond'/>
                            </div>
                            <div className='reward-donations'>0 Donations</div>
                        </div>
                        <div className='reward-card-locked'>
                            <div className='reward-card-title'>
                                <div className='reward-card-title-1'>Current Tier -&nbsp;</div><div className='reward-card-title-2'>Growing</div>
                            </div>
                            <div className='reward-img-container'>
                                <img src={LockedReward} alt='locked-reward-img' className='reward-img'/>
                            </div>
                            <div className='reward-donations-locked'>Unlocks at 50 Donations</div>
                        </div>
                        <div className='reward-card-locked'>
                            <div className='reward-card-title'>
                                <div className='reward-card-title-1'>Current Tier -&nbsp;</div><div className='reward-card-title-2'>Intermediate</div>
                            </div>
                            <div className='reward-img-container'>
                                <img src={LockedReward} alt='locked-reward-img' className='reward-img'/>
                            </div>
                            <div className='reward-donations-locked'>Unlocks at 150 Donations</div>
                        </div>
                        <div className='reward-card-locked'>
                            <div className='reward-card-title'>
                                <div className='reward-card-title-1'>Current Tier -&nbsp;</div><div className='reward-card-title-2'>Pro</div>
                            </div>
                            <div className='reward-img-container'>
                                <img src={LockedReward} alt='locked-reward-img' className='reward-img'/>
                            </div>
                            <div className='reward-donations-locked'>Unlocks at 350 Donations</div>
                        </div>
                        <div className='reward-card-locked'>
                            <div className='reward-card-title'>
                                <div className='reward-card-title-1'>Current Tier -&nbsp;</div><div className='reward-card-title-2'>Advanced</div>
                            </div>
                            <div className='reward-img-container'>
                                <img src={LockedReward} alt='locked-reward-img' className='reward-img'/>
                            </div>
                            <div className='reward-donations-locked'>Unlocks at 550 Donations</div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-btn-container'>
                    <Link to={`/leaderboard/${referralCode}`}>
                        <button className='dashboard-btn'><img className="btn-icon" src={LeaderboardIcon} alt='leaderboard-icon'/>&nbsp;&nbsp;Leaderboard</button>
                    </Link>
                </div>
            </div>        
        </div>
    );
};

export default Dashboard;