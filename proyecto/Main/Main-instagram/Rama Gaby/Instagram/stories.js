const allStories = [
  {
    thumbUrl: "img/fotos_perfil/perfil1.jpg",
    imageUrl: "img/stories/uno.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil5.jpg",
    imageUrl: "img/stories/dos.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil2.jpg",
    imageUrl: "img/stories/tres.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil6.jpg",
    imageUrl: "img/stories/cuartojpg.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil3.jpg",
    imageUrl: "img/stories/quinto.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil7.jpg",
    imageUrl: "img/stories/sexto.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil4.jpg",
    imageUrl: "img/stories/septimo.jpg",
    title: "Responde a...",
  },

  {
    thumbUrl: "img/fotos_perfil/perfil8.jpg",
    imageUrl: "img/stories/octavo.jpg",
    title: "Titulo No.5",
  },
];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");
const likeBottom = document.querySelector(".story-full .like-bottom");

let currentIndex = 0;
let timer;

allStories.forEach((s, i) => {
  const content = document.createElement("div");
  content.classList.add("content");

  const img = document.createElement("img");
  img.setAttribute("src", s.thumbUrl);

  storiesContainer.appendChild(content);
  content.appendChild(img);

  content.addEventListener("click", () => {
    currentIndex = i;
    storyFull.classList.add("active");
    storyFullImage.setAttribute("src", s.imageUrl);

    if (!s.title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = s.title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  });
});

closeBtn.addEventListener("click", () => {
  storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  }
});

const nextStory = () => {
  if (currentIndex < allStories.length - 1) {
    currentIndex += 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }
  }
};

rightArrow.addEventListener("click", () => {
  nextStory();
  clearInterval(timer);
  timer = setInterval(nextStory, 5000);
});

let isFilled = false;

likeBottom.addEventListener("click", () => {
  const like = likeBottom.querySelector("svg");
  if (isFilled) {
    like.setAttribute("fill", "none");
  } else {
    like.setAttribute("fill", "white");
  }

  isFilled = !isFilled;
});
