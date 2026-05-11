export const WA_NUMBER = "5519982831700";
export const WA_DEFAULT_MESSAGE =
  "Olá, vim do site da Lorena LLira e gostaria de mais informações";

export function waLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
