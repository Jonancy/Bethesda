import { Input } from "@/components/ui/input";
import hehe from "../../assets/hero.png"; // Assuming hehe is the correct import

export default function Mail() {
  return (
    <div className="relative mt-20">
      <img
        className="w-full h-[40rem] object-cover "
        src={hehe}
        alt="Background"
      />
      <div className="absolute top-10 w-full flex items-center justify-center">
        <div className="w-[50%]  flex items-center justify-center flex-col text-white gap-4">
          <p className="text-2xl text-tertiary font-semibold">Have a question?</p>
          <p className="text-5xl font-semibold">Get In Touch</p>
          <p>Simply fill out the form below and our team will be in touch.</p>
          <div className="flex flex-col gap-6 text-white">
            <div className="flex gap-6 items-center">
              <Input type="text" placeholder="Name" className="bg-transparent  outline-none  text-white" />
              <Input type="email" placeholder="Email" className="bg-transparent  text-white" />
              <Input type="number" placeholder="Phone Number" className="bg-transparent text-white" />
            </div>
            <textarea className="w-full p-2 rounded-lg h-[10rem] bg-transparent border border-white text-white" placeholder="Write a message..."></textarea>
          </div>
          <div className="py-4 px-10 font-semibold text-xl rounded-lg bg-tertiary ">
            <p>Submit</p>
            </div>
        </div>
      </div>
    </div>
  );
}
