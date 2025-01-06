let imgContainer = document.querySelector(".mainContainer");
toAddElement();
function toAddElement() {
  for (let i = 0; i < 30; i++) {
    let createEl = document.createElement("div");
    createEl.classList.add("containerforpop");
    imgContainer.append(createEl);
  }
}

let ImgAdd = document.querySelectorAll(".containerforpop");

ImgAdd.forEach((eachValue) => {
  let imgl = document.createElement("img");
  eachValue.append(imgl);
});

const movies = [
  {
    name: "Inception",
    url: "https://image.tmdb.org/t/p/w500/your_inception_poster_path",
    rating: 8.8,
    summary:
      "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    description:
      "Directed by Christopher Nolan, this sci-fi thriller dives into the world of dreams and subconscious manipulation. A team of specialists navigates layers of dreams to plant an idea into a target's mind.",
  },
  {
    name: "3 Idiots",
    url: "https://image.tmdb.org/t/p/w500/your_3idiots_poster_path",
    rating: 8.4,
    summary:
      "Three engineering students navigate life, friendship, and their quest for true success.",
    description:
      "This Indian comedy-drama, directed by Rajkumar Hirani, explores the pressures of the educational system while delivering a heartfelt story about following your passions.",
  },
  {
    name: "Parasite",
    url: "https://image.tmdb.org/t/p/w500/your_parasite_poster_path",
    rating: 8.6,
    summary: "A poor family schemes to infiltrate a wealthy household.",
    description:
      "Bong Joon-ho's masterpiece blends dark comedy, thriller, and social commentary, highlighting the stark divide between the rich and the poor.",
  },
  {
    name: "Your Name",
    url: "https://image.tmdb.org/t/p/w500/your_yourname_poster_path",
    rating: 8.4,
    summary:
      "Two teenagers mysteriously swap bodies and form a deep connection.",
    description:
      "This visually stunning anime film by Makoto Shinkai explores themes of love, fate, and time through an emotionally captivating story.",
  },
  {
    name: "The Dark Knight",
    url: "https://image.tmdb.org/t/p/w500/your_thedarkknight_poster_path",
    rating: 9.0,
    summary:
      "Batman faces off against the Joker, who wreaks havoc on Gotham City.",
    description:
      "Christopher Nolan's critically acclaimed superhero film features Heath Ledger's iconic performance as the Joker, redefining the genre with its dark and complex narrative.",
  },
  {
    name: "Dangal",
    url: "https://image.tmdb.org/t/p/w500/your_dangal_poster_path",
    rating: 8.4,
    summary: "A father trains his daughters to become wrestling champions.",
    description:
      "Based on a true story, this Indian sports drama directed by Nitesh Tiwari portrays themes of empowerment and perseverance.",
  },
  {
    name: "Oldboy",
    url: "https://image.tmdb.org/t/p/w500/your_oldboy_poster_path",
    rating: 8.4,
    summary:
      "A man seeks revenge after being imprisoned for 15 years without explanation.",
    description:
      "This South Korean neo-noir thriller by Park Chan-wook is a tale of vengeance, mystery, and shocking revelations, renowned for its intense storytelling and memorable twists.",
  },
  {
    name: "Spirited Away",
    url: "https://image.tmdb.org/t/p/w500/your_spiritedaway_poster_path",
    rating: 8.6,
    summary:
      "A young girl is trapped in a magical world and must save her parents.",
    description:
      "Directed by Hayao Miyazaki, this Studio Ghibli masterpiece is a visually enchanting journey filled with complex characters and imaginative settings.",
  },
  {
    name: "Avengers: Endgame",
    url: "https://image.tmdb.org/t/p/w500/your_avengersendgame_poster_path",
    rating: 8.4,
    summary: "The Avengers assemble for one final stand against Thanos.",
    description:
      "This Marvel Cinematic Universe epic directed by the Russo brothers concludes a decade-long saga with action, emotion, and incredible visual effects.",
  },
  {
    name: "Sholay",
    url: "https://image.tmdb.org/t/p/w500/your_sholay_poster_path",
    rating: 8.1,
    summary:
      "Two outlaws are hired to protect a village from a ruthless bandit.",
    description:
      "An iconic Indian film directed by Ramesh Sippy, blending action, drama, and friendship in a gripping narrative that became a cultural phenomenon.",
  },
  {
    name: "Train to Busan",
    url: "https://image.tmdb.org/t/p/w500/your_traintobusan_poster_path",
    rating: 7.6,
    summary: "Passengers struggle to survive a zombie outbreak on a train.",
    description:
      "This South Korean horror-thriller by Yeon Sang-ho is an emotional and adrenaline-pumping story about survival and sacrifice.",
  },
  {
    name: "Rashomon",
    url: "https://image.tmdb.org/t/p/w500/your_rashomon_poster_path",
    rating: 8.2,
    summary: "A crime is recounted from multiple contradictory perspectives.",
    description:
      "Akira Kurosawa's classic explores themes of truth and perception, pioneering storytelling techniques that influenced global cinema.",
  },
  {
    name: "Titanic",
    url: "https://image.tmdb.org/t/p/w500/your_titanic_poster_path",
    rating: 7.8,
    summary: "A love story unfolds aboard the ill-fated RMS Titanic.",
    description:
      "James Cameron's romantic epic is a visual spectacle and a heartfelt drama, blending history and fiction seamlessly.",
  },
  {
    name: "Lagaan",
    url: "https://image.tmdb.org/t/p/w500/your_lagaan_poster_path",
    rating: 8.1,
    summary:
      "Villagers challenge British officers to a cricket match to avoid taxes.",
    description:
      "This Indian epic sports drama directed by Ashutosh Gowariker combines historical elements with an inspiring story of unity and determination.",
  },
  {
    name: "Memories of Murder",
    url: "https://image.tmdb.org/t/p/w500/your_memoriesofmurder_poster_path",
    rating: 8.1,
    summary:
      "Detectives struggle to solve a series of brutal murders in rural Korea.",
    description:
      "Bong Joon-ho's chilling crime thriller blends dark humor and gripping tension, based on Korea's first serial murders.",
  },
  {
    name: "My Neighbor Totoro",
    url: "https://image.tmdb.org/t/p/w500/your_myneighbortotoro_poster_path",
    rating: 8.2,
    summary:
      "Two sisters befriend a magical forest spirit during a family crisis.",
    description:
      "Hayao Miyazaki's heartwarming film captures the innocence of childhood and the magic of nature, becoming a beloved classic.",
  },
  {
    name: "The Shawshank Redemption",
    url: "https://image.tmdb.org/t/p/w500/your_shawshank_poster_path",
    rating: 9.3,
    summary: "Two imprisoned men bond over years and find solace in hope.",
    description:
      "Frank Darabont's adaptation of Stephen King's novella is a poignant tale of friendship, resilience, and redemption.",
  },
  {
    name: "Baahubali",
    url: "https://image.tmdb.org/t/p/w500/your_baahubali_poster_path",
    rating: 8.0,
    summary:
      "A young man discovers his royal heritage and rises to become a hero.",
    description:
      "This Indian fantasy epic by S.S. Rajamouli is a visual extravaganza, blending mythology, action, and drama.",
  },
  {
    name: "The Handmaiden",
    url: "https://image.tmdb.org/t/p/w500/your_thehandmaiden_poster_path",
    rating: 8.1,
    summary:
      "A con artist and a maid plot against a wealthy heiress in 1930s Korea.",
    description:
      "Park Chan-wook's erotic psychological thriller is a masterful tale of deception, romance, and intrigue.",
  },
  {
    name: "Akira",
    url: "https://image.tmdb.org/t/p/w500/your_akira_poster_path",
    rating: 8.0,
    summary:
      "A dystopian tale of a biker gang leader with uncontrollable psychic powers.",
    description:
      "Katsuhiro Otomo's groundbreaking anime is a blend of cyberpunk aesthetics and intense storytelling.",
  },
  {
    name: "The Godfather",
    url: "https://image.tmdb.org/t/p/w500/your_thegodfather_poster_path",
    rating: 9.2,
    summary:
      "The aging patriarch of an organized crime family transfers power to his son.",
    description:
      "Francis Ford Coppola's masterpiece is a timeless tale of power, family, and loyalty, hailed as one of the greatest films ever made.",
  },
  {
    name: "Dil Chahta Hai",
    url: "https://image.tmdb.org/t/p/w500/your_dilchahtahai_poster_path",
    rating: 8.1,
    summary:
      "Three close friends navigate love, life, and relationships post-college.",
    description:
      "Farhan Akhtar's directorial debut redefined Indian cinema with its modern narrative and relatable characters.",
  },
  {
    name: "Seven Samurai",
    url: "https://image.tmdb.org/t/p/w500/your_sevensamurai_poster_path",
    rating: 8.6,
    summary: "A group of samurai defends a village from bandits.",
    description:
      "Akira Kurosawa's epic is a timeless tale of honor and bravery, influencing countless films across genres.",
  },
  {
    name: "Interstellar",
    url: "https://image.tmdb.org/t/p/w500/your_interstellar_poster_path",
    rating: 8.6,
    summary:
      "A team of astronauts travels through a wormhole to save humanity.",
    description:
      "Christopher Nolan's sci-fi epic explores themes of love, time, and survival with stunning visuals and a powerful narrative.",
  },
  {
    name: "Forrest Gump",
    url: "https://image.tmdb.org/t/p/w500/your_forrestgump_poster_path",
    rating: 8.8,
    summary: "A kind-hearted man recounts his extraordinary life journey.",
    description:
      "Tom Hanks shines in this heartwarming drama directed by Robert Zemeckis, blending humor and life lessons seamlessly.",
  },
  {
    name: "Gully Boy",
    url: "https://image.tmdb.org/t/p/w500/your_gullyboy_poster_path",
    rating: 8.0,
    summary:
      "A young man rises from the slums of Mumbai to become a rap sensation.",
    description:
      "This Indian musical drama, directed by Zoya Akhtar, is an inspiring tale of ambition and passion set against the backdrop of street rap culture.",
  },
  {
    name: "Burning",
    url: "https://image.tmdb.org/t/p/w500/your_burning_poster_path",
    rating: 7.6,
    summary:
      "A mysterious wealthy man disrupts the lives of a young man and his childhood friend.",
    description:
      "Lee Chang-dong's slow-burn psychological drama explores class disparity, obsession, and ambiguity, leaving viewers pondering its many layers.",
  },
  {
    name: "Princess Mononoke",
    url: "https://image.tmdb.org/t/p/w500/your_princessmononoke_poster_path",
    rating: 8.4,
    summary:
      "A young warrior gets caught in a conflict between humans and forest spirits.",
    description:
      "Hayao Miyazaki's epic fantasy addresses environmental themes with breathtaking animation and a compelling story.",
  },
  {
    name: "Kabir Singh",
    url: "https://image.tmdb.org/t/p/w500/your_kabirsingh_poster_path",
    rating: 7.1,
    summary: "A surgeon spirals into self-destruction after losing his love.",
    description:
      "This Indian drama, directed by Sandeep Reddy Vanga, portrays a deeply flawed character grappling with heartbreak and anger.",
  },
  {
    name: "Burning",
    url: "https://image.tmdb.org/t/p/w500/your_burning_poster_path",
    rating: 7.6,
    summary:
      "A mysterious wealthy man disrupts the lives of a young man and his childhood friend.",
    description:
      "Lee Chang-dong's slow-burn psychological drama explores class disparity, obsession, and ambiguity, leaving viewers pondering its many layers.",
  },
];

