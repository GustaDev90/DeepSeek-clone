import Link from "next/link";

interface CardsProps {
  title: string;
  link: string;
  desc: string;
}

const cards: CardsProps[] = [
  { 
    title: "Start now", 
    desc: "Free access to DeepSeek-V3.\nExperience the intelligent model.", 
    link: "/chat" 
  },
  { 
    title: "Get DeepSeek App", 
    desc: "Chat on the go with DeepSeek-V3.\nYour free all-in-one AI tool", 
    link: "/" 
  },
];

const Cards: React.FC = () => {
  return (
    <div className="md:flex gap-10">
      {cards.map((items, index) => (
         <div
           className="mt-16 bg-white rounded-2xl w-[350px] h-[150px] shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 cursor-pointer"
           key={index}
         >
          <Link href={items.link}>
            <div className="mt-8 ml-8 text-gray-500">
              <h1 className="font-bold text-xl text-blue-600">{items.title}</h1>
              {items.desc.split("\n").map((line, lineIndex) => (
                <div key={lineIndex}>{line}</div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;