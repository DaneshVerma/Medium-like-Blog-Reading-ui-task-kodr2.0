import { useParams } from "react-router";
import posts from "../data/posts.json";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <div className='p-16 text-center'>404 Post not found.</div>;

  return (
    <div className='min-h-screen text-black dark:text-white bg-gray-50 dark:bg-gray-900 transition-colors'>
      <Header />
      <article className='prose lg:prose-xl dark:prose-invert mx-auto py-10 max-w-3xl'>
        <img
          src={post.banner}
          alt={post.title}
          className='rounded-xl w-full mb-7'
        />
        <h1>{post.title}</h1>
        <div className='flex items-center gap-3 mb-5'>
          <img
            src={post.avatar}
            alt={post.author}
            className='w-10 h-10 rounded-full'
          />
          <span className='font-medium'>{post.author}</span>
          <span className='text-gray-400 dark:text-gray-500 text-xs'>
            {post.date}
          </span>
        </div>
        <div className='mb-5 flex gap-2 flex-wrap'>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className='bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs'
            >
              {tag}
            </span>
          ))}
        </div>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>
    </div>
  );
}
