const scrollDown = document.querySelector("#scroll_down");
const block1 = document.querySelector("#block1");

scrollDown.addEventListener("click", ()=>{
    const block1Position = block1.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: block1Position,
        left: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    let sections = [
      { id: "header", offset: document.getElementById("header").offsetTop },
      { id: "block1", offset: document.getElementById("block1").offsetTop },
      { id: "block2", offset: document.getElementById("block2").offsetTop },
      { id: "block3", offset: document.getElementById("block3").offsetTop },
    ];

    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];

      if (
        scrollPosition >= section.offset &&
        (i === sections.length - 1 ||
          scrollPosition < sections[i + 1].offset)
      ) {
        let links = document.querySelectorAll(".quick a");
        links.forEach(function (link) {
          link.classList.remove("active");
        });

        let activeLink = document.querySelector(
          '.quick a[href="#' + section.id + '"]'
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    }
  });
