const Home = () => {
     const posts = [
       { id: '1', title: 'First Post' },
       { id: '2', title: 'Second Post' },
       // Add more posts as needed
     ];
   
     return (
       <div>
         <h1>My Blog</h1>
         <ul>
           {posts.map(post => (
             <li key={post.id}>
               <a href={`/posts/${post.id}`}>{post.title}</a>
             </li>
           ))}
         </ul>
       </div>
     );
   };
   
   export default Home;
   