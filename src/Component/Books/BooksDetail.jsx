import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar";
import axios from "axios";
import { bookAPIConfig } from "../../APi/apiConfig";
import booksImage from "../Booksimage/bookimage";
import Map from "../../assets/image/map.png";
import { Card, CardContent, Typography, Button } from '@mui/material';
import chatlogo from '../../assets/image/chatbot.svg';
import CustomChatbot from "../../ChatBot/CustomChatbot"

const BooksDetail = () => {
    const [book, setBook] = useState({});
    const { id, check } = useParams();
    const [show, setShow] = useState(false);
    const [map, setMap] = useState(false);
   

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(
                    `${bookAPIConfig.findBooks}/${id}`, {
                    headers: {
                        "ngrok-skip-browser-warning": "1",
                    },
                });
                const booksData = response.data.data;


                const bookWithImage = {
                    ...booksData,
                    image: booksImage[Math.floor(Math.random() * booksImage.length)],
                };

                setBook(bookWithImage);
            } catch (error) {
                console.log(error);
            }
        };




        fetchBooks();
    }, [id]);











    return (
        <>
            <Searchbar />

            <div className="flex flex-col sm:flex-row items-center p-6 space-x-6 rounded-lg max-w-[1200px] mx-auto mt-10">
                <div key={book.id} className="p-2 transform transition-transform hover:scale-105" onClick={() => handleClick(book.id)}>
                    <div className="relative">
                        <img
                            src={book.image}
                            alt={book.Title}
                            className="w-[265px] h-96 sm:h-96 object-contain rounded-lg "
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-lg flex flex-col justify-between items-center sm:py-8 py-7 md:px-6 px-8 sm:px-3 ">
                            <h3 className="font-manrope font-semibold text-[16px] sm:text-[18px] text-[#2D292D] text-center">{book.Title}</h3>
                            <p className="font-manrope text-[10px] sm:text-[12px] text-[#2D292D] text-center">{book.Authors}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mt-3">
                    <h3 className="font-poppin font-semibold text-2xl mb-5 tracking-wide">You can find these books Here</h3>
                    <div className="flex items-center sm:items-start sm:flex-row bg-840033 text-white  p-2 mb-2">
                        <h2 className="font-semibold font-poppin mb-2 bg-[#840033] text-white rounded-[14px] text-lg sm:text-2xl px-4 py-2 mr-3">STALL NO:</h2>
                        {book.stalls && <span onClick={() => setMap(!map)} className={`text-primary-0 text-xl p-2 rounded-md cursor-pointer text-semibold border border-[#880033] ${map ? 'bg-primary-0 text-white' : ""}`}>{book.stalls[0]}</span>}
                    </div>

                    {
                        map ? <img src={Map} alt={Map} className="max-w-96" /> : <div className="flex flex-col mt-14">
                            <p className="font-poppin font-semibold text-xl">Title: <span className="text-lg font-medium ml-2">{book.Title}</span></p>
                            <p className="font-poppin font-semibold text-xl">Author Name:<span className="text-lg font-medium ml-2">{book.Authors}</span></p>
                            <p className="font-poppin font-semibold text-xl">Publisher: <span className="text-lg font-medium ml-2">{book.Publisher}</span></p>
                            <p className="font-poppin font-semibold text-xl">Genre: <span className="text-lg font-medium ml-2">{book.Category}</span></p>
                        </div>
                    }

                </div>
            </div>


            {
                show ?
                    <div className="chatbot fixed bottom-7 right-0 sm:right-5">
                        <CustomChatbot setShow={setShow} />
                    </div> : <div className="flex justify-end items-end  bg-gray-200" onClick={() => setShow(true)}>
                        <div className="flex flex-col space-y-4 fixed bottom-0 right-0">
                            <Card className="card" sx={{ overflow: "visible", padding: 0, marginBottom: "30px" }}>
                                <CardContent sx={{ padding: 0 }} className="cardcontent">
                                    <div className="notch"></div>

                                    <Typography sx={{ textAlign: "center", padding: 0 }}>Ask me Anything.</Typography>

                                </CardContent>
                            </Card>
                            <div className="p-4 flex justify-center items-center animate-bounce">
                                <img
                                    src={chatlogo}
                                    alt="chatbot"
                                    className="responsive-img"
                                />
                            </div>

                        </div>
                    </div>
            }


        </>
    )
}
export default BooksDetail;