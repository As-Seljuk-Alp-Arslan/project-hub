import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[] 
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [ key: string ]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe
    }
  return (
    <HStack marginY={2.5}>
        {platforms.map((platform) =>  (
            <Icon key={platform.id} as={iconMap[platform.slug]} color="cyan.400" size="lg"/>
        ))}
    </HStack>
  );
};

export default PlatformIconList