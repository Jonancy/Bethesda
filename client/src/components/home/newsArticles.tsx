import imag from "../../assets/hero.png";

export default function NewsArticles() {
  return (
    <div className="px-32 mt-10">
      <p className="text-center font-semibold text-2xl">News & Articles</p>
      <div className="grid grid-cols-3 gap-8 mt-6">
      {[1,2,3].map((index)=>(


        <div className="flex flex-col  gap-4" key={index}>
          <img src={imag} className="rounded-lg h-[20rem] object-cover"></img>
          <div className="pr-6 flex flex-col gap-2">
            <p className="text-xl font-semibold">
              1 DAYS REFRESHER TRAINING AT FULBARI, MYADI
            </p>
            <p className="text-sm">
              1 days Refresher training was conducted on 27th June 2023 at
              fullbari, Myadi. We reflected on Depression and Suicide prevention
              . More then 45 participants participated in it.
            </p>
          </div>
          <div>
            <p className="font-semibold">Read More</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
