import React from 'react'
import TopBar from './TopBar';
import DropDown from './DropDown';
import Hero from './Hero';
import NotificationsNavbar from './NotificationsNavbar';

function NotesPage() {
    return (
        <>
            <div className="pb-5">
                <NotificationsNavbar />
                <TopBar />
                <DropDown />
                <Hero />
            </div>
        </>
    );
}

export default NotesPage;