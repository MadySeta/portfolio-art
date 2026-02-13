import { Button } from '@mui/material';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Video {
    id: number;
    path: string;
    title: string;
}

const videos: Video[] = [
    { id: 1, path: 'videos/3d/flower-house.mp4', title: 'Univers Ghibli' },
    { id: 2, path: 'videos/3d/japan-tower.mp4', title: 'Tour japonaise' },
    { id: 3, path: 'videos/3d/japan-stand.mp4', title: 'Stand japonais' },
    { id: 4, path: 'videos/3d/music-box.mp4', title: 'Cassette musicale' },
];

const VideoCarousel: React.FC = () => {

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 1,
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    });

    const onNext = () => {
        instanceRef.current?.next();
    };

    const onPrevious = () => {
        instanceRef.current?.prev();
    };

    return (
        <>

            <div ref={sliderRef} className="keen-slider">
                {videos.map((video, index) => (
                    <div key={index} className="keen-slider__slide rounded-3xl overflow-hidden border-4">
                        <video autoPlay muted loop playsInline className="w-full">
                            <source src={video.path} type="video/mp4" />
                        </video>
                        <div className='mx-6 my-2'>{video.title}</div>
                    </div>

                ))}
            </div>

            <div className='flex justify-around m-12'>
                <Button sx={{ background: "#DC9E68" }} onClick={onPrevious} variant="contained" startIcon={<ArrowBackIosIcon />}>
                    <div className='font-sans'>Précédent</div>

                </Button>

                <Button className="font-sans" sx={{ background: "#DC9E68" }} onClick={onNext} variant="contained" endIcon={<ArrowForwardIosIcon />}>
                    <div className='font-sans'>Suivant</div>

                </Button>
            </div>



        </>

    );
};

export default VideoCarousel;

