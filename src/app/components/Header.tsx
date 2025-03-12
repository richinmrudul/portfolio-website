export default function Header() {
    return (
      <header className="w-full p-5 bg-gray-900 text-white fixed top-0">
        <nav className="flex justify-center space-x-6">
          <a href="/" className="text-lg font-semibold hover:text-gray-400">Home</a>
          <a href="/about" className="text-lg font-semibold hover:text-gray-400">About</a>
          <a href="/projects" className="text-lg font-semibold hover:text-gray-400">Projects</a>
          <a href="/blog" className="text-lg font-semibold hover:text-gray-400">Blog</a>
        </nav>
      </header>
    );
  }
  