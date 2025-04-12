import Link from 'next/link';

export default function HomePage() {
  const posts = [
    { id: '1', title: 'My 1 year Journey With Computer Programing 👨‍💻' },
    { id: '2', title: 'Why I’ve Always Been Curious About Psychedelics 🍄' },
  ];

  return (
    <main>
      <h2 className="blog">My Blogs</h2>
      <ul className="postList">
        {posts.map(post => (
          <li className="postItem" key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
