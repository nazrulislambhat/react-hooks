import Link from 'next/link';
import Image from 'next/image';
import reactLogo from '../public/react.svg';
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" flex flex-col items-center text-center justify-between py-24 mx-auto my-24">
        <Image
          src={reactLogo}
          width={100}
          height={100}
          alt="React Logo"
          className="mb-12"
        />

        <h2 className="uppercase mb-12 font-semibold text-3xl">React Hooks</h2>
        <div className="flex font-bold flex-col sm:flex-row gap-8">
          <Link
            href="/usestate"
            className="bg-[#F1DABF] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useState
          </Link>
          <Link
            href="/useeffect"
            className="bg-[#C9DBBA] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useEffect
          </Link>
          <Link
            href="/usecontext"
            className="bg-[#F5CDA7] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useContext
          </Link>
          <Link
            href="/useref"
            className="bg-[#DCDBA8] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useRef
          </Link>
          <Link
            href="/usememo"
            className="bg-[#FFFD98] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useMemo
          </Link>
          <Link
            href="/usecallback"
            className="bg-[#75DBCD] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useCallback
          </Link>
          <Link
            href="/usereducer"
            className="bg-[#F7A072] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useReducer
          </Link>

          <Link
            href="/uselayouteffect"
            className="bg-[#A4B0F5] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useLayoutEffect
          </Link>
        </div>
      </div>
    </main>
  );
}
