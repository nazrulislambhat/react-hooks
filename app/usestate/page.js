'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
export default function StateHook() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen min-w-screen gap-24 flex flex-col items-center text-center p-24">
      <h1 className="font-bold text-3xl">useState</h1>
      <div className="border-2 border-black rounded-md flex flex-row gap-8 p-8 relative justify-between items-start">
        <sup className="font-bold text-red-500 text-xl absolute left-0 -top-8">
          Functionality:
        </sup>
        <h2 className="">You clicked {count} times</h2>
        <button onClick={() => setCount(count + 1)} className="underline">
          Click me
        </button>
      </div>
      <div className="border-2 p-8 relative border-black rounded-md">
        <sup className="font-bold text-red-500 text-2xl absolute left-0 -top-8">
          Notes:
        </sup>
        <p className="text-base">
          Before using <b>useState</b> we have to import it at the top of our
          component. We call <b>useState</b> inside a function component to add
          some local state to it. React will preserve this state between
          re-renders. <b>useState</b> returns a pair, currentValue & a function
          that lets you update that value. You can call this function from an
          event handler or somewhere else. The only argument to <b>useState</b>{' '}
          is the initial state which in our case is 0.{' '}
          <em>const [state, setState] = useState(initialState);</em>
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
