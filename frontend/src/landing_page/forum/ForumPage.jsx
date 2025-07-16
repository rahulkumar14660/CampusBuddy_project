import React from 'react'
import TopBar from './TopBar';
import DropDown from './DropDown';
import StatsRow from './StatsRow';
import Hero from './Hero';
import ForumNavbar from './ForumNavbar';

function NotesPage() {
    return (
        <>
            <ForumNavbar />
            <TopBar />
            <DropDown />
            <StatsRow />
            <Hero />
        </>
    );
}

export default NotesPage;