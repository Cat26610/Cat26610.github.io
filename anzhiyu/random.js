var posts=["2026/06/23/3/","2026/04/30/1/","2026/04/29/网站重置记录/","2026/05/19/微观经济学笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };