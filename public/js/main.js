let number = 0
var arr = arr.split(',');

console.log(arr);


renderContent();

function renderContent() {
  var img_src = "images/meme/" + arr[number];

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