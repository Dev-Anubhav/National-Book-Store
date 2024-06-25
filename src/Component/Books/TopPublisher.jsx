import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import booksImage from '../Booksimage/bookimage';
import { useNavigate } from 'react-router-dom';
import { bookAPIConfig } from '../../APi/apiConfig';
import PlaceholderCard from "../placeholder";



const TopPublisher = () => {
  const [book, setBook] = useState([]);
  const[loading,setLoading]=useState(false)
  const navi = useNavigate();


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          bookAPIConfig.publisher, {
          headers: {
            "ngrok-skip-browser-warning": "1",
          },
        });

       
        const booksWithImages = response.data.data.map((book, index) => ({
          ...book,
          image: booksImage[Math.floor(Math.random() * booksImage.length)]
        }));
        setBook(booksWithImages);
        setLoading(true)
      } catch (error) {
        console.log(error);
      }
    };


    fetchBooks();
  }, []);


  const handleClick = (id) => {
    navi(`/bookdetails/${id}`);

  }

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
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
       <div className="py-9" >

{!loading ? (
    <Slider {...settings}>
    {[...Array(5)].map((_, index) => (
      <div key={index} className="p-4">
        <PlaceholderCard />
      </div>
    ))}
  </Slider> ) : (<Slider {...settings}>
{book.map((book) => (
  <div key={book.id} className="transform transition-transform hover:scale-105" onClick={()=>handleClick(book.id)}>
    <div className="relative">
      <img
        src={book.image}
        alt={book.Title}
        className="w-full h-60 sm:h-60 object-contain rounded-lg transform transition-transform hover:scale-110"
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-lg flex flex-col justify-between items-center sm:p-5 py-6 md:px-20 lg:px-8 px-32 sm:px-10  overflow-hidden">
        <h3 className="font-manrope font-semibold text-[12px] sm:text-[14px] text-[#2D292D] text-center">{book.Title}</h3>
        <p className="font-manrope text-[10px] sm:text-[12px] text-[#2D292D] text-center">{book.Authors}</p>
      </div>
    </div>
  </div>
))}
</Slider>) }
</div>
    </>
  )
}
export default TopPublisher;