import React from 'react';

const Grudge = React.memo(({ grudge, onForgive }) => {
  const forgive = () => onForgive(grudge.id);
  console.log(`rendering ${grudge.id} ${grudge.person}`);

  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
          Forgiven
        </label>
      </div>
    </article>
  );
});

export default Grudge;
