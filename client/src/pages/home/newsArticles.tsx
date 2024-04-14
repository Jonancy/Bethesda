import { BiSolidRightArrow } from "react-icons/bi";
import pic from "../../assets/Service.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllArticles } from "@/Services/newsArticles/newsArticles.service";
import { NewsArticle } from "@/types";

export default function NewsArticlesLists() {
  const [newsLists, setNewsLists] = useState<NewsArticle[]>([]);

  const getAllNews = async () => {
    try {
      const res = await getAllArticles();
      console.log(res.data);
      setNewsLists(res.data.getAllArticles);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(newsLists);

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      <div className=" px-10 lg:px-32 py-10 flex flex-col gap-10">
        <div className="flex flex-col  items-center justify-center">
          <h1 className="text-3xl font-bold text-primaryColor">
            News & Articles
          </h1>
          <p>
            We offer language instruction in English, Nepali, and Japanese, as
            well as leadership training for rural civil society leaders.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsLists?.map((news, index) => (
            <Link
              to={`/news-articles/specific-news/${news?.id}`}
              className="group relative rounded-3xl  space-y-6 overflow-hidden"
            >
              <img
                className="mx-auto h-[26rem] w-full grayscal object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={news.picture}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-44 mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                      {news.title}
                    </h4>
                  </div>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600 line-clamp-4">
                  {news.content}
                </p>
              </div>
            </Link>

            // <div className="flex flex-col gap-4 group" key={news?.id}>
            //   <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
            //     <div>
            //       <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
            //         Hentoni Doe
            //       </h4>
            //       <span className="block text-sm text-gray-500">
            //         CEO-Founder
            //       </span>
            //     </div>
            //     <p className="mt-8 text-gray-300 dark:text-gray-600">
            //       Quae labore quia tempora dolor impedit. Possimus, sint ducimus
            //       ipsam?
            //     </p>
            //   </div>
            //   <div className="relative rounded-3xl h-80">
            //     <img
            //       src={news?.picture}
            //       className=" object-cover rounded-3xl w-full h-full"
            //     ></img>
            //     <Link
            //       to={`/news-articles/specific-news/${news?.id}`}
            //       className="absolute bottom-0 flex item w-full bg-primaryColor text-center p-4 font-bold text-lg text-white rounded-b-3xl backdrop-blur-sm bg-opacity-50 group-hover:bg-opacity-100"
            //     >
            //       <div className="mx-auto flex">
            //         <p>Read More</p>
            //         <FaArrowRightLong className=" mx-2 h-8 w-0 transition-all group-hover:w-6 group-hover:text-white" />
            //       </div>
            //     </Link>
            //   </div>
            //   <div className="pr-6 flex flex-col gap-2 px-10">
            //     <p className="text-xl font-bold text-primaryColor">
            //       {news?.title}
            //     </p>
            //     <p className="text-sm line-clamp-2">{news?.content}</p>
            //   </div>
            //   {/* <div className="w-full  py-2  flex gap-2 items-center ">
            //     <p className="font-bold text-sm text-primaryColor ">
            //       Read More
            //     </p>
            //     <BiSolidRightArrow />
            //   </div> */}
            // </div>
          ))}
        </div>
      </div>

      {/* <div className="py-20">
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Tailus blocks leadership
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tailus prides itself not only on award-winning technology, but
              also on the talent of its people of some of the brightest minds
              and most experienced executives in business.
            </p>
          </div>
          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="images/woman.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="images/man.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                    Hentoni Doe
                  </h4>
                  <span className="block text-sm text-gray-500">
                    CEO-Founder
                  </span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                  ipsam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
