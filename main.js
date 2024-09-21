let number = 0

var arr = [
  "images/meme/0.jpg",
  "images/meme/1.jpg",
  "images/meme/2.jpg",
  "images/meme/3.jpg",
  "images/meme/4.jpg",
  "images/meme/5.jpg",
  "images/meme/6.jpg",
  "images/meme/7.jpg",
  "images/meme/8.jpg",
  "images/meme/9.jpg",
  "images/meme/10.jpg",
];


console.log(arr);
renderContent();

function renderContent() {
  var img_src = arr[number];

  var section = document.createElement("section");
  section.setAttribute("id", "section-"+number);
  document.getElementById("content").appendChild(section);

  var img = document.createElement("img");
  img.setAttribute("src", img_src);
  img.setAttribute("alt", " ");
  document.getElementById("section-"+number).appendChild(img);

  console.log(number);
  number++;
};

function handleScroll() {
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollPosition = window.scrollY;

  if (documentHeight - (windowHeight + scrollPosition) <= 100) {
    if (number < arr.length) {
      renderContent();
    }
  }
};

window.addEventListener('scroll', handleScroll);