let img1 = document.querySelectorAll("img");
for (let i = 0; i < movies.length; i++) {
  let apiKey = "210f56db4d3f1cd8801ad6f3041aa290";
  const movieName = movies[i].name;

  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const posterPath = data.results[0].poster_path;
      let posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
      img1[i].setAttribute("src", posterUrl);
    })
    .catch((error) => console.error(error));
}

let mouseHover;
let bady = document.querySelector("body");
ImgAdd.forEach((val, index) => {
  val.addEventListener("mouseenter", (e) => {
    mouseHover = setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=210f56db4d3f1cd8801ad6f3041aa290&query=${movies[index].name}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const posterPath = data.results[0].poster_path;
          const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
          bady.innerHTML = `<div class="data">
                 <div class="d2">
                   <div class="sidedata">
                     <img src="${posterUrl}" alt="">
                     <p class="discription">${movies[index].description}</p>
                     <div class="dis">
                       <span>Rating ⭐ / ${movies[index].rating}  </span>
                       <h3 class="mName">${movies[index].name}</h3>
                     </div>
                     <div class="btn">
      <button>Back To More </button>
     </div>
                   </div>
                   <div class="sum">
                     <span> 🍿 summary</span>
                   <p>🦍 ${movies[index].summary},</p>
                   </div>
                 </div>
               
               </div>`;

          let btn = document.querySelector(".btn");
          btn.addEventListener("click", () => {
            location.reload();
          });
        });
    }, 1200);
  });

  val.addEventListener("mouseleave", (e) => {
    clearTimeout(mouseHover);
  });
});
