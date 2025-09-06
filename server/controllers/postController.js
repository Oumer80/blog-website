import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.id;

    const newPost = new Post({ title, content, author });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "username");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    const { title, content } = req.body;
    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id){
      return res.status(403).json({ message: "Unauthorized" });
    }
    await post.deleteOne();

    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};