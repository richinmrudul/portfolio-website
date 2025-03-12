import Link from 'next/link';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold">Blog</h1>
      </header>

      <div className="max-w-3xl mx-auto">
        {/* First Blog Entry */}
        <div className="border-l-4 border-blue-500 pl-4 mb-8">
          <p className="text-gray-400 italic">11 Mar, 2025</p>
          <Link href="/blog/freudian" className="text-xl font-semibold text-blue-400 hover:underline">
            Freudian
          </Link>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-10">
        <Link 
          href="/" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
