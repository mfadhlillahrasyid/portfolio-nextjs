/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/navbar";
import About from "./base/about";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="mx-auto font-sans">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(./hero-bg.jpg)"
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl leading-tight font-bold">
                Muhammad Fadhlillah Rasyid
              </h1>
              <p className="py-6 text-lg leading-snug">
                Digital Marketer • Performance Marketing Specialist • Web
                Programmer 💻
              </p>
              <label className="swap swap-flip text-5xl mt-3">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
              </label>
              <label className="swap swap-flip text-5xl mt-3">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">💻</div>
                <div className="swap-off">🚀</div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />
    </>
  );
}
