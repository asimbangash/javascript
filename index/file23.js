const btns = document.querySelectorAll(".my-button button");
// btns.addEventListener("click", function () {
//     console.log("ghjf");
// })

// loop for all
// for (let btn of btns) {
//     btn.addEventListener("click", function () {
//         console.log(this.textContent);
//     })
// }

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // console.log(this.textContent);
        // console.log(this);
        console.log(e.currentTarget);
    })
})