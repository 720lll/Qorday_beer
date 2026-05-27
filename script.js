const categories = {
  pennye: {
    photos: ["images/Живое пластик.png", "images/Классическое.png", "images/Бавария пластик.png", "images/Баф.png", "images/лунтик.png", "images/жив.png", "images/Чех.png"],
    title: "Пенные напитки",
    text: "У нас представлен большой выбор свежих пенных напитков на любой вкус — от классического светлого пива с мягким и освежающим вкусом до насыщенных тёмных сортов с ярким ароматом. Любители классики найдут привычные варианты, а ценители новых вкусов смогут попробовать интересные сочетания и необычные сорта.",
    text_2: "Каждый напиток отличается свежестью, качеством и насыщенным вкусом. В ассортименте есть лёгкие освежающие варианты и более плотные сорта с ярким ароматом. Мы регулярно обновляем выбор, чтобы каждый смог найти напиток по своему вкусу."
  },

  bezalcoholnye: {
    photos: ["images/нитро1.png", "images/нитро2.png", "images/нитро3.png", "images/нитро4.png", "images/нитро5.png", "images/лемо1.png", "images/лемо2.png", "images/квас1.png", "images/квас2.png", "images/квас3.png"],
    title: "Безалкоголные напитки",
    text: "У нас представлен широкий выбор безалкогольных напитков на любой вкус — от классических освежающих вариантов до ярких и насыщенных вкусовых сочетаний. Каждый напиток отличается приятным вкусом и отлично подходит как для повседневного отдыха, так и для встреч в компании друзей.",
    text_2: "В ассортименте вы найдёте лёгкие газированные напитки, соки, и другие освежающие варианты с фруктовыми и ягодными нотками. Есть как классические вкусы, так и более необычные сочетания для любителей попробовать что-то новое. Мы регулярно обновляем выбор, чтобы каждый смог найти напиток по своему вкусу и настроению.",
  },

  energetiki: {
    photos: ["images/голубой.png", "images/желтый.png", "images/зеленый.png", "images/макс.png", "images/оранжевый.png", "images/розовый.png", "images/синий.png", "images/черный.png", "images/баланс1.png", "images/баланс2.png", "images/баланс3.png"],
    title: "Энергетики",
    text: "У нас представлен широкий выбор энергетических напитков на любой вкус — от классических вариантов с ярким бодрящим эффектом до современных сочетаний с необычными вкусами и ароматами. Каждый напиток отлично освежает, помогает зарядиться энергией и поддерживать активность в течение дня.",
    text_2: "В ассортименте вы найдёте как лёгкие фруктовые вкусы, так и более насыщенные варианты для любителей ярких сочетаний. Есть классические напитки и новинки с необычными вкусами. Мы регулярно обновляем выбор, чтобы каждый смог подобрать вариант под своё настроение.",
  },

  rozliv: {
    photos: ["images/Бавария разливное.png", "images/Бархатное барное Разливное.png", "images/Живое Разливное.png", "images/Крафтовое нефильтр Разливное.png", "images/Кузнец золотой Разливное.png", "images/Кузнец черный Разливное.png", "images/Мюнхен Разливное.png", "images/Немецкое Разливное.png", "images/РедСан Разливное.png"],
    title: "Разливные напитки",
    text: "У нас представлен широкий выбор свежих разливных напитков на любой вкус — от классических освежающих вариантов до насыщенных и ярких вкусовых сочетаний. Каждый напиток отличается высоким качеством, приятным ароматом и идеальной подачей, чтобы дарить удовольствие с первого глотка.",
    text_2: "В ассортименте вы найдёте как лёгкие и освежающие напитки для жаркого дня, так и более насыщенные варианты с выразительным вкусом. Мы регулярно обновляем выбор, чтобы каждый смог найти напиток по своему вкусу и настроению.",
  }
}


const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

function loadCategory(key) {
  const cat = categories[key];
  
  document.querySelector('.opisanie h2').textContent = cat.title;
  document.querySelector('.opisanie .text_1').textContent = cat.text;
  document.querySelector('.opisanie .text_2').textContent = cat.text_2;
  
  swiper.removeAllSlides();
  
  cat.photos.forEach(function(photo, i) {
    swiper.addSlide(i, '<div class="swiper-slide"><img src="' + photo + '"></div>');
  });
}

