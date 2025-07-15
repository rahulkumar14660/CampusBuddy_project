import React from 'react'
import TopBar from './TopBar';
import EventToolbar from './EventToolbar';
import DropDown from './DropDown';
import Hero from './Hero';

function EventsPage() {
    return (
        <>
            <TopBar />
            <EventToolbar />
            <DropDown />
            <Hero />
        </>
    );
}

export default EventsPage;