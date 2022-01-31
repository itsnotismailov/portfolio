import React from 'react';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'> 
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.facebook.com/profile.php?id=100040691171083' target="_blank~">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.youtube.com/watch?v=ilw_g_rxtVc'>
                            <i className='fa fa-google-plus-square'></i>
                        </a> 
                        <a href='https://www.youtube.com/watch?v=ilw_g_rxtVc'>
                            <i className='fa fa-instagram'></i>
                        </a> 
                        <a href='https://www.youtube.com/watch?v=ilw_g_rxtVc'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primart-text'>
                                {" "}
                                Привет, я <span className='highlighted-text'>Ислам</span> 
                        </span> 
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>                            </h1>
                        </span>
                    </div>
                </div>
            </div> 
        </div>
    );
};


export default Profile;