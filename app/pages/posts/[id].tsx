import { useState } from 'react';

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      {/* Displaying dynamic title and LinkedIn Post ID */}
      <h1>{post.title}</h1>
      <p><strong>LinkedIn Post ID:</strong> {post.linkedinPostId}</p>
      <p>{post.content}</p>

      {/* Link to the LinkedIn Post */}
      <p>
        <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
          View LinkedIn Post
        </a>
      </p>

      <div>
        <h2>Comments</h2>
        <textarea 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment"
        />
        <button onClick={handleCommentSubmit}>Post Comment</button>
        
        <div>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = [
    { id: '1', title: 'How to Build a Blog with Next.js', linkedinPostId: '12345', linkedinUrl: 'https://www.linkedin.com/posts/12345', content: 'Content for first post.' },
    { id: '2', title: 'React State Management for Beginners', linkedinPostId: '67890', linkedinUrl: 'https://www.linkedin.com/posts/67890', content: 'Content for second post.' },
    // Add more posts as needed
  ];

  const paths = posts.map(post => ({ params: { id: post.id } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const posts = [
    { id: '1', title: 'How to Build a Blog with Next.js', linkedinPostId: '12345', linkedinUrl: 'https://www.linkedin.com/posts/12345', content: 'Content for first post.' },
    { id: '2', title: 'React State Management for Beginners', linkedinPostId: '67890', linkedinUrl: 'https://www.linkedin.com/posts/67890', content: 'Content for second post.' },
    // Add more posts as needed
  ];

  const post = posts.find(post => post.id === params.id);

  return {
    props: {
      post
    }
  };
};

export default Post;
