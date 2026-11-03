import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './Pages/home.jsx';

import AboutPage from './Pages/About/about.jsx';
import ClassInformation from './Pages/About/class-information.jsx';
import ClassTypes from './Pages/About/class-types.jsx';
import AboutTeacher from './Pages/About/about-teacher.jsx';
import ClassVenue from './Pages/About/class-venue.jsx';

import ClassSchedule from './Pages/Schedule/class-schedule.jsx';
import AnnualSchedule from './Pages/Schedule/annual-schedule.jsx';
import MoonDays from './Pages/Schedule/moon-days.jsx';

import WhatAshtanga from './Pages/what-ashtanga.jsx';
import OurSequence from './Pages/our-sequence.jsx';
import NewToAshtanga from './Pages/new-to-ashtanga.jsx';
import LoginPage from './Pages/admin/login.jsx';

import GettingStarted from './Pages/GettingStarted/getting-started.jsx';
import IntakeForm from './Pages/GettingStarted/intake-form.jsx';
import FormSent from './Pages/GettingStarted/form-sent.jsx';

import Admin from './Pages/admin/admin.jsx';
import BatchMoonDays from './Pages/admin/batch-moon-days.jsx';

import './styles/App.css'
import './styles/banner.css';
import './styles/widgets.css';
import ProtectedRoute from './utils/protected-route';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/class-information" element={<ClassInformation />} />
      <Route path="/about-teacher" element={<AboutTeacher />} />

      <Route path="/annual-schedule" element={<AnnualSchedule />} />
      
      <Route path="/class-venue" element={<ClassVenue />} />  
      <Route path="/class-types" element={<ClassTypes />} />  
          

      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/moon-days" element={<MoonDays />} />

      
      <Route path="/ashtanga" element={<WhatAshtanga />} />
      <Route path="/new-to-ashtanga" element={<NewToAshtanga />} />
      <Route path="/our-sequence" element={<OurSequence />} />      

      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="/intake-form" element={<IntakeForm />} />
      <Route path="/form-sent" element={<FormSent />} />
      
      
      <Route path="/admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
        } /> 
      <Route path="/batch-moon-days" element={
        <ProtectedRoute>
          <BatchMoonDays />
        </ProtectedRoute>
        } />         

    </Routes>
  </BrowserRouter>,
);
