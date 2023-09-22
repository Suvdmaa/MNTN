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