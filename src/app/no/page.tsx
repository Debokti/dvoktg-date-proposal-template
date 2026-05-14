import Image from "next/image";
import Link from "next/link";

export default function NoPage() {
  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center">
      <div className="relative w-64 h-64 mb-8 rounded-2xl overflow-hidden shadow-md border-4 border-white/40 bg-gray-100">
        {/* Placeholder for Sad Cat Meme */}
        <Image
          src="https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg"
          alt="Crying cat"
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#4a3b32] mb-4 drop-shadow-sm">
        How did you do that?
      </h1>
      <p className="text-lg text-[#6b5548] mb-8 font-medium">
        You really bypassed the code to click no? 😿
      </p>

      <Link 
        href="/"
        className="px-6 py-2 bg-white/50 text-gray-700 hover:bg-white/70 border border-gray-200 rounded-full font-medium text-sm shadow-sm backdrop-blur-sm transition-all duration-300"
      >
        Try again
      </Link>
    </div>
  );
}
