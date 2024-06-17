const box = document.querySelector('.box')
let cursor, srolls
let mousedown = false

box.addEventListener('mousedown', (e) => {
    mousedown = true
    cursor = e.pageX - box.offsetLeft
    srolls = box.scrollLeft
    console.log("mouseDown" + cursor);
})

box.addEventListener("mouseup", (e) => {
    mousedown = false
})

box.addEventListener("mouseleave", (e) => {
    mousedown = false
})

box.addEventListener('mousemove', (e) => {
    if (!mousedown) return;

    const x = e.pageX - box.offsetLeft;
    const walk = (x - cursor) * 3;
    console.log(walk);
    box.scrollLeft = srolls - walk;
});