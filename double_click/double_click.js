const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  //   console.log("clicks");
  if (e.detail == 2) {
    console.log("double click");
  } else {
    console.log("single clicked");
  }
});
