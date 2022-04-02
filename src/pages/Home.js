import React from 'react';
import Mainpanel from '../components/Mainpanel';
import './style.css'
import StoreMerchcount from '../components/StoreMerchcount';
import Appliedcount from '../components/Appliedcount';


function Home() {
  return (
    <div className='home'>
      <Mainpanel className="mainpanel">

      </Mainpanel>
     
    
      <StoreMerchcount/>
    
      <Appliedcount/>
     
     
    </div>


    
  );
}

export default Home;
