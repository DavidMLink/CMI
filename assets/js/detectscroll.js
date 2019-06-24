let observer = new IntersectionObserver(entries => {
  console.log(entries);
  if (entries[0].boundingClientRect.y < 0) {
    console.log("Past 100px!");
    var element = document.getElementsByClassName("MiniNav");
    element.classList.add("minimize-nav");
  } else {
    console.log("Not past 100px");
    var element = document.getElementsByClassName("MiniNav");
    if (true) {
      element.classList.remove("minimize-nav");
    }
  }
});
observer.observe(document.querySelector("#pixel-to-watch"));
