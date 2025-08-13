import { Link } from "react-router";

export default function BlogCard({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className='group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-2xl transition focus:outline-none focus:ring'
      tabIndex={0}
    >
      <img
        src={post.banner}
        alt={post.title}
        className='w-full h-48 object-cover group-hover:scale-105 transition'
      />
      <div className='p-5 flex justify-between flex-col gap-3 flex-1'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition'>
          {post.title}
        </h2>
        <p className='text-gray-700 dark:text-gray-300 line-clamp-3'>
          {post.excerpt}
        </p>
        <div className='flex items-center mt-3 gap-2'>
          <div className='w-10 h-10  rounded-full overflow-hidden'>
            <img
              src={post.avatar}
              alt={post.author}
              className='object-cover w-full h-full rounded-full'
            />
          </div>  
          <span className='text-sm text-gray-600 dark:text-gray-400'>
            {post.author}
          </span>
          <span className='ml-auto text-xs text-gray-400'>{post.date}</span>
        </div>
        <div className='flex gap-2 flex-wrap mt-2'>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className='bg-gray-100 dark:bg-gray-700 text-xs rounded px-2 py-1 text-gray-500 dark:text-gray-300'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
