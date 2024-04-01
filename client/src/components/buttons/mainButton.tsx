import { BiRightArrowAlt } from 'react-icons/bi';
export default function MainButton({ text } : {text: string}) {
  return (
    <div className="flex gap-2 items-center text-xl font-semibold p-6 rounded-lg border-2 border-black">
      <p>{text}</p>
      <BiRightArrowAlt />
    </div>
  );
}


