import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './landing_page/home/HomePage'
import SignUpPage from './landing_page/signup/SignUpPage';
import LoginPage from './landing_page/login/LoginPage';
import DashboardPage from './landing_page/dashboard/DashboardPage';
import EventsPage from './landing_page/events/EventsPage';
import ForumPage from './landing_page/forum/ForumPage';
import NotesPage from './landing_page/notes/NotesPage';
import NotificationsPage from './landing_page/notifications/NotificationsPage';
import ProfilePage from './landing_page/profile/ProfilePage';
import DoubtPage from './landing_page/doubts/DoubtPage';

import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/doubts" element={<DoubtPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;