import "./index.css";

export default function PrismPortfolio() {
  const articles = [
    {
      title: "How to Set Up a Business in Dubai",
      category: "Business",
      excerpt:
        "A practical guide covering the essentials of establishing a business presence in Dubai and understanding the setup process.",
      link:
        "https://medium.com/@priyanshudamade/how-to-set-up-a-business-in-dubai-092f1ea5614e",
      image: "/images/dubai.webp",
    },
    {
      title:
        "How to Generate App Store Screenshots Using a Template in AppLaunchpad",
      category: "Technology",
      excerpt:
        "A walkthrough on creating polished app store visuals efficiently using templates and automation tools.",
      link:
        "https://medium.com/@priyanshudamade/how-to-generate-app-store-screenshots-using-a-template-in-applaunchpad-2e1ab0192d9f",
      image: "/images/applaunchpad.webp",
    },
    {
      title:
        "Michael Jordan Sends Emotional Message to Derrick Rose Upon Bulls’ Legend’s Jersey Retirement",
      category: "Sports",
      excerpt:
        "Exploring the emotional impact and legacy surrounding Derrick Rose’s jersey retirement and Michael Jordan’s response.",
      link:
        "https://medium.com/@priyanshudamade/michael-jordan-sends-emotional-message-to-derrick-rose-upon-bulls-legend-s-jersey-retirement-c110bee5f908",
      image: "/images/derrickrose.webp",
    },
  ];

  const poetry = [
    {
      title: "Sudden",
      image: "/images/sudden.jpg",
    },
    {
      title: "Chand",
      image: "/images/Chand.jpg",
    },
    {
      title: "Calling",
      image: "/images/calling.jpg",
    },
    {
      title: "Moon",
      image: "/images/Moon.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#d7d1c7] overflow-x-hidden">

      <div className="fog-overlay" />

      <div className="fixed inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#542d21]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3d2d25]/20 blur-3xl rounded-full" />
      </div>

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 border-b border-[#2d2a28] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(8,8,8,0.75), rgba(8,8,8,0.92)), url('/images/banner.jpeg')",
        }}
      >
        <div className="max-w-5xl">
          <p className="uppercase tracking-[0.4em] text-sm text-[#9b8d7a] mb-6">
            ARCHIVE ENTRY — CONTENT WRITER | COPYWRITING | COMMUNICATION
          </p>

          <p
            className="mt-3 text-[#7a4d38] tracking-[0.25em] uppercase text-xs"
            style={{ fontFamily: "Spectral, serif" }}
          >
            Recovered Journal Files • Personal Records • Published Fragments
          </p>

          <h1
            className="text-6xl md:text-8xl leading-none text-[#f4ede2] mb-8"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            PRISM
          </h1>

          <p
            className="mt-4 text-xl md:text-2xl text-[#c7bfb2]"
            style={{ fontFamily: "Spectral, serif" }}
          >
            Priyanshu Damade
          </p>

          <p
            className="max-w-2xl text-lg md:text-xl leading-relaxed text-[#c7bfb2] mt-8"
            style={{ fontFamily: "Spectral, serif" }}
          >
            Exploring stories through travel, digital culture, sports moments,
            poetry, and human experiences. Writing that feels cinematic,
            atmospheric, and emotionally grounded.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="px-6 py-3 bg-[#7a4d38] hover:bg-[#92624d] transition rounded-full text-[#f4ede2]">
              View Writing
            </button>

            <button className="px-6 py-3 border border-[#5f564e] hover:border-[#9b8d7a] transition rounded-full text-[#d7d1c7]">
              Contact
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:block opacity-20 text-sm tracking-[0.3em] uppercase text-[#8f8478]">
          Inspired by forgotten castles, old journals & late-night internet
        </div>
      </section>

      {/* Featured Writing */}
      <section className="relative px-6 md:px-16 py-28 border-b border-[#2d2a28]">
        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-[#9b8d7a] mb-4">
            Published Pieces
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#f4ede2]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Featured Writing
          </h2>

          <div className="w-32 h-[1px] bg-[#7a4d38] mt-6 mb-10 opacity-70" />

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group bg-[#111111]/80 border border-[#2d2a28] rounded-3xl overflow-hidden hover:border-[#7a4d38] transition duration-500 hover:-translate-y-2"
              >
                <div
                  className="h-64 relative overflow-hidden bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(8,8,8,0.85), rgba(8,8,8,0.2)), url(${article.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,120,80,0.25),transparent_60%)]" />

                  <div className="absolute bottom-6 left-6">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#d4b89a]">
                      {article.category}
                    </p>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#9b8d7a]">
                      Archive Status: Recovered
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    className="text-3xl text-[#f1e8dc] mb-4 group-hover:text-[#d8b08d] transition"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {article.title}
                  </h3>

                  <p
                    className="text-[#b9b1a7] leading-relaxed mb-6"
                    style={{ fontFamily: "Spectral, serif" }}
                  >
                    {article.excerpt}
                  </p>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase tracking-[0.2em] text-sm text-[#d4b89a] hover:text-[#f1e8dc] transition"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poetry */}
      <section className="relative px-6 md:px-16 py-28 border-b border-[#2d2a28]">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-[#9b8d7a] mb-4">
            Selected Creative Pieces
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#f4ede2]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Fragments & Poetry
          </h2>

          <div className="w-32 h-[1px] bg-[#7a4d38] mt-6 mb-10 opacity-70" />

          <div className="grid md:grid-cols-2 gap-6">
            {poetry.map((poem, index) => (
              <div
                key={index}
                className="group bg-[#121212]/80 border border-[#2d2a28] rounded-2xl overflow-hidden hover:border-[#705142] transition duration-500"
              >
                <a
                  href={poem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                     className="h-[420px] bg-cover bg-center transition duration-700 group-hover:scale-105 cursor-pointer"
                     style={{
                       backgroundImage: `linear-gradient(to top, rgba(8,8,8,0.75), rgba(8,8,8,0.15)), url(${poem.image})`,
                       }}
                  />
                </a>

                <div className="p-6">
                  <p
                    className="text-2xl text-[#f1e8dc]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {poem.title}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#9b8d7a]">
                    Fragment Recovered
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Script Archive */}
      <section className="relative px-6 md:px-16 py-28 border-b border-[#2d2a28]">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-[#9b8d7a] mb-4">
            Script Archive
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#f4ede2]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Recovered Files
          </h2>

          <div className="w-32 h-[1px] bg-[#7a4d38] mt-6 mb-10 opacity-70" />

          <div className="bg-[#111111]/80 border border-[#2d2a28] rounded-3xl p-10 hover:border-[#7a4d38] transition duration-500">

            <p className="uppercase tracking-[0.25em] text-xs text-[#d4b89a]">
              Archive Status: Accessible
            </p>

            <h3
              className="text-4xl text-[#f1e8dc] mt-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Recovered File: Ward 17 — Shikha
            </h3>

            <p
              className="mt-6 text-[#bdb5aa] leading-relaxed"
              style={{ fontFamily: "Spectral, serif" }}
            >
              A cinematic emotional script exploring trauma, patience,
              memory, and love through the perspective of a hospital reunion.
            </p>

            <a
              href="/files/Draft Ending.pdf"
              target="_blank"
              className="inline-block mt-10 uppercase tracking-[0.25em] text-sm text-[#d4b89a] hover:text-[#f1e8dc] transition"
            >
              Open Recovered File →
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative px-6 md:px-16 py-28 border-b border-[#2d2a28]">
        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-[#9b8d7a] mb-4">
            Experience
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#f4ede2]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Travel Industry Exposure
          </h2>

          <div className="w-32 h-[1px] bg-[#7a4d38] mt-6 mb-10 opacity-70" />

          <div className="border-l border-[#4b3b32] pl-8 relative">
            <div className="absolute w-4 h-4 bg-[#9b6b55] rounded-full -left-[9px] top-2" />

            <h3
              className="text-2xl text-[#f1e8dc] mb-2"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Travel Company • 6 Months
            </h3>

            <p
              className="text-[#bdb5aa] leading-relaxed"
              style={{ fontFamily: "Spectral, serif" }}
            >
              Assisted with travel-related communication, audience-focused
              storytelling, and content presentation in a fast-paced travel
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative px-6 md:px-16 py-28 border-b border-[#2d2a28]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#9b8d7a] mb-4">
              About
            </p>

            <h2
              className="text-4xl md:text-5xl text-[#f4ede2]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Stories That Feel Lived In
            </h2>

            <div className="w-32 h-[1px] bg-[#7a4d38] mt-6 mb-10 opacity-70" />
          </div>

          <p
            className="text-lg leading-relaxed text-[#c7bfb2]"
            style={{ fontFamily: "Spectral, serif" }}
          >
            My writing explores emotional atmosphere, overlooked details,
            and the intersection between digital life and real experiences.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="relative px-6 md:px-16 py-32 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#9b8d7a] mb-4">
          Contact
        </p>

        <h2
          className="text-5xl md:text-7xl text-[#f4ede2] mb-8"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Let’s Create
        </h2>

        <p
          className="max-w-2xl mx-auto text-lg text-[#bdb5aa] leading-relaxed mb-10"
          style={{ fontFamily: "Spectral, serif" }}
        >
          Available for content writing, storytelling projects,
          travel writing, creative scripts, and editorial collaborations.
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-[#d4b89a] uppercase tracking-[0.2em] text-sm">

          <a
            href="https://medium.com/@priyanshudamade"
            target="_blank"
            className="hover:text-[#f1e8dc] transition"
          >
            Medium
          </a>

          <a
            href="https://linkedin.com/in/priyanshu-damade-a4284a363"
            target="_blank"
            className="hover:text-[#f1e8dc] transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:priyanshudamade@gmail.com"
            className="hover:text-[#f1e8dc] transition"
          >
            Email
          </a>

        </div>
      </section>
    </div>
  );
}