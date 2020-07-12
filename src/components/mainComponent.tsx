
import React from 'react';
import LeftContent from './leftComponent';
import RightContent from './rightComponent';
import '../scss/mainComponent.scss';

function MainComponent() {

    return (
      <div className="main-component">
       <LeftContent></LeftContent>
       <RightContent></RightContent>
      </div>
    );

}

export default MainComponent;