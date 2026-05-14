import Image from "next/image";
import InteractiveButtons from "@/components/InteractiveButtons";

export default function Home() {
  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center">
      <div className="relative w-64 h-64 mb-8 mx-auto rounded-2xl overflow-hidden shadow-md border-4 border-white/40">
        {/* Placeholder for Cat Meme */}
        <Image
          src="/cowboy_cat.png"
          alt="Cowboy cat"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-semibold text-[#4a3b32] mb-2 drop-shadow-sm">
        Priya,
      </h1>
      <p className="text-xl sm:text-2xl text-[#6b5548] mb-8 font-medium whitespace-nowrap">
        Are we finally going on a date?
      </p>

      <InteractiveButtons />
    </div>
  );
}
