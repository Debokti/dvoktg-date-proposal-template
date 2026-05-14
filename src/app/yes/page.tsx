import Image from "next/image";
import Link from "next/link";

export default function YesPage() {
  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl glass-card flex flex-col items-center justify-center text-center">
      <div className="relative w-64 h-64 mb-8 rounded-2xl overflow-hidden shadow-md border-4 border-white/40">
        {/* Placeholder for Dancing Spiderman GIF */}
        <Image
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z2NndqZ2R3cjNtdndvd3Nwd2JtZWNpeXBpYzI1czdrcDZ0dW43ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oW4csEbiMzVjq/giphy.webp"
          alt="Dancing Spiderman"
          fill
          className="object-cover"
          unoptimized
          priority
        />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#4a3b32] mb-4 drop-shadow-sm">
        Yay! We&apos;re going on a date!
      </h1>
      <p className="text-lg text-[#6b5548] mb-8 font-medium">
        I&apos;ll be in touch with the details. 💖
      </p>

      <Link 
        href="/"
        className="px-6 py-2 bg-white/50 text-gray-700 hover:bg-white/70 border border-gray-200 rounded-full font-medium text-sm shadow-sm backdrop-blur-sm transition-all duration-300"
      >
        Try again?
      </Link>
    </div>
  );
}