document.querySelector('.btn_01').addEventListener('click', function() { loadCategory('pennye'); });
document.querySelector('.btn_02').addEventListener('click', function() { loadCategory('bezalcoholnye'); });
document.querySelector('.btn_03').addEventListener('click', function() { loadCategory('energetiki'); });
document.querySelector('.btn_04').addEventListener('click', function() { loadCategory('rozliv'); });

loadCategory('pennye');

// получить все кнопки меню
const btns = document.querySelectorAll('.btn_menu');

// при клике на кнопку
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // убрать active у всех
    btns.forEach(function(b) { b.classList.remove('active'); });
    // добавить active только этой
    btn.classList.add('active');
  });
});


function openMenu(btn) {
  const dropdown = btn.nextElementSibling;
  dropdown.classList.add('open');
  btn.classList.add("active");
}

function closeMenu(btn) {
  const dropdown = btn.parentElement;
  dropdown.classList.remove('open');
  dropdown.previousElementSibling.classList.remove('active');
}



const cities = [
  { id: 'korday', name: '✈︎ Кордай', photos: ['images/bavaria rozliv.png', '/images/bavaria plastik.png', 'images/живое Разливное.png', 'images/живое пластик.png', 'images/Кузнец золотой Разливное.png', 'images/кузнец золотой.png', 'images/Мюнхен Разливное.png', 'images/жив.png', 'images/шахта.png', 'images/шахта кор.png', 'images/черный.png', 'images/желтый.png', 'images/нитро1.png', 'images/нитро2.png', 'images/нитро3.png', 'images/нитро4.png', 'images/нитро5.png', 'images/kvas1.png', 'images/kvas2.png', 'images/kvas3.png'] },
  { id: 'almaty', name: '✈︎ Алматы', photos: ['images/Классическое.png','images/чех.png', 'images/bavaria plastik.png', 'images/РедСан Разливное.png', 'images/Мюнхен Разливное.png', 'images/жив.png', 'images/шахта.png', 'images/черный.png', 'images/желтый.png', 'images/синий.png'] },
  { id: 'taraz', name: '✈︎ Тараз', photos: ['images/buff.png', 'images/жив.png', 'images/шахта.png', 'images/bavaria plastik.png', 'images/живое Разливное.png', 'images/нитро2.png', 'images/нитро3.png', 'images/черный.png', 'images/макс.png', 'images/Кузнец черный Разливное.png'] },
  { id: 'shymkent', name: '✈︎ Шымкент', photos: ['images/Чех.png', 'images/шахта кор.png', 'images/Живое пластик.png', 'images/кузнец золотой.png', 'images/bavaria plastik.png', 'images/buff.png', 'images/kvas1.png', 'images/kvas2.png', 'images/макс.png', 'images/оранжевый.png'] },
  { id: 'balhash', name: '✈︎ Балхаш', photos: ['images/buff.png', 'images/luntik.png', 'images/жив.png', 'images/нитро1.png', 'images/нитро2.png', 'images/нитро3.png', 'images/черный.png','images/макс.png'] },
  { id: 'kostanay', name: '✈︎ Костанай', photos: ['images/lemo1.png', 'images/lemo2.png', 'images/голубой.png', 'images/зеленый.png', 'images/баланс1.png', 'images/баланс2.png', 'images/баланс3.png'] },
]

function openCity(id) {
  const city = cities.find(c => c.id === id);
  
  document.getElementById('city_name').textContent = city.name;

  const container = document.getElementById('city_photos');
  container.innerHTML = '';
  
  city.photos.forEach(function(photo) {
    const img = document.createElement('img');
    img.src = photo;
    img.className = 'img_map_1';
    container.appendChild(img);
  });

  document.getElementById('city_dropdown').classList.add('open');
}

function closeCity() {
  document.getElementById('city_dropdown').classList.remove('open');
}