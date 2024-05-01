import { NewsArticle } from "@/types";
import imag from "../../assets/hero.png";
import { Link } from "react-router-dom";

export default function NewsArticles({
  newsArticleLists,
}: {
  newsArticleLists: NewsArticle[];
}) {
  console.log(newsArticleLists, "new article list");

  return (
    <div className="px-4 mt-10 sm:px-8 md:px-16 lg:px-32">
      <p className="text-center font-semibold text-xl sm:text-2xl">
        News & Articles
      </p>
      <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
        {newsArticleLists?.map((news, index) => (
          <Link
            to={`/news-articles/specific-news/${news?.id}`}
            className="group relative rounded-3xl overflow-hidden"
            key={index}
          >
            <img
              className="mx-auto h-52 sm:h-64 md:h-80 w-full object-cover object-top  transition duration-500 group-hover:scale-105 "
              src={news.picture}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div className="absolute bottom-0 inset-x-0 px-4 py-3 sm:px-6 sm:py-4 bg-gray-800 dark:bg-white translate-y-16 sm:translate-y-20 md:translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
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
      </div>
    </div>
  );
}
