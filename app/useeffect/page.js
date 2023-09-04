'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
export default function EffectHook() {
  return (
    <div className="min-h-screen  flex flex-col items-center text-center  p-24">
      <h1 className="font-bold text-3xl">useEffect</h1>
      <p>
        <em>React Lifecycle Methods for Class Components:</em> In 2018 react hooks were introduced with the rise of functional components, these hooks provided a simple and preffered way for handelling state. Before 2018, all the react code was written with class-based components. All these class-based components used react lifecycle methoda for state management. <em>Class components</em> rely on life cyscle methods for performing tasks such as state management, and calling external APIs. To a beginner, these can look complex. React Hooks rely on these methods in the background and give the developers an abstract way of manage state, call APIs etc.
      </p>
      <p>
        <em>The core concept of useEffect Hook:</em> What are effects? 1: fetching
        data 2: reading from local storage 3: registering and deregistering
        event listeners. React`s effects are a completely different animal than
        the lifecycle method of class-based components. The abstraction level
        differs too.
      </p>
      <Link
        href="/"
        className="bg-[#0D0630] px-8 py-4 font-bold rounded-lg border-2 border-[#E6F9AF] text-[#E6F9AF] hover:underline hover:bg-[#E6F9AF] hover:text-[#0D0630] hover:border-[#0D0630]"
      >
        Home
      </Link>
    </div>
  );
}
