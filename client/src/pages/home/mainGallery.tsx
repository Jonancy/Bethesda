import { useEffect, useState } from "react";
import { Gallery } from "@/types";
import { getAllGallery } from "@/Services/gallery/gallery.service";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MainGallery() {
  const [galleryLists, setGalleryLists] = useState<Gallery[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);

  const getGallery = async () => {
    try {
      const res = await getAllGallery(page);
      console.log(res.data);
      setGalleryLists((pevGallery) => [...pevGallery, ...res.data]);
      if (res.data.length === 0) {
        setHasMore(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getGallery();
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className=" sm:px-10 md:px-20 lg:px-40 py-10 flex flex-col gap-10 ">
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text-3xl font-bold text-primaryColor">Our Gallery</h1>
      </div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <InfiniteScroll
          dataLength={galleryLists?.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          scrollableTarget=".notification-list"
          className="flex flex-col gap-10 items-start notification-list"
        >
          <div className="mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
            {galleryLists?.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="hehe"
                className={`hover:opacity-90 duration-300 cursor-pointer aspect-square object-cover h-full min-h-48 w-full rounded shadow-sm dark:bg-gray-500 ${
                  index % 3 === 0 ? "col-span-2 row-span-2  " : ""
                }`}
              />
            ))}
          </div>
        </InfiniteScroll>
      </section>
    </div>
  );
}
