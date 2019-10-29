import React, { useContext } from 'react';
import { DashContext } from './Dashboard';

export default () => {
  const _DashContext = useContext(DashContext);
  const { user, selectedList, setSelectedList } = _DashContext;
  return (
    <div className="task-title">
      Tasks for Selected Event
      <div className="task-container">
        <div className="task-date">Monday, April 27</div>
        <button className="add-task__button">Add Task</button>
        <>
          {user &&
            user.lists
              .find((l) => l.id === selectedList).tasks
              .map((t) => (
                <div className="task-item">
                  {/* <input
              className="task-item__title"
              placeholder='Some Task'
              type="text" /> */}
                  <span>{t.name}</span>
                  <p className="task-item__info">{t.description}</p>)
                </div>
              ))}
        </>
      </div>
    </div>
  );
};
