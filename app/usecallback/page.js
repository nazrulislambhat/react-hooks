'use client';
import React from 'react';
import { useCallback } from 'react';
import Link from 'next/link';
export default function CallbackHook() {
  return (
    <div className="min-h-screen  flex flex-col items-center text-center p-24">
      <h1 className="font-bold text-3xl">useCallback</h1>
      <Link
        href="/"
        className="bg-[#0D0630] px-8 py-4 font-bold rounded-lg border-2 border-[#E6F9AF] text-[#E6F9AF] hover:underline hover:bg-[#E6F9AF] hover:text-[#0D0630] hover:border-[#0D0630]"
      >
        Home
      </Link>
    </div>
  );
}
