import { useEffect, useState } from "react";
import "./App.css";

interface Post {
  id: string;
  title: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const posts = await response.json();
      setPosts(posts);
    };

    void getPosts();

    return function () {
      setPosts([]);
    };
  }, []);

  return (
    <div>
      {posts.length
        ? posts.map((post, idx) => (
            <li key={post.id}>
              {idx + 1}.{post.title}
            </li>
          ))
        : "Нет постов"}
    </div>
  );
}

export default App;
