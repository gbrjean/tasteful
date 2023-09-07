export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

export function isBase64Image(data: string) {
  const regex = /^data:image\/(png|jpg|jpeg|gif);base64,/;
  return regex.test(data);
}