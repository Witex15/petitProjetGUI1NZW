const btns = [...document.querySelectorAll("[data-switch]")].map(v => {
    v.addEventListener("click", (e) => {
        const current = v.src
        const next = v.dataset.switch
        v.src = next
        v.dataset.switch = current
    })
})