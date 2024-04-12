import SubHeader from "@/components/header/subHeader";
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewsArticle } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { getSpecificNews } from "@/Services/newsArticles/newsArticles.service";

export default function SpecificNews() {
  const { news_id } = useParams();
  const [newsDetails, setnewsDetails] = useState<NewsArticle>();
  const [recommendationNews, setrecommendationNews] = useState<NewsArticle[]>(
    []
  );

  const getNews = async () => {
    try {
      const res = await getSpecificNews(news_id);
      console.log(res.data);
      setnewsDetails(res.data.specificNews);
      setrecommendationNews(res.data.otherNews);
    } catch (error: any) {
      console.log(error);
    }
  };
  console.log(newsDetails);

  useEffect(() => {
    getNews();
  }, [news_id]);
  return (
    <div className="flex flex-col  mt-10">
      <div className="">
        <div className="px-[15rem]">
          <div className="flex flex-col items-start gap-2 font-semibold ">
            <p className="text-4xl">{newsDetails?.title}</p>
            <p>{formatDate(new Date(newsDetails?.createdAt))}</p>
          </div>
          <div className="flex flex-col gap-10 mb-20 mt-10">
            <img
              className="w-full rounded-xl object-cover h-[25rem]"
              src={newsDetails?.picture}
            ></img>
            <p>{newsDetails?.content}</p>
          </div>
        </div>
        <div className="bg-gray-100  px-[15rem] py-20 ">
          <SubHeader text="More News&Articles " />
          <div className="grid grid-cols-4 gap-8 mt-8">
            {recommendationNews?.map((news) => (
              <Link
                to={`/news-articles/specific-news/${news?.id}`}
                key={news?.id}
              >
                <img
                  className="h-[10rem] rounded-3xl"
                  src={news?.picture}
                ></img>
                <div className="flex  items-center justify-between pt-2">
                  <p className="text-xl font-bold w-[10rem]">{news?.title}</p>
                  <IoIosArrowDropright className="text-5xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
