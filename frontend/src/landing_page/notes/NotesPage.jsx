import React from 'react'
import TopBar from './TopBar';
import DropDown from './DropDown';
import StatsRow from './StatsRow';
import Hero from './Hero';
import NotesNavbar from './NotesNavbar';

function EventsPage() {
    return (
        <>
            <NotesNavbar />
            <TopBar />
            <DropDown />
            <StatsRow />
            <Hero />
        </>
    );
}

export default EventsPage;