import React from 'react';

const DrawerToggle = (props) => (
    <div className="md:hidden w-6 h-min flex flex-col justify-around items-center gap-1 
      pt-0.5 pb-0.5 box-border cursor-pointer bg-white border-2" onClick={props.clicked}>
        <div className='drawerToggleDiv'></div>
        <div className='drawerToggleDiv'></div>
        <div className='drawerToggleDiv'></div>
    </div>
);

export default DrawerToggle;