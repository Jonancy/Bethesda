import { BiSolidRightArrow } from "react-icons/bi";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {newsLists?.map((news, index) => (
          <Link
            to={`/news-articles/specific-news/${news?.id}`}
            className="group relative rounded-3xl overflow-hidden"
            key={index}
          >
            <img
              className="mx-auto h-48 sm:h-64 md:h-80 w-full object-cover object-top  transition duration-500 group-hover:scale-105 "
              src={news.picture}
              alt="News Article"
              loading="lazy"
              width="640"
              height="805"
            />
            <div className="absolute -bottom-5 inset-x-0 hidden sm:block px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-gray-800 dark:bg-white translate-y-16 sm:translate-y-20 md:translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold dark:text-gray-700 text-white">
                    {news.title}
                  </h4>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-300 dark:text-gray-600 line-clamp-4">
                {news.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
