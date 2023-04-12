import {
    useState,
    useRef,
    useEffect,
    useCallback,
    forwardRef,
    useImperativeHandle,
} from "react";
import {
    Box,
    IconButton,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    useBoolean,
    Image,
    Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import vinyl from "../../assets/vinyl.png";

const Player = forwardRef((props: any, ref) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [volume, setVolume] = useState(30);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useBoolean(false);
    const thumbRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        reset: () => {
            if (audioRef.current) {
                audioRef.current.currentTime = props.start;
                togglePlay(true);
                fadeIn();
            }
        },

        pause: () => {
            if (audioRef.current) {
                if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying.off();
                }
            }
        }
    }));

    const fadeIn = useCallback(() => {
        if (audioRef.current) {
            let currentVolume = 0;
            audioRef.current.volume = currentVolume;

            const fadeInStep = () => {
                currentVolume += 0.01;
                if (currentVolume >= volume / 100) {
                    currentVolume = volume / 100;
                } else {
                    setTimeout(fadeInStep, 10);
                }
                if (audioRef.current) {
                    audioRef.current.volume = currentVolume;
                }
            };

            fadeInStep();
        }
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
            audioRef.current.currentTime = props.start;
        }

        if (thumbRef.current) {
            thumbRef.current.focus = function () {
                return
            };
        }
    }, []);

    const handleProgress = () => {
        if (audioRef.current) {
            setCurrentProgress(
                (audioRef.current.currentTime / audioRef.current.duration) * 100
            );
        }
    };

    const handleSliderChange = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
            audioRef.current.blur();
            setCurrentProgress(value);
        }
    };

    const handleVolumeChange = (value: number) => {
        setVolume(value);
        if (audioRef.current) {
            audioRef.current.volume = value / 100;
        }
    };

    const togglePlay = (on = false) => {
        if (audioRef.current) {
            if (isPlaying) {
                if (!on) {
                    audioRef.current.pause();
                    setIsPlaying.off();
                }
            } else {
                audioRef.current.play();
                setIsPlaying.on();
                props.pauseOther(props.id);
                fadeIn();
            }
        }
    };

    return (
        <Box
            bgColor="#DCC9B6"
            border="3px solid #6D4C3D"
            borderRadius="10px"
            w="500px"
            h="750px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <audio
                ref={audioRef}
                src={props.song}
                onTimeUpdate={handleProgress}
                onEnded={() => setIsPlaying.off()}
            />
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <Box position="relative" h="300px" w="480px">
                    <Image
                        src={props.vinyl}
                        w={props.posterResize}
                        position="relative"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    />
                    <Image
                        src={vinyl}
                        w="85%"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    />
                </Box>
            </motion.div>

            <Text mt="80px" fontSize="24px" color="#14151b" fontWeight="bold">
                {props.name}
            </Text>
            <Text fontSize="18px" color="#14151b">
                {props.artist}
            </Text>

            <Slider
                mt="20px"
                w="70%"
                value={currentProgress}
                onChange={handleSliderChange}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb ref={thumbRef} />
            </Slider>

            <Box display="flex" w="30%" mt="20px">
                <IconButton
                    color="#14151b"
                    mr="4"
                    icon={isPlaying ? <FaPause /> : <FaPlay />}
                    onClick={() => togglePlay()}
                    aria-label={isPlaying ? "Pause" : "Play"}
                />
                <Slider
                    flexGrow="1"
                    value={volume}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value: number) => handleVolumeChange(value)}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </Box>
        </Box>
    );
});

export default Player;
