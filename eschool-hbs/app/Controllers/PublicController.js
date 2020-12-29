class PublicController {
    //[GET] /Public/grid-course
    getGridViewCourse(req,res,next){
        res.render("course/publicCourse/gridViewCourse",{title:"Course Grid"})
    }

     //[GET] /Public/grid-course
    getListViewCourse(req,res,next){
        res.render("course/publicCourse/listViewCourse",{title:"Course List"})
    }

     //[GET] /Public/grid-course
    getSingleViewCourse(req,res,next){
        res.render("course/publicCourse/singleViewCourse",{title:"Course Single"})
    }

     //[GET] /Public/grid-course
    getStandardBlog(req,res,next){
        res.render("blogs/blogStandard",{title:"Blog Standard"})
    }

     //[GET] /Public/grid-course
    getThreeBlog(req,res,next){
        res.render("blogs/blogThreeColumn",{title:"Blog ThreeColumn"})
    }

     //[GET] /Public/grid-course
    getSingleBlog(req,res,next){
        res.render("blogs/blogSingle",{title:"Blog Single"})
    }
  }
  
  module.exports = new PublicController();