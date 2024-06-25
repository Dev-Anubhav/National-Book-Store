import { useState } from "react";
import axios from "axios";
import { bookAPIConfig } from "../APi/apiConfig";
import booksImage from "./Booksimage/bookimage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import SearchUI from "./SearchUI";

const Searchbar = () => {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState([]);
    const [isClick, setClicked] = useState(false)

    const navi = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.post(
                bookAPIConfig.searchBooks, {
                query: value
            }, {
                headers: {
                    "ngrok-skip-browser-warning": "1",
                },
            });
            const booksWithImages = response.data.data.map((book, index) => ({
                ...book,
                image: booksImage[Math.floor(Math.random() * booksImage.length)]
            }));
            setSearch(booksWithImages);
            setValue("");
        } catch (error) {
            console.log(error);
        }
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleClick = (id) => {
        navi(`/bookdetails/${id}`);
        setSearch([]);
    };

    const handleMicClick = () => {
        setClicked(true)
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            recognition.start();

            recognition.onresult = (event) => {
                const speechResult = event.results[0][0].transcript;
                console.log(speechResult)
                setValue(speechResult)
            };

            recognition.onspeechend = () => {
                recognition.stop();
                setClicked(false)
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error detected: ' + event.error);
            };
        } else {
            console.log('Speech recognition not supported in this browser.');
        }
    };

    return (
        <>
            <SearchUI handleChange={handleChange} handleClick={handleClick} handleMicClick={handleMicClick} handleSearch={handleSearch} search={search} isClick={isClick} settings={settings} value={value} />
        </>
    );
};

export default Searchbar;
