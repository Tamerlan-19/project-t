//ferrari image
const ferrari_text = document.querySelector(".list-item-thumb-uper_text1")
const ferrari_img = document.querySelector(".ferrari-img")
//design image
const design_text = document.querySelector(".list-item-thumb-uper_text2")
const design_img = document.querySelector(".design-img")
//phone image
const phone_text = document.querySelector(".list-item-thumb-uper_text3")
const phone_img = document.querySelector(".phone-img")
//crint image
const crint_text = document.querySelector(".list-item-thumb-uper_text4")
const crint_img = document.querySelector(".crint-img")


//ferrari image
ferrari_img.addEventListener("click", () => {
    ferrari_text.classList.toggle("active-text")
})
ferrari_text.addEventListener("click", () => {
    ferrari_text.classList.toggle("active-text")
})
//design image
design_img.addEventListener("click", () => {
    design_text.classList.toggle("active-text")
})
design_text.addEventListener("click", () => {
    design_text.classList.toggle("active-text")
})
//phone image
phone_img.addEventListener("click", () => {
    phone_text.classList.toggle("active-text")
})
phone_text.addEventListener("click", () => {
    phone_text.classList.toggle("active-text")
})
//crint image
crint_img.addEventListener("click", () => {
    crint_text.classList.toggle("active-text")
})
crint_text.addEventListener("click", () => {
    crint_text.classList.toggle("active-text")
})