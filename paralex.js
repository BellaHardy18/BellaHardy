window.addEventListener("scroll", function() {
    const distance = window.scrollY
    document.querySelector("parallax-section").style.transform = `translateY(${distance *
      1}px)`
    document.querySelector(
      ".pp"
    ).style.transform = `translateY(${distance * 0.3}px)`
    setTimeout(() => {
      document.querySelector("kk").classList.add("animate-me")
    }, 400)
  })
  