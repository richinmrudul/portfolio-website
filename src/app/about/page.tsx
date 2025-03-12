import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold">About Me</h1>
      </header>

      <div className="max-w-3xl mx-auto mt-8 space-y-8">
        {/* Who Am I? */}
        <section className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-2xl font-semibold">My Journey</h2>
          <p className="mt-2 text-gray-300">
            My name is Richin Mrudul, and I am currently a Computer Science student at Purdue University.
            I am highly motivated and passionate about exploring new opportunities within the field of technology. 
            I am eager to learn, grow, and continually expand my skill set. With a strong drive to improve, 
            I am open to any opportunity that allows me to contribute meaningfully while enhancing my knowledge 
            and abilities in computer science.
          </p>
        </section>

        {/* Hobbies & Interests Section */}
        <section className="border-l-4 border-green-500 pl-4">
          <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
          <p className="mt-2 text-gray-300">
          Apart from my passion for technology, I enjoy spending time with my friends and going on walks,  
          always looking for new places to explore. I grew up in Sacramento, California, but now I'm 
          living mainly in Indiana, embracing new experiences along the way.  

          As a big basketball fan, I’ve always supported the Sacramento Kings,  
          and I love the energy and excitement of the game. I'm also a huge 
          foodie, with a deep appreciation for Thai and Indian cuisine.  
          Whether it's a homecooked meal or trying a new restaurant, I'm 
          always down.  
          </p>

          {/* Music & Instruments Subsection */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-green-400">Music & Instruments</h3>
            <p className="mt-2 text-gray-300">
              Music has been a significant part of my life. I play the guitar, drums, and chenda. 
              Listening to music is just as important to me as playing instruments, and some of my favorite artists 
              include Daniel Caesar, Kanye West, SZA, Drake, and Maroon 5.
            </p>

            {/* Instrument Timeline Design */}
            <div className="mt-6 border-l-4 border-green-400 pl-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">Guitar</h4>
                <p className="text-gray-400">
                  I have been playing guitar for years, enjoying both acoustic and electric styles.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Drums</h4>
                <p className="text-gray-400">
                  Drumming has been a passion of mine, especially in live settings and jam sessions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Chenda</h4>
                <p className="text-gray-400">
                  A traditional Indian percussion instrument that I enjoy playing during cultural events.
                </p>
              </div>
            </div>

            {/* Spotify Link */}
            <div className="mt-6">
              <Link 
                href="https://open.spotify.com/user/31ivfols65myfir2vaxahrswip5u?si=c300b838a56c4be6"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                Check out my Spotify!
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section (Moved to the Bottom) */}
        <section className="border-l-4 border-yellow-500 pl-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-300">
            Feel free to reach out to me at:
          </p>
          <p className="text-gray-400">richinm@gmail.com</p>
          <p className="text-gray-400">rmrudul@purdue.edu</p>
        </section>

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
    </div>
  );
}
