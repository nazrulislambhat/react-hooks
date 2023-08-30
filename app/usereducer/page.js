'use client';
import React from 'react';
import { useReducer } from 'react';
import Link from 'next/link';
export default function ReducerHook() {
  return (
    <div className="min-h-screen  flex flex-col items-center text-center p-24">
      <h1 className="font-bold text-3xl">useReducer</h1>
      <Link
        href="/"
        className="bg-[#CFEE9E] px-8 py-4 font-bold rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
      >
        Home
      </Link>
    </div>
  );
}
