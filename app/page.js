const Home = () => {
  const posts = [
    { id: '1', title: 'How to Build a Blog with Next.js', linkedinPostId: '12345', linkedinUrl: 'https://www.linkedin.com/posts/12345' },
    { id: '2', title: 'React State Management for Beginners', linkedinPostId: '67890', linkedinUrl: 'https://www.linkedin.com/posts/67890' },
    // Add more posts as needed
  ];

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {/* Linking to the individual post page dynamically */}
            <a href={`/posts/${post.id}`}>{post.title}</a>
            <p>LinkedIn Post ID: {post.linkedinPostId}</p>
            {/* Add the URL as a clickable link */}
            <p>
              <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                View LinkedIn Post
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
