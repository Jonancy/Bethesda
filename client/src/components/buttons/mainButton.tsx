import { FaAngleRight } from "react-icons/fa";

export default function MainButton({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm md:text-base lg:text-xl font-semibold p-4 md:p-6 rounded-lg border-2 border-black cursor-pointer hover:bg-secondaryColor hover:text-white transition-colors duration-300">
      <p>{text}</p>
      <FaAngleRight />
    </div>
  );
}
