import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full flex flex-center">
      <h1 className="text-4xl font-bold text-center">Loading...</h1>
      <Image
        src="loader.svg"
        width={50}
        height={50}
        alt="loading page"
        className="object-contain"
      />
    </div>
  );
}
