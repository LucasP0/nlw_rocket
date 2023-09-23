import ytdl from 'ytdl-core';
import fs from 'fs';



export const Download = (videoId: any) => new Promise((resolve, reject) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId;
  console.log("Realizando o donwload do vídeo", videoId);


  ytdl(videoURL, { quality: "lowestaudio", filter: 'audio' }).on("info", (info) => {
    const seconds = info.formats[0].approxDurationMs / 1000;

    if (seconds > 60) {
      throw new Error("Isto não é um short")
    }
  })
    .on("end", () => {
      console.log("Donwload do vídeo finalizado")
      resolve()
    })
    .on("error", (error) => {
      console.log("Não foi possível fazer o donwload do video. Detalhe do erro:", error)
      reject()
    })
    .pipe(fs.createWriteStream("./src/tmp/audio.mp4"));
})
