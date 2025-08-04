import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/leaderboard.css"
import LeaderboardImage from "../assets/dashboard-img.png";
import DashboardIcon from "../assets/dashboard-icon.png";

const Leaderboard = () => {
    const { referralCode } = useParams();
    const [intern, setIntern] = useState(null);

    useEffect(() => {
    const fetchIntern = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/intern/${referralCode}`);
            setIntern(res.data);
        } catch (err) {
            console.error('Error fetching intern:', err.message);
        }
        };

        fetchIntern();
    }, [referralCode]);
    return(
        <div className="leaderboard-page">
            <img src={LeaderboardImage} alt="leaderboard-image" className="leaderboard-img"/>
            <div className="leaderboard-container">
                <div className="leaderboard-title">Leaderboard</div>

                <div className="leaderboard-headings">
                    <div className="leaderboard-heading-item">Leaderboard Position</div>
                    <div className="leaderboard-heading-item">Name</div>
                    <div className="leaderboard-heading-item">Position</div>
                    <div className="leaderboard-heading-item">Donations</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">1.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">2.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">3.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">4.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">5.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">6.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">7.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">8.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>

                <div className="leaderboard-items">
                    <div className="leaderboard-item">9.</div>
                    <div className="leaderboard-item">John Doe</div>
                    <div className="leaderboard-item">Intern</div>
                    <div className="leaderboard-item">567</div>
                </div>  

                <Link to={`/dashboard/${referralCode}`} style={{textDecoration: 'none'}}>
                    <button className='leaderboard-btn'><img className="dashboard-btn-icon" src={DashboardIcon} alt='dashboard-icon'/>Dashboard</button>
                </Link>      
            </div>
        </div>
    )
}

export default Leaderboard;