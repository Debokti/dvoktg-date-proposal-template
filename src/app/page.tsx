import Image from "next/image";
import InteractiveButtons from "@/components/InteractiveButtons";

export default function Home() {
  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center">
      <div className="relative w-64 h-64 mb-8 rounded-2xl overflow-hidden shadow-md border-4 border-white/40">
        {/* Placeholder for Cat Meme */}
        <Image
          src="https://media.tenor.com/f1K5B1_l_00AAAAM/love-you-more-smile.gif"
          alt="Ollie the polite cat"
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#4a3b32] mb-2 drop-shadow-sm">
        Priya,
      </h1>
      <p className="text-xl sm:text-2xl text-[#6b5548] mb-8 font-medium">
        Are we finally going on a date?
      </p>

      <InteractiveButtons />
    </div>
  );
}
