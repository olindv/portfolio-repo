export default function authDone() {

    const blogList = document.querySelector(".aside__menu");
    const articles = document.querySelectorAll(".blog__item");
    const links = document.querySelectorAll(".aside__menu-link");
    
    links[0].parentElement.classList.add("aside__menu-item--active");
    
    function windowScroller(reqmove, duration) {
      const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      window.requestAnimationFrame = requestAnimationFrame
    
      const scrollHeight = window.scrollY
      const diffY =
        scrollHeight < reqmove
          ? reqmove - scrollHeight
          : -1 * (scrollHeight - reqmove)
    
      const animate = (draw, duration) => {
        const start = performance.now()
        requestAnimationFrame(function move(time) {
          let timePassed = time - start
          if (timePassed > duration) timePassed = duration
          draw(timePassed)
          if (timePassed < duration) requestAnimationFrame(move)
        })
      }
    
      animate(timePassed => {
        window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1))
      }, duration)
    }
    
    
    function fixed() {
      if (blogList.parentElement.getBoundingClientRect().top <= 0) {
        blogList.classList.remove("aside__menu--relative");
        blogList.classList.add("aside__menu--fixed");
    
      } else {
        blogList.classList.remove("aside__menu--fixed");
        blogList.classList.add("aside__menu--relative");
      }
    }
    
     function checkCurrentArticle() {
       for (let i = 0; i < articles.length; i++) {
         if (
              articles[i].getBoundingClientRect().y < 50 &&
              articles[i].getBoundingClientRect().y >
                -articles[i].getBoundingClientRect().height
            ) {
              const prevArticle = links[i].parentElement.previousElementSibling;
              const nextArticle = links[i].parentElement.nextElementSibling;
    
              if (prevArticle) {
                prevArticle.classList.remove("aside__menu-item--active");
              }
              if (nextArticle) {
                nextArticle.classList.remove("aside__menu-item--active");
              }
    
              links[i].parentElement.classList.add("aside__menu-item--active");
            }
       }
     }
    
    function toArticle(name) {
      for (let item of articles) {
        if (name === item.dataset.name) {
          let scrollPos = item.getBoundingClientRect().top + window.scrollY
          windowScroller(scrollPos, 300)
        }
      }
    }
    
    blogList.addEventListener("click", e => {
      e.preventDefault();
      if (e.target.classList.contains("aside__menu-link") && !e.target.parentElement.classList.contains("aside__menu-item--active")) {
        toArticle(e.target.getAttribute("data-name"));
      }
    });
    
    fixed();
    
    window.addEventListener("scroll", () => {
      fixed();
      checkCurrentArticle();
    });

}

