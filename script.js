const text = document.querySelector(".text");
const image = document.querySelector(".image");
const fullname = document.querySelector(".fullname");
const city = document.querySelector(".city");

const getText = async () => {
  const res = await fetch("https://shortstories-api.onrender.com/");
  const data = await res.json();
  text.innerText = data.story;
};
const getUser = async () => {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  image.style.backgroundImage = `url(${data.results[0].picture.medium})`;
  fullname.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
  city.innerText = `${data.results[0].location.city}, ${data.results[0].location.country}`;
};

const tes = document.querySelector(".tes");
const bar = document.querySelector(".bar");

const tesBox = () => {
  text.innerText = "Loading...";
  tes.classList.remove("showTex");
  bar.classList.remove("showBar");
  setTimeout(() => {
    getText();
    getUser();

    tes.classList.add("showTex");
    bar.classList.add("showBar");
  }, 100);
};
tesBox();
setInterval(() => {
  tesBox();
}, 11100);
