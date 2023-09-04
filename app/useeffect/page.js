'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FadeInAnimation } from './animation.js';

export default function EffectHook() {
  const ref = useRef(null);
  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center text-left  p-12">
      <h1
        ref={ref}
        className="rounded-2xl opacity-100 text-white p-48 text-center text-[120px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(10,167,255,1) 0%, rgba(0,5,93,1) 100%);',
        }}
      >
        useEffect
      </h1>
      <br />
      <br />
      <p>
        <b>React Lifecycle Methods for Class Components:</b> In 2018 react hooks
        were introduced with the rise of functional components, these hooks
        provided a simple and preffered way for handelling state. Before 2018,
        all the react code was written with class-based components. All these
        class-based components used react lifecycle methoda for state
        management. <b>Class components</b> rely on life cyscle methods for
        performing tasks such as state management, and calling external APIs. To
        a beginner, these can look complex. React Hooks rely on these methods in
        the background and give the developers an abstract way of manage state,
        call APIs etc.
      </p>
      <br />
      <br />
      <p>
        <b>What is React Component Lifecycle?</b> The lifecycle of a React
        component can be broken down into 4 steps 1: Mounting, 2: Updating,
        3:Unmounting, 4:Error Handling. In the mounting phase, the component is
        inserted into the DOM along with various react internals. Once the
        component is inserted into the DOM it needs to be updated to keep it
        functional. All these updates happen in the update state. In the
        unmounting phase, which is the final phase, the component is removed
        from the DOM. React components can also go through an error-handling
        phase which occurs when there is some bug. It is not a strict
        requirement that a react component should go through every phase of the
        lifecycle. There can be components that are mounted and then unmounted
        without any updates. <b>What are React Lifecycle Methods?</b> We
        discussed the react life cycle phases. Each of these phases has
        lifecycle methods that we can override to execute code at specified
        times during the process. These methods are known as component lifecycle
        methods.
      </p>
      <br />
      <br />
      <em>
        <b className="text-2xl text-blue-950">
          The core concept of useEffect Hook:
        </b>
        <br />
        <br />
      </em>{' '}
      What are effects? <b>1: fetching data </b>
      <b>2: reading from local storage</b>{' '}
      <b>3: registering and deregistering event listeners.</b> <br />
      React`s effects are a completely different animal than the lifecycle
      method of class-based components. The abstraction level differs too.
      <br />
      <br />
      <ul>
        <li className="list-disc mb-2">
          You must thoroughly understand when components (re-)render because
          effects run after every render cycle
        </li>
        <li className="list-disc mb-2">
          {' '}
          Effects are always executed after rendering, but you can opt-out of
          this behavior
        </li>
        <li className="list-disc mb-2">
          {' '}
          You must understand basic JavaScript concepts about values to opt out
          or skip effects. An effect is only rerun if at least one of the values
          specified as part of the effect’s dependencies has changed since the
          last render cycle
        </li>
        <li className="list-disc mb-2">
          {' '}
          You should ensure that components are not re-rendered unnecessarily.
          This constitutes another strategy to skip unnecessary reruns of
          effects.
        </li>
        <li className="list-disc mb-2">
          {' '}
          You have to understand that functions defined in the body of your
          function component get recreated on every render cycle. This has an
          impact if you use it inside of your effect. There are strategies to
          cope with it (hoist them outside of the component, define them inside
          of the effect, use useCallback)
        </li>
        <li className="list-disc mb-2">
          {' '}
          You have to understand basic JavaScript concepts such as stale
          closures, otherwise, you might have trouble tackling problems with
          outdated props or state values inside of your effect. There are
          strategies to solve this, e.g., with an effect’s dependency array or
          with the useRef Hook
        </li>
        <li className="list-disc mb-2">
          {' '}
          You should not ignore suggestions from the React Hooks ESLint plugin.
          Do not blindly remove dependencies or carelessly use ESLint’s disable
          comments; you most likely have introduced a bug. You may still lack
          understanding of some important concepts
        </li>
        <li className="list-disc mb-2">
          {' '}
          Do not mimic the lifecycle methods of class-based components. This way
          of thinking does more harm than good. Instead, think more about data
          flow and state associated with effects because you run effects based
          on state changes across render cycles
        </li>
      </ul>
      <br />
      <br />
      <b className="text-2xl text-blue-950">
        Using useEffect for asynchronous tasks
      </b>
      <br /> For your fellow developers, useEffect code blocks are clear
      indicators of asynchronous tasks. Of course, it is possible to write
      asynchronous code without useEffect, but it is not the “React way,” and it
      increases both complexity and the likelihood of introducing errors.
      Instead of writing asynchronous code without useEffect that might block
      the UI, utilizing useEffect is a known pattern in the React community —
      especially the way the React team has designed it to execute side effects.
      Another advantage of using useEffect is that developers can easily
      overview the code and quickly recognize code that is executed “outside the
      control flow,” which becomes relevant only after the first render cycle.
      On top of that, useEffect blocks are candidates to extract into reusable
      and even more semantic custom Hooks.
      <Link
        className="underline m-6 hover:text-red-700"
        href="https://blog.logrocket.com/useeffect-hook-complete-guide/"
      >
        Full Documentation
      </Link>
      <Link
        href="/"
        className="bg-[#0D0630] px-8 py-4 font-bold rounded-lg border-2 border-[#E6F9AF] text-[#E6F9AF] hover:underline hover:bg-[#E6F9AF] hover:text-[#0D0630] hover:border-[#0D0630]"
      >
        Home
      </Link>
    </div>
  );
}
