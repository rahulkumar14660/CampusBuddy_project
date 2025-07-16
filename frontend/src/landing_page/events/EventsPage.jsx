import React from 'react'
import TopBar from './TopBar';
import EventToolbar from './EventToolbar';
import DropDown from './DropDown';
import Hero from './Hero';
import EventsNavbar from './EventsNavbar';

function EventsPage() {
    return (
        <>
            <EventsNavbar />
            <TopBar />
            <EventToolbar />
            <DropDown />
            <Hero />
        </>
    );
}

export default EventsPage;