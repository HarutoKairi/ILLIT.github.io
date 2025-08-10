let allMusic = [
  {
    name: "Magnetic",
    artist: "ILLIT",
    img: "music-1",
    src: "music-1"
  },
  {
    name: "Lucky Girl Syndrome",
    artist: "ILLIT",
    img: "music-2",
    src: "music-2"
  },
  {
    name: "Midnight Fiction",
    artist: "ILLIT",
    img: "music-3",
    src: "music-3"
  },

];



const musicList = document.querySelector(".music-list ul");

// Tạo danh sách bài hát
allMusic.forEach((music, index) => {
  let liTag = `<li data-index="${index}">
                <div class="row">
                  <span>${music.name}</span>
                  <span class="separator">-</span>
                  <span class="artist">${music.artist}</span>
                  <span class="audio-duration">3:40</span>
                </div>
              </li>`;
  musicList.insertAdjacentHTML("beforeend", liTag);
});
