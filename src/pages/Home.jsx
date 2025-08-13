import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const {filteredData: postData} = useContext(DataContext);
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors'>
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3'>
          {postData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
