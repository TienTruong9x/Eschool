window.onload = () => {
  let path = window.location.pathname;
  switch (path) {
    case "/Me/course":
      $("#course").css("left", 0);
      break;
    case "/Admin/trainer":
      $("#trainer").css("left", 0);
      break;
    case "/Admin/projects":
      $("#projects").css("left", 0);
      break;
    case "/Admin/posts":
      $("#post").css("left", 0);
      break;
    default:
      $("#course").css("left", 0);
      break;
  }
};
