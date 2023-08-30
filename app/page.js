import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" flex flex-col items-center text-center justify-between py-24 mx-auto my-24">
        <h2 className="uppercase mb-24 font-semibold text-3xl tracking-wider">
          React Hooks
        </h2>
        <ul className="flex font-bold gap-8">
          <Link
            href="/statehook"
            className="bg-[#75DBCD] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useState
          </Link>
          <Link
            href="/effecthook"
            className="bg-[#C9DBBA] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useEffect
          </Link>
          <Link
            href="/refhook"
            className="bg-[#DCDBA8] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useRef
          </Link>
          <Link
            href="/contexthook"
            className="bg-[#F5CDA7] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useContext
          </Link>
          <Link
            href="/reducerhook"
            className="bg-[#FE654F] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useReducer
          </Link>
          <Link
            href="/memohook"
            className="bg-[#D8F1A0] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useMemo
          </Link>
          <Link
            href="/layouteffecthook"
            className="bg-[#A4B0F5] px-8 py-4 rounded-lg border-2 border-blue-950 text-blue-950 hover:underline"
          >
            useLayoutEffect
          </Link>
        </ul>
      </div>
    </main>
  );
}
