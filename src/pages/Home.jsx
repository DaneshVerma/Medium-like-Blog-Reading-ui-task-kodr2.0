import posts from "../data/posts.json";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
