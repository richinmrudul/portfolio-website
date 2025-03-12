import Link from 'next/link';

export default function Freudian() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">Freudian</h1>
        <p className="text-gray-400 italic mb-6">11 Mar, 2025</p>

        <p className="text-gray-300 mb-4">
          I first discovered Daniel Caesar in 2019, when I was still in the eighth grade. The very first song I heard by him was 
          <span className="text-blue-400"> Japanese Denim</span>, and at the time, I wasn't exactly sure how to feel about it. 
          Throughout middle school, my music taste revolved mostly around rap—mainly because of the fact that it felt like the easiest way to fit in with everyone else. 
          But as I grew older and gradually began exploring new artists and genres, Daniel Caesar kept drawing me back in, despite me trying numerous artists.
        </p>

        <p className="text-gray-300 mb-4">
          Considering all the beautiful pieces of art Daniel Caesar has created, the one album that has impacted me the most is 
          <span className="text-blue-400"> Freudian</span>. Without hesitation, I can confidently say it's my favorite album of all time. 
          And the funny thing is that, I listened to the songs in the album separately before I listened to the album fully. 
          Songs like <span className="text-blue-400"> Get You, Best Part,</span> and <span className="text-blue-400">We Find Love</span> all captivated me separately. 
          It wasn’t until much later that I finally sat down to listen to the album from beginning to end, as he intended.
        </p>

        <p className="text-gray-300 mb-4">
          Ironically, one song on the album that I always used to skip was the closing track, 
          <span className="text-blue-400"> Freudian</span>. It was 10 minutes long—there was no way that I would ever just sit down and listen to it, 
          just because of the fact that I’ve always hated long songs like that. 
          But the day I gave it the chance, made me realize that this song is very much a story within the album. 
          And it ends up being my favorite song on the album tbh.
        </p>

        <p className="text-gray-300 mb-4">
          Listening to <span className="text-blue-400"> Freudian</span> on repeat made me think a lot about love and its complexities. 
          To me, love is truly a privilege and one of the most beautiful feelings someone can experience—but it's also incredibly tricky. 
          It can help you grow into a better person and inspire you to be the best version of yourself. 
          But love can also become overwhelming, making you lose sight of other things in your life if you focus only on that one person.
        </p>

        <p className="text-gray-300 mb-4">
          This has made me realize love is very much a double-edged sword—it can either lift you up or hold you back, depending on how you handle it. 
          <span className="text-blue-400"> Freudian</span> perfectly captures this idea, showing both the beauty and difficulties that come with genuinely loving someone. 
          This album by Daniel Caesar will always be special to me, not just because of the music, but because it reminds me what it truly feels like to love and to live life genuinely.
        </p>

        {/* Back to Blog Button */}
        <div className="text-center mt-10">
          <Link 
            href="/blog" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
