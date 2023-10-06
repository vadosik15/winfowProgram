// var s = Snap(".map");
// var regions = s.selectAll("path");

// var text = s.text(-100, -100, ""); // Позиція тексту поза видимою областю

// regions.forEach(function (region, index) {
//   let originalScale = region.transform().localMatrix;
//   let shadow;
//   let shadowGroup;
//   let regionName = region.attr('title'); // Отримайте назву області з атрибуту 'title'

//   region.hover(
//     function () {
//       shadowGroup = s.group();
//       shadow = region.paper.filter(Snap.filter.shadow(0, 0, 5, 'gray', 0.5));

//       shadowGroup.add(region);
//       shadowGroup.attr({ filter: shadow });
//       region.animate({ transform: "s1.1", opacity: 1 }, 300);

//       // Оновити текстовий об'єкт та позицію при наведенні
//       text.attr({ x: region.getBBox().cx, y: region.getBBox().cy, text: regionName, fill: "white" });

//       shadowGroup.add(text);
//       shadowGroup.appendTo(s);
//     },
//     function () {
//       region.animate({ transform: originalScale, opacity: 1 }, 300);
//       shadowGroup.remove();
//     }
//   );

//   // Додайте подію наведення на порожню область, лише якщо мишка насправді наведена на порожню область
//   region.mouseover(function () {
//     shadowGroup = s.group();
//     shadow = region.paper.filter(Snap.filter.shadow(0, 0, 5, 'gray', 0.5));

//     shadowGroup.add(region);
//     shadowGroup.attr({ filter: shadow });
//     region.animate({ transform: "s1.1", opacity: 1 }, 300);

//     // Оновити текстовий об'єкт та позицію при наведенні на порожню область
//     text.attr({ x: region.getBBox().cx, y: region.getBBox().cy, text: "Empty", fill: "black" });

//     shadowGroup.add(text);
//     shadowGroup.appendTo(s);
//   });

//   // Додайте подію відведення мишки на порожню область, лише якщо мишка насправді наведена на порожню область
//   region.mouseout(function () {
//     region.animate({ transform: originalScale, opacity: 1 }, 300);
//     shadowGroup.remove();
//   });
// });


// document.querySelectorAll('.enlarge').forEach(function (path) {
//   path.addEventListener('mouseenter', function () {
//     path.setAttribute('transform', ' scale(1.2)');
//   });

//   path.addEventListener('mouseleave', function () {
//     path.setAttribute('transform', 'translate(0, 0) scale(1)');
//   });
// });


var svg = document.querySelector("svg");
var paths = document.querySelectorAll(".enlarge");

var i = paths.length;
while (i--) {
  paths[i].addEventListener("mouseover", function (e) {
    svg.appendChild(e.target);
    const text = document.querySelector(`#${e.target.id + "text"}`)
    svg.appendChild(text)

  });
}



const map = document.querySelector('.map');
// const infoPanel = document.querySelector('.info-panel');
// const areaName = document.getElementById('area-name');
// let isZoomed = false;
// let zoomedViewBox;
// let selectedArea = null;

// // Отримайте початковий viewBox
// const initialViewBox = map.getAttribute('viewBox');

// // Додайте обробник події click до кожного <path> елементу
// map.querySelectorAll('path').forEach((path) => {
//     path.addEventListener('click', (event) => {
//         const clickedAreaName = path.getAttribute('title');

//         if (!isZoomed || selectedArea !== clickedAreaName) {
//             // Отримайте розмір обраного <path> елемента
//             const bbox = path.getBBox();

//             // Розрахуйте новий viewBox для збільшення масштабу та центрування на обраній області
//             const newViewBoxX = bbox.x - 50; // Ви можете встановити відступ
//             const newViewBoxY = bbox.y - 50; // Ви можете встановити відступ
//             const newViewBoxWidth = bbox.width + 100; // Ви можете встановити відступ
//             const newViewBoxHeight = bbox.height + 100; // Ви можете встановити відступ

//             zoomedViewBox = `${newViewBoxX} ${newViewBoxY} ${newViewBoxWidth} ${newViewBoxHeight}`;
//             map.setAttribute('viewBox', zoomedViewBox);
//             isZoomed = true;
//             selectedArea = clickedAreaName;
//         } else {
//             // Приберіть приближення при подвійному кліку на ту ж область
//             map.setAttribute('viewBox', initialViewBox);
//             areaName.textContent = '';
//             isZoomed = false;
//             selectedArea = null;
//         }
//     });
// });

