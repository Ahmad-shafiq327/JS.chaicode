const images = document.querySelectorAll("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

function showImage(index) {
  images.forEach((img, i) => {

    img.classList.remove("active");

    if (i === index) {
      img.classList.add("active");
    }
  });
}



nextBtn.addEventListener("click", () => {
  current++;
  if (current >= images.length) {
    current = 0;
  }
  showImage(current);
});



prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }
  showImage(current);
});




console.log("ahmad");






function generateOtp(num) {
  let otp = "";
  for(i = 0; i < num; i++) {
    otp = otp + Math.floor(Math.random() * 10)
  }
  return otp
}

let result = generateOtp(6)
console.log(result);



let a;
let b;

for(a = 5; a >= 1; a--) {
  let star = ""
  for(b = 1; b <= a; b++) {
    star = star + "*"
  }
  console.log(star);
  
}


