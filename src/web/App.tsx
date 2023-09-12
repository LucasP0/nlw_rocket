import { Play } from "lucide-react"

export const App = () => {
  return (
    <section
      className="bg-[#121214] w-full h-screen flex flex-col items-center justify-center">
      <div
        className="flex flex-col items-center justify-start gap-10">
        <div className="flex flex-col items-center justify-center ">
          <img src="../../public/logo.svg" width={100} alt="logo" />
          <h1 className="text-2xl font-bold text-white">Shorts Summary</h1>
        </div>
        <form action="form" className="flex flex-row items-center justify-center gap-4">
          <input
            type="url"
            id="url"
            placeholder="URL do video"
            className="focus:border-2 focus:border-[#8257E5] outline-none  bg-[#202024] p-2 w-[400px] max-md:w-[250px] h-12   text-white rounded-md"
          />
          <button className="w-12 bg-[#8257E5] h-12 flex flex-row justify-center items-center rounded-md">
            <Play color="white" size={30} />
          </button>
        </form>
        <div className="w-full flex flex-col gap-2 text-left text-white">
          <h2 className="text-lg font-bold ">Resumo</h2>
          <p id="content" className="text-[#7C7C8A]">Escolha um short para resumir</p>
        </div>
      </div>
    </section>
  )
}