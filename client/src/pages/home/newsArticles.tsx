import { BiSolidRightArrow } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllArticles } from "@/Services/newsArticles/newsArticles.service";
import { NewsArticle } from "@/types";
import { formatDate } from "@/utils/formatDate";

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
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-primaryColor">
          News & Articles
        </h1>
        <p className="text-sm sm:text-base text-center">
          We offer language instruction in English, Nepali, and Japanese, as
          well as leadership training for rural civil society leaders.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6 xl:gap-8 mt-8 gap-3 gap-y-4 lg:grid-cols-3 xl:grid-cols-4 ">
        {newsLists?.map((news, index) => (
          <Link
            to={`/news-articles/specific-news/${news?.id}`}
            className="group relative rounded-3xl overflow-hidden"
            key={index}
          >
            <img
              className="mx-auto w-80 rounded-3xl object-cover object-top transition duration-500 group-hover:scale-105 aspect-auto "
              src={news.picture}
              alt="News Article"
              loading="lazy"
            />
            <div className="absolute -bottom-10 inset-x-0 hidden sm:block px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-gray-800 dark:bg-white -translate-y-20 sm:translate-y-20 md:translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-700 text-white">
                    {news.title}
                  </h4>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-300 dark:text-gray-600 line-clamp-1">
                {news.content}
              </p>
            </div>
          </Link>
        ))}
      </div> */}
      <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {newsLists?.map((items, key) => (
          <li className="w-full mx-auto group sm:max-w-sm" key={key}>
            <a href={items.title}>
              <img
                src={items.picture}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-lg"
              />
              <div className="mt-3 space-y-2">
                <span className="block text-sm">
                  {formatDate(new Date(items?.createdAt))}
                </span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:underline font-semibold">
                  {items.title}
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 line-clamp-2">
                  {items.content}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
