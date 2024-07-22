// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SideBar from "./Pages/SideBar";
import { setData } from './Slices/DataSlice';
import DataShow from "./Pages/Datashow"


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://test.api.boxigo.in/sample-data/');
        const data = await response.json();
        dispatch(setData(data.Customer_Estimate_Flow));
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white  flex nunito-sans w-screen h-full' >
      <SideBar />
      <div className='w-[calc(100%-90px)] ml-[30px]' >
        
        <DataShow />
      </div>
    </div>
  );
};

export default App;
