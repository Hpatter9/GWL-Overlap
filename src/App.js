import React from 'react';
import Layout from './components/layout/Layout';
import Pages from './Pages/Pages';
import Homepage from './Pages/homepage/Homepage';
import Calendar from './Pages/calendar/Calendar';
import'./App.css';
import {Route, Routes} from "react-router-dom";
import TravelPlans from './Pages/travelplans/Travelplans';

const App =()=> {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path = {Pages.get('homepage').path} element={<Homepage />} />
          <Route path = {Pages.get('calendar').path} element={<Calendar />} />
          <Route path = {Pages.get('travelplans').path} element={<TravelPlans />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App