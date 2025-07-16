import React from 'react'
import Hero from './Hero'
import Events from './Events'
import DashBoardNavbar from './DashBoardNavbar';

function DashboardPage() {
    return (
        <>
            <DashBoardNavbar />
            <Events />
            <Hero />
        </>
    );
}

export default DashboardPage;