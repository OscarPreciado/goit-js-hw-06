const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// images.forEach(function (elemento) {
//   const lis = document.createElement('li')
//   console.log(lis)
//   const tagImg = document.createElement('img')
//   tagImg.src = elemento.url;
//   tagImg.alt = elemento.alt;
//   console.log(tagImg)
// });



let htmlImage = "";
const selector = document.querySelector('.gallery')  

images.forEach(function (elemento) {
htmlImage += `<li> <img src="${elemento.url}" alt="${elemento.alt}" width="200px"/></li>"`
});

selector.insertAdjacentHTML("beforeend", htmlImage)
selector.insertAdjacentHTML("beforebegin", "<h2>Galeria</h2>")

// const selector = document.querySelector('.gallery');  

// for (const image of images) {
//   htmlImage += `<li><img src="${image.url}" alt="${image.alt}" width="200px"/></li>`;
// }

// selector.insertAdjacentHTML("beforeend", htmlImage)
// selector.insertAdjacentHTML("beforebegin", "<h2>Galeria</h2>")

