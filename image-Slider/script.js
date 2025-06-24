// const images = document.querySelectorAll("img");
// const nextBtn = document.getElementById("next");
// const prevBtn = document.getElementById("prev");

// let current = 0;

// function showImage(index) {
//   images.forEach((img, i) => {
//     console.log("Current: " + index)
//     console.log("Image Index: " + i)
//     console.log(img)
//     img.classList.remove("active");

//     if (i === index) {
//       img.classList.add("active");
//     }
//   });
// }



// nextBtn.addEventListener("click", () => {
//   current++;
//   if (current >= images.length) {
//     current = 0;
//   }
//   showImage(current);
// });



// prevBtn.addEventListener("click", () => {
//   current--;
//   if (current < 0) {
//     current = images.length - 1;
//   }
//   showImage(current);
// });




// console.log("ahmad");


let i;
let j;
let k;


for(i = 1; i <= 5; i++) {
  let star = ""
  
  for(j = 1; j <= i; j++)
  {
    star = star + "*"
  }
  console.log(star);
  
}

