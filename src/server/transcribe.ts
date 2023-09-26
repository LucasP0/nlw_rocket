import { pipeline } from "@xenova/transformers";

export const transcribe = async (audio: any) => {
  try {
    console.log("Realizando a transcrição do Video.....")
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small")

    const  transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe"
    })

    console.log("Transcrição Finalizada com Sucesso")
    return transcription?.text.replace("[Música]", "")
  } catch (error: any) {
    throw new Error(error)
  }
};