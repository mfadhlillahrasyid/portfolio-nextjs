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
    badge: ["HTML", "CSS", "JavaScript", "Bootstrap UI"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/1.jpg",
    title: "Art Developer Agency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis, fugiat laboriosam veniam dolores eaque tempo"
  },
  {
    id: 2,
    badge: ["Bootstrap UI", "Laravel"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/2.jpg",
    title: "PT Bima Golden Powerindo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis, fugiat laboriosam veniam dolores eaque tempo"
  },
  {
    id: 3,
    badge: ["Bootstrap UI", "Laravel"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/3.jpg",
    title: "Kiyonest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis, fugiat laboriosam veniam dolores eaque tempo"
  },
  {
    id: 4,
    badge: ["HTML", "CSS", "JavaScript"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/4.jpg",
    title: "Work Life Balance Apparel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis, fugiat laboriosam veniam dolores eaque tempo"
  },
  {
    id: 5,
    badge: ["HTML", "CSS", "JavaScript"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/5.jpg",
    title: "CV Putra Aribur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis, fugiat laboriosam veniam dolores eaque tempo"
  },
  {
    id: 6,
    badge: ["Wordpress", "Elementor"],
    slug: "study-case-borjong",
    link: "https://borjong.com",
    image: "/website/6.jpg",
    title: "PT Marisi Abadi Sejahtera",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis, fugiat laboriosam veniam dolores eaque tempo"
  }
  // Add more cards as needed
];

export default function About() {
  return (
    <>
      <div className="container mx-auto font-sans py-10">
        <div className="grid grid-cols-1 gap-1 p-3 md:grid-cols-3 lg:grid-cols-4">
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
                      {badge} {/* Render each badge here */}
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
    </>
  );
}
