// import a from './a';
// import './home.less';
// import axios from 'axios';
// axios
//   .get('/bff/app-provision-api/default/banner', {
//     params: {
//       bannerType: 'tmall-banner',
//     },
//   })
//   .then((res) => console.log(res));

var imgsx = document.querySelectorAll('li>img');
var uls = document.querySelector('ul');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
left.addEventListener('click', function () {
  if (parseInt(uls.style.left) < 0) {
    uls.style.left = parseInt(uls.style.left) + 75 + 'vw';
    // console.log(uls.style.left);
  }
});

right.addEventListener('click', function () {
  if (parseInt(uls.style.left) > -225) {
    uls.style.left = parseInt(uls.style.left) - 75 + 'vw';
  }
});
