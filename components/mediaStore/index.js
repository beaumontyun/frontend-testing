import media1 from "../../public/test/light.jpeg";
import media2 from "../../public/test/dark.jpeg";

export const media = [media1, media2];
export const mediaByIndex = index => media[index % media.length];
