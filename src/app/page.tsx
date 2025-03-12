import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-10">
      <Header />
      <section id="home" className="mt-20">
        <h1 className="text-5xl font-extrabold">Richin Mrudul</h1>
        <p className="text-lg text-gray-400 mt-2">CS @ Purdue | Open to SWE Opportunities</p>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/richin-mrudul-227b67261/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Connect on LinkedIn
        </a>
      </section>
    </main>
  );
}
