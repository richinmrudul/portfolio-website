import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="overflow-hidden whitespace-nowrap w-full">
        <h1 className="text-4xl font-extrabold text-center animate-scroll">
          Coming Soon
        </h1>
      </div>

      <div className="mt-8">
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
