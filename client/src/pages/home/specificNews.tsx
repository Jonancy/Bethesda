import SubHeader from "@/components/header/subHeader";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { getSpecificNews } from "@/Services/newsArticles/newsArticles.service";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SpecificNews() {
  const { news_id } = useParams();
  const [newsDetails, setNewsDetails] = useState<NewsArticle>();
  const [recommendationNews, setRecommendationNews] = useState<NewsArticle[]>(
    []
  );

  const getNews = async () => {
    try {
      const res = await getSpecificNews(news_id);
      console.log(res.data);
      setNewsDetails(res.data.specificNews);
      setRecommendationNews(res.data.otherNews);
    } catch (error: any) {
      console.log(error);
    }
  };

  console.log(newsDetails);
  useEffect(() => {
    getNews();
  }, [news_id]);

  return (
    <div className="flex flex-col mt-10">
      <div className="">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="flex flex-col items-start gap-2 font-semibold">
            <p className="text-2xl sm:text-3xl md:text-4xl">
              {newsDetails?.title}
            </p>
            <p>{formatDate(new Date(newsDetails?.createdAt))}</p>
          </div>
          <div className="flex flex-col gap-10 mb-20 mt-10">
            <img
              className="w-full rounded-xl object-cover h-48 sm:h-64 md:h-80 lg:h-96"
              src={newsDetails?.picture}
              alt="News Article"
            ></img>
            <p className="text-base sm:text-lg md:text-xl">
              {newsDetails?.content}
            </p>
          </div>
        </div>
        <div className="bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-32 py-20">
          <SubHeader text="More News&Articles " />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {recommendationNews?.map((news, index) => (
              <Link
                to={`/news-articles/specific-news/${news?.id}`}
                className="flex flex-col gap-4 group"
                key={index}
              >
                <img
                  src={news?.picture}
                  className="rounded-lg h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                  alt="Blog"
                ></img>
                <div className="pr-6 flex flex-col gap-2">
                  <p className="text-sm sm:text-base font-semibold">
                    {formatDate(new Date(news?.createdAt))}
                  </p>
                  <p className="text-lg sm:text-xl font-semibold">
                    {news?.title}
                  </p>
                  <p className="text-sm sm:text-base line-clamp-3">
                    {news?.content}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="group w-full flex cursor-pointer items-center justify-center rounded-md text-sm transition hover:border-2 hover:border-secondaryColor group-hover:bg-white md:text-base lg:p-3 lg:text-base"
                >
                  <Link
                    to="#"
                    className="group flex w-full items-center justify-center rounded py-1 text-center text-sm font-bold group-hover:text-secondaryColor md:text-base"
                  >
                    Read More
                  </Link>
                  <FaArrowRightLong className="mx-2 h-6 w-0 transition-all group-hover:w-6 group-hover:text-secondaryColor" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
