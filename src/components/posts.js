import { useState, useEffect } from 'react';
import { FieldValue } from '../lib/firebase';
import Post from './post';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FieldValue.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div className="posts">
      {posts.length > 0 ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <div className="no__postError">No posts</div>
      )}
    </div>
  );
}
