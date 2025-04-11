import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import ClipLoader from "react-spinners/ClipLoader";

Modal.setAppElement('#root');

const emptyPost = {_id: -1, title: '', body: '', createdAt: ''};

export default function App(){
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title: '', body: ''});
  const [deletePostId, setDeletePostId] = useState(-1);
  const [editPost, setEditPost] = useState(emptyPost);
  const [loading, setLoading] = useState(true);
  
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/posts')
    .then(res => {
      setPosts(res.data);
      setLoading(false);
    })
    .catch(err => console.error('Error fetching posts:', err));
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleEditChange = (e) => {
    setEditPost({...editPost, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', form)
    .then(res => {
      setPosts([...posts, res.data]);
      setForm({title: '', body: ''});
    })
    .catch (err => console.error("Error submitting the post:", err)) ;
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/posts', editPost)
    .then(res => {
      setPosts(res.data);
      setEditPost(emptyPost);
    })
    .catch (err => {
      console.error("Error submitting the post:", err);
      setEditPost(emptyPost);
    })
  }

  const handleDelete = () => {
    axios.delete('http://localhost:5000/posts/' + deletePostId)
    .then(res => {
      setPosts(res.data);
      setDeletePostId(-1);
    })
    .catch(err => {
      console.error('Error deleting post:', err);
      setDeletePostId(-1);
    })
  }

  return (
    <>
      <div style={{padding: '20px', maxWidth: '600px', margin: 'auto'}}>
        <h2>Create a Blog Post</h2>
        <form onSubmit={handleSubmit} style={{marginBottom: '2rem'}}>
          <input
            name="title"
            placeholder='Post Title'
            value={form.title}
            onChange={handleChange}
            style={{width: '100%', padding: '10px', marginBottom: '10px'}}
          />
          <textarea
            name='body'
            placeholder='Post Body'
            value={form.body}
            onChange={handleChange}
            style={{width: '100%', padding: '10px', height: '100px', marginBottom: '10px'}}
          />
          <button type='submit' style={{padding: '10px 20px'}}>Submit Post</button>
        </form>

        <h2>Blog Posts</h2>
        {loading &&
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <ClipLoader/>
          </div>
        }
        {!loading &&
        <>
          {posts.map((post) => (
            <div key={post._id} style={{display: 'flex'}}>
              <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px', flexGrow: 1}}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>Created on {post.createdAt}</p>
              </div>
              <button 
                style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px', cursor: 'pointer'}} 
                onClick={() => setEditPost(post)}
              >
                <h3>Edit</h3>
              </button>
              <button 
                style={{border: '1px solid #ccc', padding: '10px', marginBottom: '15px', cursor: 'pointer'}} 
                onClick={() => setDeletePostId(post._id)}
              >
                <h3>Delete</h3>
              </button>
            </div>
          ))}
        </>
        }

      </div>
      <Modal
        isOpen={deletePostId !== -1}
        onRequestClose={() => {setDeletePostId(emptyPost)}}
        style={modalStyles}
      >
        <div style={{padding: '10px'}}>
          <h2 style={{whiteSpace: 'nowrap'}}>Are you sure?</h2>
          <div style={{display: 'flex'}}>
            <button style={{width: '50%', padding: '5px', cursor: 'pointer'}} onClick={() => handleDelete()}>Yes</button>
            <button style={{width: '50%', padding: '5px', cursor: 'pointer'}} onClick={() => setDeletePostId(-1)}>No</button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={editPost._id !== -1}
        onRequestClose={() => {setEditPost(emptyPost)}}
        style={modalStyles}
      >
        <div style={{padding: '10px'}}>
        <form onSubmit={handleEditSubmit} style={{marginBottom: '2rem'}}>
          <input
            name="title"
            placeholder='Post Title'
            value={editPost.title}
            onChange={handleEditChange}
            style={{width: '100%', padding: '10px', marginBottom: '10px'}}
          />
          <textarea
            name='body'
            placeholder='Post Body'
            value={editPost.body}
            onChange={handleEditChange}
            style={{width: '100%', padding: '10px', height: '100px', marginBottom: '10px'}}
          />
          <button type='submit' style={{padding: '10px 20px'}}>Update Post</button>
          <button style={{padding: '10px 20px', marginLeft: '10px'}} onClick={() => setEditPost(emptyPost)}>Cancel</button>
        </form>
        </div>
      </Modal>
    </>
  );
}