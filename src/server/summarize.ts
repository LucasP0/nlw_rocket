import { pipeline } from "@xenova/transformers";

export const Summarize = async (text: any) => {
  try {
    console.log("Realizando o resumo...")

    const generator = await pipeline("summarization", "Xenova/distilbart-cnn-12-6")

    const output = await generator(text)
    console.log("Resumo concluido com Sucesso")
    return output[0].summary_text
  } catch (error: any) {
    console.log("Não foi possivel realizar", error)
    throw new Error(error)
  }
}