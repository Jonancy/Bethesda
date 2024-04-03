import pic from "../../assets/Service.png";

export default function Services() {
  return (
    <div className="px-40 py-10 flex flex-col gap-10">
      <div className="flex flex-col  items-center justify-center">
        <h1>Our Services</h1>
        <p>
          We offer language instruction in English, Nepali, and Japanese, as
          well as leadership training for rural civil society leaders.
        </p>
      </div>
      <div className=" flex flex-col gap-8">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <div className="rounded-3xl w-full relative h-[15rem]">
            <img
              src={pic}
              className="absolute inset-0 w-full h-full rounded-3xl object-cover"
            />
            <div className="absolute left-14 top-1/3 text-4xl text-white font-semibold">
              <p className="w-[25rem]">English Conversation Classes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
