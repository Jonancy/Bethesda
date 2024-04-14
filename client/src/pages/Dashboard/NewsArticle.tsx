import { NewsDetailsTable } from "@/components/Admin/dataTable/NewsArticle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NewsAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">News Articles</h1>
      <div className="flex">
        <Link to="/admin/add-news-article">
          <Button>Add new News Article</Button>
        </Link>
      </div>

      <div className="w-full">
        <NewsDetailsTable />
      </div>
    </div>
  );
}
export default NewsAdmin;
