import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-start gap-8">
        <h1 className="text-4xl font-extrabold">/home/y4gg ❯ ls -a</h1>
        <div className="flex w-full flex-col">
          <Link
            href="https://subtrack.y4.gg"
            className="hover:underline text-xl"
          >
            Subtrack
          </Link>
          <Link href="https://ai.y4.gg" className="hover:underline text-xl">
            AI API
          </Link>
          <Link href="https://dcc.y4.gg" className="hover:underline text-xl">
            Discord Cleaner
          </Link>
          <Link
            href="https://gym-ladder.netlify.app"
            className="hover:underline text-xl"
          >
            Gym Ladder
          </Link>
        </div>
      </div>
    </div>
  );
}
