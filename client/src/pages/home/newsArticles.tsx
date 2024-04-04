import { BiSolidRightArrow } from "react-icons/bi";
import pic from "../../assets/Service.png";

export default function NewsArticlesLists() {
  return (
    <div className="px-[15rem] py-10 flex flex-col gap-10">
      <div className="flex flex-col  items-center justify-center">
        <h1>News & Articles</h1>
        <p>
          We offer language instruction in English, Nepali, and Japanese, as
          well as leadership training for rural civil society leaders.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5].map((index) => (
          <div className="flex flex-col  gap-4" key={index}>
            <div className="relative rounded-3xl">
              <img
                src={pic}
                className=" h-[18rem] object-cover rounded-3xl"
              ></img>
              <div className="absolute bottom-0 w-full bg-primaryColor text-center p-4 font-bold text-xl text-white rounded-b-3xl">
                <p>News</p>
              </div>
            </div>
            <div className="pr-6 flex flex-col gap-2">
              <p className="text-xl font-bold text-primaryColor ">
                1 DAYS REFRESHER TRAINING AT FULBARI, MYADI
              </p>
              <p className="text-sm line-clamp-2">
                1 days Refresher training was conducted on 27th June 2023 at
                fullbari, Myadi. We reflected on Depression and Suicide
                prevention . More then 45 participants participated in it.
              </p>
            </div>
            <div className="w-full  py-2  flex gap-2 items-center">
              <p className="font-bold text-sm text-primaryColor">Read More</p>
              <BiSolidRightArrow />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
