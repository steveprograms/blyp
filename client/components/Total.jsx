import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

export default ({ total }) => (
  <div className={index.total}>
    Total: $ {total}
  </div>
)
