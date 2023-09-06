'use client';
import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
export default function ContextHook() {
  return (
    <div className="min-h-screen flex flex-col items-center text-left p-6 sm:p-12">
      <h1 className="font-bold text-3xl">useContext</h1>
      <br />
      <br />
      <h2 className="font-bold text-xl">What is useContext? </h2>
      <p>
        In React, useContext is a hook that allows you to access data or state
        from a context object without having to pass it through component props.
        It simplifies the process of sharing data between components in a
        tree-like structure.
      </p>{' '}
      <br />
      <br />
      <h2 className="font-bold text-xl">Why do we need useContext?</h2>
      <p>
        In large React applications, passing data down through component props
        can become cumbersome and lead to prop drilling, where you pass data
        through many intermediate components that don`t actually use the data.
        useContext helps solve this problem by allowing you to access shared
        data directly without going through all those intermediary components.
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
