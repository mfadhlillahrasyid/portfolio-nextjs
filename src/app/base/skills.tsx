interface Skills {
  id: number;
  img: string;
  title: string;
}

const skills: Skills[] = [
  {
    id: 1,
    img: "meta.webp",
    title: "Meta Platfrom"
  },
  {
    id: 2,
    img: "tiktok.webp",
    title: "Tiktok Ads"
  },
  {
    id: 3,
    img: "google.webp",
    title: "Google Ads"
  },
  {
    id: 4,
    img: "analytic.webp",
    title: "Google Analytics"
  },
  {
    id: 5,
    img: "tagmanager.webp",
    title: "Tag Manager"
  },
  {
    id: 6,
    img: "searchconsole.svg",
    title: "Search Console"
  },
  {
    id: 7,
    img: "seo.webp",
    title: "SEO"
  }
];

export default function Skills() {
  return (
    <>
      <div className="container mx-auto font-sans py-10">
        <div className="grid grid-cols-5 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skil) => (
            <div
              key={skil.id}
              className="place-items-center card bg-base-300 w-50 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <img
                  src={`./skills/${skil.img}`}
                  alt="mfr-portfolio-skills"
                  className="rounded-xl w-20"
                />
                <h2 className="card-title">{skil.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
