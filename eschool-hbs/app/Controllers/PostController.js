const Post = require("../Models/Post.model");
class PostsController {
  //[GET] /Admin/postss
  getPosts(req, res, next) {
    Post.find({}).then((posts) => {
      res.render("posts/posts", {
        title: "Posts | Nguyễn Tiến Trường",
        posts,
      });
    });
  }

  //[GET] /Admin/posts/add
  addPosts(req, res, next) {
    res.render("posts/addPosts", {
      title: "Add posts | Nguyễn Tiến Trường",
    });
  }

  //[POST] /Admin/posts/add
  addPostsPost(req, res, next) {
    let post = new Post(req.body);
    post.save().then(() => {
      res.redirect("/Admin/posts");
    });
  }

  //[GET] /Admin/posts/edit/:slug
  editPosts(req, res, next) {
    Post.findOne({ slug: req.params.slug }).then((post) => {
      res.render("posts/editPosts", {
        title: "Edit posts | Nguyễn Tiến Trường",
        post,
      });
    });
  }

  //[PUT] /Admin/posts/edit/:slug
  editPostsPut(req, res, next) {
    Post.updateOne({ slug: req.params.slug }, req.body).then(() => {
      res.redirect("/Admin/posts");
    });
  }

  //[DELETE]] /Admin/posts/delete/:id
  deletePosts(req, res, next) {
    Post.deleteOne({ _id: req.params.id }).then(() => {
      res.redirect("/Admin/posts");
    });
  }
}

module.exports = new PostsController();