// // Додайте обробник події двійного кліку для повернення до початкового viewBox
// map.addEventListener('dblclick', () => {
//     map.setAttribute('viewBox', initialViewBox);
//     areaName.textContent = '';
//     isZoomed = false;
//     selectedArea = null;
// });
let pointHeight = 6;
let pointWidth = 20;
function scalePositions() {
  let blockHeight = map.getBoundingClientRect().height;
  console.log('Висота блока:', blockHeight, 'px');
  if (window.screen.width > 1375 ) {
    pointWidth = 20;
    console.log('shirina', window.innerWidth)
    scale = 1.9;
    console.log(scale);
    pointHeight = 150;
  }
  else if (window.screen.width < 1375 && window.screen.width > 1128 ) {
    pointWidth = 9
    console.log('shirina < 1338', window.screen.width)
    scale = 1.9;
    console.log(scale);
    pointHeight = 150;
  }
  else if (window.screen.width < 1128 && window.screen.width > 945 ) {
    scale = 1.7;
    console.log('shirina < 1128', window.screen.width);
    pointWidth = 0.007 * window.screen.width;;
    pointHeight = 150;
  }
  else if (window.screen.width < 945 && window.screen.width > 750 ) {
    scale = 2;
    console.log('shirina < 945', window.screen.width)
    pointWidth = 6;
    pointHeight = 150;
  }
  else if (window.screen.width <= 750 && window.screen.width > 650 ) {
    scale = 2;
    console.log('shirina < 750', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    console.log('pointWidth ',pointWidth);
    pointHeight = 0.08* window.screen.width;
    console.log('pointHeight ',pointHeight);

  }
  else if (window.screen.width < 650 && window.screen.width > 570 ) {
    scale = 2;
    console.log('shirina < 650', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    pointHeight = blockHeight * 0.04;
    console.log ('blockHeight' , blockHeight * 0.0000001)
    console.log('pointHeight ',pointHeight);

  }
  else if (window.screen.width < 570 && window.screen.width > 500) {
    scale = 2.3;
    console.log('shirina < 570', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    pointHeight = -0.03 * window.screen.width;
  }
  else if (window.screen.width < 500 && window.screen.width > 450) {
    scale = 2.4;
    console.log('shirina < 500', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    pointHeight = -0.03 * window.screen.width;
  }
  else if (window.screen.width < 450 && window.screen.width > 400) {
    scale = 2.4;
    console.log('shirina < 450', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    pointHeight = -blockHeight / 6; 
  }
  else if (window.screen.width < 400 && window.screen.width > 350) {
    scale = 2;
    console.log('ura < 400', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    pointHeight = -blockHeight / 6;
  }
  else if (window.screen.width < 350) {
    scale = 2;
    console.log('ura 350', window.screen.width)
    pointWidth = 0.003 * window.screen.width;
    pointHeight = -0.1 * window.screen.width;
  }
}

scalePositions()

window.addEventListener('resize', () => {
  scalePositions()
})



const slider = document.querySelector('.slider')
const cityName = document.querySelector('.info-block__cities-name')
const infoBlock = document.querySelector('.info-block')
const footer = document.querySelector('footer')
const img = document.querySelector('.region');
const areas = document.querySelectorAll('path');
let hasBeenClicked = false;
let indexOfOblast = '';

const regionsArray = document.querySelectorAll('.map path')
console.log(regionsArray)

const opacityMap = new Map();
areas.forEach((area) => {
area.addEventListener('mouseover', ()=> {
  area.classList.add('hover')
})
area.addEventListener('mouseout', ()=> {
  area.classList.remove('hover')
})
  opacityMap.set(area, 1);
  function handleRegions(bool) {
    if (bool) {
      setTimeout(() => {
        const pathRect = area.getBoundingClientRect();
        const pathX = pathRect.left;
        const pathY = pathRect.top;
        img.style.width = area.getBoundingClientRect().width + 'px';
        img.style.height = area.getBoundingClientRect().height + 'px';
        footer.style.top = Math.round(pathY) + 'px';
        footer.style.left = Math.round(pathX) + 'px';
      }, 1500)
      setTimeout(() => {
        footer.classList.add('active-footer');
        infoBlock.classList.add('active-footer');
        slider.classList.add('active-footer');
      }, 1600)
    } else {
      slider.classList.remove('active-footer');
      infoBlock.classList.remove('active-footer');
      footer.classList.remove('active-footer')
    }
  }


  area.addEventListener('click', () => {
    const targetX = window.innerWidth / pointWidth;
    const targetY = pointHeight;
    if (!hasBeenClicked) {
      hasBeenClicked = true;
      indexOfOblast = area.id;
      console.log(indexOfOblast)
      anime({
        targets: area,
        translateX: targetX - area.getBBox().x - area.getBBox().width / 2,
        translateY: targetY - area.getBBox().y - area.getBBox().height / 2,
        scale: scale,
        duration: 1000,
        filter: 'drop-shadow(0px 0px 10px #2d71bc)',
        fps: 60,
      });
      handleRegions(true)
      areas.forEach((item) => {
        if (item.id !== indexOfOblast) {
          item.classList.add('path-highlighted');
          item.classList.add('none-active');
        } else {
          item.classList.remove('path-highlighted');
          item.classList.remove('none-active');
        }
      })
      document.querySelector(`#${area.id}text`).style.display = 'none';
      imageRegion()
    } else {
      hasBeenClicked = false;
      anime({
        targets: area,
        scale: 1,
        translateX: 0,
        translateY: 1,
        duration: 1000,
        fps: 60,
        complete: function () {
          area.style.transform = '';
          area.style.filter = '';
          indexOfOblast = '';
          area.classList.remove('hover');
        },
      });

      handleRegions(false)
      areas.forEach((item) => {

        item.classList.remove('path-highlighted');
        item.classList.remove('none-active');
      })
      document.querySelector(`#${area.id}text`).style.display = 'flex';

      imageRegion()
    }
  });
});

function imageRegion() {
  if (indexOfOblast !== '') {
    img.src = `./images/${indexOfOblast}.svg`
    cityName.innerHTML = `${indexOfOblast} Region`
  }
}
