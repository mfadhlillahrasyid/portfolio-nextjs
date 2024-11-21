interface CardData {
  id: number;
  slug: string;
  image: string;
  badge: string[];
  link: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    badge: ["HTML", "CSS", "JavaScript"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/1.jpg",
    title: "Art Developer Agency",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita illo minima ad commodi ab placeat vel, dignissimos est fugiat ex veniam aliquam, deserunt repellat quasi voluptatibus accusamus asperiores quo."
  },
  {
    id: 2,
    badge: ["Bootstrap UI", "Laravel"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/2.jpg",
    title: "PT Bima Golden Powerindo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita illo minima ad commodi ab placeat vel, dignissimos est fugiat ex veniam aliquam, deserunt repellat quasi voluptatibus accusamus asperiores quo."
  },
  {
    id: 3,
    badge: ["Bootstrap UI", "Laravel"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/3.jpg",
    title: "Kiyonest",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita illo minima ad commodi ab placeat vel, dignissimos est fugiat ex veniam aliquam, deserunt repellat quasi voluptatibus accusamus asperiores quo."
  },
  {
    id: 4,
    badge: ["HTML", "CSS", "JavaScript"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/4.jpg",
    title: "Work Life Balance Apparel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita illo minima ad commodi ab placeat vel, dignissimos est fugiat ex veniam aliquam, deserunt repellat quasi voluptatibus accusamus asperiores quo."
  },
  {
    id: 5,
    badge: ["HTML", "CSS", "JavaScript"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/5.jpg",
    title: "CV Putra Aribur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita illo minima ad commodi ab placeat vel, dignissimos est fugiat ex veniam aliquam, deserunt repellat quasi voluptatibus accusamus asperiores quo."
  },
  {
    id: 6,
    badge: ["Wordpress", "Elementor"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/6.jpg",
    title: "PT Marisi Abadi Sejahtera",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita illo minima ad commodi ab placeat vel, dignissimos est fugiat ex veniam aliquam, deserunt repellat quasi voluptatibus accusamus asperiores quo."
  }
  // Add more cards as needed
];

export default function About() {
  return (
    <>
      <div className="container mx-auto font-sans py-10">
        <h2 className="text-center text-base/7 font-semibold text-lime-400">
          Portfolio
        </h2>
        <p className="mx-auto mt-2 mb-5 max-w-lg text-balance text-center text-1xl font-semibold tracking-tight text-gray-200 sm:text-3xl">
          Semua Study Case yang telah saya kerjakan
        </p>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card bg-base-300 shadow-xl transition-transform duration-500 scale-95 hover:scale-96"
            >
              <figure>
                <img src={card.image} alt={card.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p className="text-gray-600 line-clamp-3">{card.description}</p>
                <div className="badge-container">
                  {card.badge.map((badge, index) => (
                    <div
                      key={index}
                      className="badge badge-neutral my-1 mr-2 rounded-md py-3 hover:badge-primary"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <a
                    href={card.link}
                    target="_blank"
                    className="btn hover:btn-neutral btn-block text-center mt-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto container carousel carousel-center rounded-box max-w-max p-4">
          <div className="carousel-item grid-cols-1 gap-1 lg:grid-cols-5">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="card bg-base-300 w-96 shadow-xl transition-transform duration-500 scale-95 hover:scale-96"
              >
                <figure>
                  <img src={card.image} alt={card.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="text-gray-600 line-clamp-3">
                    {card.description}
                  </p>
                  <div className="badge-container">
                    {card.badge.map((badge, index) => (
                      <div
                        key={index}
                        className="badge badge-neutral my-1 mr-2 rounded-md py-3 hover:badge-primary"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                  <div className="card-actions justify-end">
                    <a
                      href={card.link}
                      target="_blank"
                      className="btn hover:btn-neutral btn-block text-center mt-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
