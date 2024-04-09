import { NewsArticle } from "@/types";
import imag from "../../assets/hero.png";

export default function NewsArticles({
  newsArticleLists,
}: {
  newsArticleLists: NewsArticle[];
}) {
  return (
    <div className="px-32 mt-10">
      <p className="text-center font-semibold text-2xl">News & Articles</p>
      <div className="grid grid-cols-3 gap-8 mt-6">
        {newsArticleLists?.map((news,index) => (
          <div className="flex flex-col  gap-4" key={index}>
            <img
              src={news?.picture}
              className="rounded-lg h-[20rem] object-cover"
            ></img>
            <div className="pr-6 flex flex-col gap-2">
              <p className="text-xl font-semibold">{news?.title} </p>
              <p className="text-sm">{news?.content}</p>
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
