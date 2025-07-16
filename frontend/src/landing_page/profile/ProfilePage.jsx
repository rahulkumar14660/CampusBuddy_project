import React from 'react'
import ProfileNavbar from './ProfileNavbar';
import ProfileDetails from './ProfileDetails';
import PrfileData from './ProfileData';
import Achievements from './Achievements';
import RecentActivities from './RecentActivities';

function ProfilePage() {
    return (
        <>
            <ProfileNavbar />
            <ProfileDetails />
            <PrfileData />
            <Achievements />
            <RecentActivities />
        </>
    );
}

export default ProfilePage;