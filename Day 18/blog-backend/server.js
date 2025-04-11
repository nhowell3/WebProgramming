const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', {
    // These are deprecated and were giving warnings, so they are commented out
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB error', err));

// Define schema and model
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdAt: String,
});;

const Post = mongoose.model('Post', postSchema);

// Add routes...

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req, res) => {
    try {
        const {title, body} = req.body;
        const date = new Date();
        const createdAt = date.toDateString();
        const newPost = new Post({title, body, createdAt});
        await newPost.save();
        res.json(newPost);
    } catch (err) {
        res.status(500).json({message: 'Failed to save post!'});
    }
});

app.put('/posts',  async (req, res) => {
    try {
        const {_id, title, body, createdAt} = req.body;
        await Post.updateOne({_id: _id}, {title: title, body: body, createdAt: createdAt});
        const posts = await Post.find();
        res.json(posts);
        
    } catch (err) {
        res.status(500).json({message: 'Failed to update post'});
    }
})

app.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Post.deleteOne({_id: id});
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({message: 'Failed to delete post'});
    }
})

// Start server!
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
