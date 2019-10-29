import React from 'react';

export default () => (
  <div className="list-title">
    List
    <div className="list-container">
      <div className="list-item">&#10005;</div>
      <div className="list-item">
        <strong>This is a List Item</strong>
      </div>
      <div className="list-item">35 Tasks</div>
      <div className="list-item">Due 11/95</div>
    </div>
    <div className="list-container">
      <div className="list-item">&#10005;</div>
      <div className="list-item">
        <strong>This is a List Item</strong>
      </div>
      <div className="list-item">35 Tasks</div>
      <div className="list-item">Due 11/95</div>
    </div>
    <div className="list-container__selected">
      <div className="list-item__selected">&#10005;</div>
      <div className="list-item__selected">
        <strong>Selected Event</strong>
      </div>
      <div className="list-item__selected">4 Tasks</div>
      <div className="list-item__selected">Due 12/27</div>
    </div>
    <div className="list-container__add"></div>
  </div>
);
