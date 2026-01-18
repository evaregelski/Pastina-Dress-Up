const pastinaImage = document.getElementById("pastina");
pastinaImage.src = "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fpastina.png?alt=media&token=26f68ebd-4f6a-4697-b8b1-169f5b8854cf";

const categories = {
  
  addOns: {
    images: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Faccessory1.png?alt=media&token=868cf62b-a5f4-4059-a055-543620cc65ef",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Faccessory2.png?alt=media&token=66b474a5-375f-43bf-8cfa-f7985a6a6122",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Faccessory3.png?alt=media&token=65f0bbee-be9c-4a15-8d09-db5cb4ab7db6",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Faccessory4.png?alt=media&token=cd679971-13d8-4c32-a251-3ded828e8424",
    ],
    index: 0,
    element: document.getElementById("addOns"),
    nextBtn: "0nextBtn",
    prevBtn: "0prevBtn",
    noneBtn: "0noneBtn",
  },
  tops: {
    images: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Ftop1.png?alt=media&token=fc6e115e-f45e-41ac-a954-739c5af431dc",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Ftop2.png?alt=media&token=5d097b58-52fe-4c46-b5eb-1b1de93a4f08",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Ftop3.png?alt=media&token=015e4463-0377-425f-8586-8c686d5072eb",
    ],
    index: 0,
    element: document.getElementById("tops"),
    nextBtn: "1nextBtn",
    prevBtn: "1prevBtn",
    noneBtn: "1noneBtn",
  },
  bottoms: {
    images: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fbottom1.png?alt=media&token=8bf08320-3f24-45d9-ad3a-abbc824e8092",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fbottom2.png?alt=media&token=29631360-2b15-4715-a799-89fbfc0b01b6",
      "https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fbottom3.png?alt=media&token=e1d0b3a2-d9c5-45f4-b3ec-8f4bb06141b9",
    ],
    index: 0,
    element: document.getElementById("bottoms"),
    nextBtn: "2nextBtn",
    prevBtn: "2prevBtn",
    noneBtn: "2noneBtn",
  },
};

const bgImages = [
  'https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fyellow.png?alt=media&token=7d63a8e7-56f9-49a6-b314-89c8545a482a',
  'https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fpink.png?alt=media&token=8999e22d-0280-4e6f-bf7e-d08c7d53bbba',
  'https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fblue.png?alt=media&token=1045197d-3a6f-4b8c-9e0d-7a5c8e6f4b2a',
  'https://firebasestorage.googleapis.com/v0/b/codedex-io.appspot.com/o/buildAssets%2FeerNVvkUJAoC8lah2qKs%2Fnight.png?alt=media&token=136d62c2-cc62-4b6c-9fc1-d3bd7a7f3a4b'
];
let bgIndex = 0;
const outfitDisplay = document.querySelector('.outfit-display');

function updateBackground() {
  if (!outfitDisplay) return;
  const val = bgImages[bgIndex];
  const overlay = 'linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.35))';
  if (val.startsWith('linear-gradient')) {
    outfitDisplay.style.background = val;
    outfitDisplay.style.backgroundSize = '';
    outfitDisplay.style.backgroundRepeat = '';
    outfitDisplay.style.backgroundPosition = '';
    // overlay on page background
    document.documentElement.style.background = `${overlay}, ${val}`;
    document.documentElement.style.backgroundSize = '';
    document.documentElement.style.backgroundRepeat = '';
    document.documentElement.style.backgroundPosition = '';
  } else {
    // sets image background for container
    outfitDisplay.style.backgroundImage = `url('${val}')`;
    outfitDisplay.style.backgroundSize = 'cover';
    outfitDisplay.style.backgroundRepeat = 'no-repeat';
    outfitDisplay.style.backgroundPosition = 'center';
    // adds background and semi-transparent white overlay
    document.documentElement.style.background = `${overlay}, url('${val}')`;
    document.documentElement.style.backgroundSize = 'cover';
    document.documentElement.style.backgroundRepeat = 'no-repeat';
    document.documentElement.style.backgroundPosition = 'center';
  }
}

// background buttons
const bgPrev = document.getElementById('bgPrevBtn');
const bgNext = document.getElementById('bgNextBtn');
if (bgPrev) bgPrev.addEventListener('click', () => {
  bgIndex = (bgIndex - 1 + bgImages.length) % bgImages.length;
  updateBackground();
});
if (bgNext) bgNext.addEventListener('click', () => {
  bgIndex = (bgIndex + 1) % bgImages.length;
  updateBackground();
});

updateBackground();

function updateImage(cat) {
  const category = categories[cat];
  category.element.src = category.images[category.index];
}

function setupButtons() {
  for (const cat in categories) {
    const category = categories[cat];
    document.getElementById(category.nextBtn).addEventListener("click", () => {
      category.index = (category.index + 1) % category.images.length;
      updateImage(cat);
    });
    document.getElementById(category.prevBtn).addEventListener("click", () => {
      category.index =
        (category.index - 1 + category.images.length) % category.images.length;
      updateImage(cat);
    });
    if (category.noneBtn) {
      const noneEl = document.getElementById(category.noneBtn);
      if (noneEl) {
        noneEl.addEventListener('click', () => {
          category.index = 0;
          updateImage(cat);
        });
      }
    }
  }
}

// randomize function
function randomize() {
  for (const cat in categories) {
    const category = categories[cat];
    category.index = Math.floor(Math.random() * category.images.length);
    updateImage(cat);
  }
  createConfetti();
}

document.getElementById("random-btn").addEventListener("click", randomize);

// initial image load and button setup
for (const cat in categories) {
  updateImage(cat);
}

setupButtons();

// tabs: show only carousel buttons for selected category
const tabButtons = document.querySelectorAll('.tab');
const containers = {
  addOns: document.querySelector('.addons-container'),
  tops: document.querySelector('.tops-container'),
  bottoms: document.querySelector('.bottoms-container'),
};

function showCategory(cat) {
  for (const key in containers) {
    const el = containers[key];
    if (!el) continue;
    if (key === cat) el.classList.remove('hidden');
    else el.classList.add('hidden');
  }
  tabButtons.forEach((b) => b.classList.toggle('active', b.dataset.cat === cat));
}

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => showCategory(btn.dataset.cat));
});

// default state: start with tops tab active
showCategory('tops');