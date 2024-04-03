import pic from "../../assets/Service.png"


export default function NewsArticlesLists() {
  return (
    <div className="px-[20rem] py-10 flex flex-col gap-10">
    <div className="flex flex-col  items-center justify-center">
      <h1>News & Articles</h1>
      <p>
        We offer language instruction in English, Nepali, and Japanese, as
        well as leadership training for rural civil society leaders.
      </p>
    </div>
    <div className="grid grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div className="flex flex-col  gap-4" key={index}>
        <img src={pic} className="rounded-lg h-[20rem] object-cover"></img>
        <div className="pr-6 flex flex-col gap-2">
            <p className="text-sm font-semibold">April 1, 2024</p>
          <p className="text-xl font-semibold">
            1 DAYS REFRESHER TRAINING AT FULBARI, MYADI
          </p>
          <p className="text-sm">
            1 days Refresher training was conducted on 27th June 2023 at
            fullbari, Myadi. We reflected on Depression and Suicide prevention
            . More then 45 participants participated in it.
          </p>
        </div>
        <div className="w-full text-center border py-2 rounded-lg  border-black">
          <p className="font-semibold">Read More</p>
        </div>
      </div>
      ))}
    </div>
  </div>
  )
}
