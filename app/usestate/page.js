'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function StateHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');
  const [liked, setLiked] = useState(true);
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleCheckboxChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <div className="min-h-screen min-w-screen gap-24 flex flex-col items-center text-center p-24">
      <h1 className="font-bold text-3xl">useState</h1>
      {/* Form Two Variables Changing */}
      <div className="border-2 border-black rounded-md flex flex-row gap-8 p-8 relative justify-between  items-center">
        <sup className="font-bold text-red-500 text-xl absolute left-0 -top-8">
          Two Variables Changing Form:
        </sup>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <button onClick={() => setAge(age + 1)} className="click">
          Increment age
        </button>
        <p>
          Hello, {name}. You are {age}.
        </p>
      </div>

      {/* Checkbox Example */}
      <div className="border-2 border-black rounded-md flex flex-row gap-8 p-8 relative justify-between  items-center">
        <sup className="font-bold text-red-500 text-xl absolute left-0 -top-8">
          Checkbox:
        </sup>
        <label>
          <input
            type="checkbox"
            checked={liked}
            onChange={handleCheckboxChange}
            className="check flex items-center flex-row"
          />
          I liked this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
      </div>

      {/* Text Field Example */}
      <div className="border-2 border-black rounded-md flex flex-row gap-8 p-8 relative justify-between  items-center">
        <sup className="font-bold text-red-500 text-xl absolute left-0 -top-8">
          Text Field:
        </sup>
        <input value={text} onChange={handleTextChange} className="input" />
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')} className="click">
          Reset
        </button>
      </div>
      {/* Count Example */}
      <div className="border-2 border-black rounded-md flex flex-row gap-8 p-8 relative justify-between items-center">
        <sup className="font-bold text-red-500 text-xl absolute left-0 -top-8">
          Count:
        </sup>
        <h2 className="">
          You clicked <b>{count} </b>times
        </h2>
        <button onClick={() => setCount(count + 1)} className="click">
          Click me
        </button>
      </div>

      <div className="border-2 p-8 relative border-black rounded-md">
        <sup className="font-bold text-red-500 text-2xl absolute left-0 -top-8">
          Notes:
        </sup>
        <p className="text-xl text-left">
          Before using <b>useState</b> we have to import it at the top of our
          component. We call <b>useState</b> inside a function component to add
          some local state to it. React will preserve this state between
          re-renders. <b>useState</b> returns a pair, currentValue & a function
          that lets you update that value. You can call this function from an
          event handler or somewhere else. The only argument to <b>useState</b>{' '}
          is the initial state which in our case is 0.{' '}
          <em>const [state, setState] = useState(initialState);.</em>{' '}
          <em>initialState</em> The value you want the state to be initially. It
          can be a value of any type, but there is a specail behaviour for
          functions. <em>This argument is ignored after initial render</em> If
          you pass a function as <em>initialState</em>, it will be treated as an{' '}
          <em>initilizer function</em>. It should be a pure, function when
          initilizing the component, ans store its return value as the initial
          state.
          <br />
          <br />
          <b>Returns:</b>
          <em> useState</em> returns an array with exactely two values:
          <br />
          <br />
          <span>
            The current state. During the first render, it will match the
            initial state you have passed.
            <br /> The set function that lets you update the state to a
            different value and trigger a re-render
          </span>
          <br />
          <br />
          <b>Caveats:</b>
          <br />
          <br />
          <span>
            <em>useState</em> is a hook, so you can only call it{' '}
            <b>at the top level of your component</b> or your own Hooks. You
            can`t call inisde loops or conditions. If you need that, extract a
            new component and move the state into it. <br /> In Strict Mode,
            React will <em>call your initilizer function twice</em> in order to
            help find accidental impurities. This is development-only behaviour
            and does not affect production. If your initilizer function is pure
            `as it should be`, this should not affect the behaviour. The result
            from one of the calls will be ignored.
          </span>
          <br />
          <br />
          <b>Updating state based on the previous state</b> Suppose the age is
          42. This handler calls setAge(age + 1) three times: However, after one
          click, age will only be 43 rather than 45! This is because calling the
          set function does not update the age state variable in the already
          running code. So each setAge(age + 1) call becomes setAge(43). To
          solve this problem, you may pass an updater function to setAge instead
          of the next state: <b>a =&gt; a + 1 </b>is your updater function. It
          takes the pending state and calculates the next state from it. React
          puts your updater functions in a queue. Then, during the next render,
          it will call them in the same order: a =&gt; a + 1 will receive 42 as
          the pending state and return 43 as the next state. a =&gt; a + 1 will
          receive 43 as the pending state and return 44 as the next state. a
          =&gt; a + 1 will receive 44 as the pending state and return 45 as the
          next state. There are no other queued updates, so React will store 45
          as the current state in the end. By convention, it`s common to name
          the pending state argument for the first letter of the state variable
          name, like a for age. However, you may also call it like prevAge or
          something else that you find clearer. React may call your updaters
          twice in development to verify that they are pure.
          <br />
          <br />
        </p>
      </div>
      <Link
        href="/"
        className="bg-[#0D0630] px-8 py-4 font-bold rounded-lg border-2 border-[#E6F9AF] text-[#E6F9AF] hover:underline hover:bg-[#E6F9AF] hover:text-[#0D0630] hover:border-[#0D0630]"
      >
        Home
      </Link>
    </div>
  );
}
