import { Play } from "lucide-react"
import { useState } from "react";
import { Server } from "../server.ts";



export const App = () => {
  const [value, setValue] = useState("");
  const [span, setSpan] = useState("Escolha um short para resumir");
  const [tran, setTrans] = useState("");
  const [color, setColor] = useState(false);

  const handleOnSubmit = async (event: any) => {
    setColor(false);
    event.preventDefault();
    if (!value.includes("shorts")) {
      setSpan("ISSO NÃO É UM SHORTS");
    }
    const [_, short2] = value.split("/shorts/")
    const [videoID] = short2.split("?si")
    setSpan("Obetendo o texto do áudio...")

    const transcription = await Server.get("/summary/" + videoID)
    setSpan('Realizando o resumo')

    const summary = await Server.post("/summary", {
      text: transcription.data.result
    })
    setTrans(transcription.data.result)
    setSpan(summary.data.result)
    setColor(true);
  }

  return (
    <section
      className="bg-[#121214] w-full  flex flex-col items-center justify-center h-screen">
      <div
        className="flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col items-center justify-center ">
          <img src="../../public/logo.svg" width={100} alt="logo" />
          <h1 className="text-2xl font-bold text-white">Shorts Summary</h1>
        </div>

        <form onSubmit={handleOnSubmit} action="form" id="form" className="flex flex-row items-center justify-center gap-4">
          <input
            type="url"
            id="url"
            placeholder="URL do video"
            className="focus:border-2 focus:border-[#8257E5] outline-none  bg-[#202024] p-2 w-[400px] max-md:w-[250px] h-12   text-white rounded-md"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="w-12 bg-[#8257E5] h-12 flex flex-row justify-center items-center rounded-md">
            <Play color="white" size={30} />
          </button>
        </form>

        <div className="w-[464px] flex flex-col gap-2 text-left text-white ">
          <h2 className="text-lg font-bold text-[#8257E5]">Resumo</h2>
          <p id="content" className="text-[#7C7C8A] text-justify" style={{color: color === true? 'white': '#7C7C8A'}}>{span}</p>
        </div>

        <div className="w-[464px] flex flex-col gap-2 text-left text-white "style={{display: color === true? 'flex': 'none'}}>
          <h2 className="text-lg font-bold text-[#8257E5] ">Transcrição</h2>
          <p id="content" className="text-white text-justify">{tran}</p>
        </div>
      </div>

    </section>
  )
}