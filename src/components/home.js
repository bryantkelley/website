import React from 'react';

export default function Home() {
  const modifers = ['terrible', 'horrible', 'no good', 'very bad'];
  const randomNumber = Math.floor(Math.random() * modifers.length);
  return (
    <>
      <div className="mt-5 neumorph-card">
        <h1>Hi, I'm Bryant.</h1>
      </div>
      <div className="mt-5 neumorph-card">
        <h2>I'm a software engineer.</h2>
      </div>
      <div className="mt-5 neumorph-card">
        <h3>This is my <code>{modifers[randomNumber]}</code> website.</h3>
      </div>
    </>
  );
}
