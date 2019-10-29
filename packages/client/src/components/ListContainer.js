import React, { useContext } from 'react';
import { DashContext } from './Dashboard';

export default () => {
  const _DashContext = useContext(DashContext);
  const user = _DashContext.user;
  return (
    <div className="list-title">
      List
      { user && user.lists.map((l, index) => {
        const isSelected = index === 0;
        const selectedClass = (isSelected) ? "list-container__selected" : "list-container"
        const itemSelectedClass = (isSelected) ? "list-item__selected" : "list-item"
        return (
          <div className={selectedClass} key={`listItem_${index}`}>
            <div className={itemSelectedClass}>&#10005;</div>
            <div className={itemSelectedClass}>
              <strong>{l.name}</strong>
            </div>
            <div className={itemSelectedClass}>{l.tasks.length} Tasks</div>
          </div>
        )
      })}
      <div className="list-container__add">
        <button className='list-add'>+</button>
      </div>
    </div>
  );
};
