import React from 'react';

export default () => (
  <div className="task-title">
    Tasks for Selected Event
    <div className="task-container">
      <div className="task-date">Monday, April 27</div>
      <button className="add-task__button">Add Task</button>
      <div className="task-item">
        <div className="task-item__title">Some Task</div>
        <div className="task-item__time">10:00 AM - 11:00 AM</div>

        <p className="task-item__info">
          Bacon ipsum dolor sit, amet consectetur adipisicing elit. Facere quia
          corrupti quo, illo culpa quaerat perspiciatis earum tempora provident
          distinctio debitis architecto libero. Excepturi ea ducimus aliquid
          vitae sequi ipsam pork belly.
        </p>
      </div>
    </div>
  </div>
);
