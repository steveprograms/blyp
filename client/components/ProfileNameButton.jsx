import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const ProfileName = ({ changeName }) => (
  <div className={index.updateButton +" "+material.wavesEffect+" "+material.wavesLight+" "+material.btn} onClick={changeName}>
    UPDATE
  </div>
);

export default ProfileName;
