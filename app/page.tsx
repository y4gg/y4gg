import Link from "next/link";

export default function Home() {
  const items = [
    {
      name: "Discord Cleaner",
      url: "https://dcc.y4.gg",
    },
    {
      name: "Gym Ladder",
      url: "https://gym.y4.gg",
    },
    {
      name: "Github",
      url: "https://github.com/y4gg",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-4xl font-extrabold">~ ❯ ls -l</h1>
        <div className="flex w-full flex-col">
          {items.map((item) => (
            <Link
              href={item.url}
              key={item.url}
              className="animated-link text-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold terminal-text whitespace-pre">
          ~ ❯{" "}
        </h1>
      </div>
    </div>
  );
}
