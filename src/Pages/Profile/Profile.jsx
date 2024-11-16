import React, { useState } from 'react';
import ProfileImg from '../../Images/avatar.png'
import './Profile.css'

const Profile = () => {

    const [notification, setNotification] = useState(false)
    const openNotification = () => {
        setNotification(x => !x)
    }

    const data = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        teacherName: "Xoldorova Nafisa",
        courseCount: 12,
        studentCount: 500,
        coursesCompleted: 92,
        coursesNotCompleted: 92,
        certificatesIssued: "2 ta",
        certificatesPending: "2 ta"
    }));

    console.log(data);


    return (
        <div className='profile'>
            <div className="notifications">
                <i class="ri-notification-fill"></i>
                <button onClick={openNotification} className="notification-btn">Notifications <span className="messeges">15</span></button>
                {
                    notification && (
                        <div className="drapdown">
                            <button onClick={openNotification} className="lesson-confirm">Darslarni tasdiqlash</button>
                            <button onClick={openNotification} className="lesson-confirm">Shikoyatlar</button>
                        </div>
                    )
                }
            </div>
            <div className='profile-right'>
                <div className="profile-info">
                    <div className="profile-title">
                        <h3 className="profile-name">Azizov Aziz</h3>
                        <p className="profile-mentor">O'qituvchi</p>
                    </div>
                    <img src={ProfileImg} alt="Profile image" className="profile-img" />
                </div>
                <div className="language-block">
                    <i class="ri-earth-line"></i>
                    <select className="select-lenguage">
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Profile;
