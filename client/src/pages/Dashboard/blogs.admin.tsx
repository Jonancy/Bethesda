import { BlogDetailsTable } from "@/components/Admin/dataTable/BlogTable";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function BlogAdmin() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-4xl underline underline-offset-8">Blogs</h1>

      <div className="flex">
        <Link to="/admin/add-blog">
          <Button>Add Blogs</Button>
        </Link>
      </div>

      <div className="w-full">
        <BlogDetailsTable />
      </div>
    </div>
  );
}
export default BlogAdmin;
