export default function MainHeader({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{text}</h1>
      <hr className="w-12 sm:w-16 md:w-20 border-2 border-secondaryColor"></hr>
    </div>
  );
}
