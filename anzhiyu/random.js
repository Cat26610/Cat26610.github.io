var posts=["2026/04/29/网站重置记录/","2026/04/30/1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };