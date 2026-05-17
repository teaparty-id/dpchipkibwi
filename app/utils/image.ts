export function getLoremImage(width: number, height: number) {
  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 100)}`;
}

export function getLoremImages(width: number, height: number, len: number) {
  const images: string[] = [];

  for (let i = 0; i < len; i++) {
    images.push(
      `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 100)}`,
    );
  }

  return images;
}
