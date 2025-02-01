
import bullzAii from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import mmeh from "../assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: bullzAii , alt: "fine...NOT!", boxSize: "20px" },
        4: { src: thumbsUp , alt: "recommended", boxSize: "20px" },
        5: { src: mmeh , alt: "exceptional", boxSize: "20px" }
    }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji