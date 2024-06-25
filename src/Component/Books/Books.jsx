import Trending from "./TrendingBooks";
import booksImage from "../Booksimage/bookimage";
import { useState,useEffect } from "react";
import axios from "axios";
import Recommend from "./Recommend";
import { bookAPIConfig } from "../../APi/apiConfig";
import Authors from "./TopAuthors";
import TopPublisher from "./TopPublisher";



const Books=()=>{
    const [book, setBook] = useState([]);
    const [loading,setLoading]=useState(false)


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(bookAPIConfig.trendingBooks
                    ,{
                        headers: {
                            "ngrok-skip-browser-warning": "1",
                          },
                    });
                   
                    const booksWithImages = response.data.data.map((book) => ({
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
    return(
        <>
        <div className="MultiBooks py-5 px-3">
            <section className=" max-w-[1000px] mx-auto">
                <div className="heading flex justify-between items-center">
                <h3 className="text-primary-0 font-head text-lg sm:text-2xl font-normal">Trending Books</h3>
                <span className="text-primary-0 font-poppin text-sm cursor-pointer">See All</span>
                </div>

                <Trending  book={book} loading={loading}/>


                <div className="heading flex justify-between items-center">
                <h3 className="text-primary-0 font-head text-lg sm:text-2xl font-normal">Recommended Books</h3>
                <span className="text-primary-0 font-poppin text-sm cursor-pointer">See All</span>
                </div>

                <Recommend />

                <div className="heading flex justify-between items-center">
                <h3 className="text-primary-0 font-head text-lg sm:text-2xl font-normal">Top Authors Book</h3>
                <span className="text-primary-0 font-poppin text-sm cursor-pointer">See All</span>
                </div>

                <Authors />

                <div className="heading flex justify-between items-center">
                <h3 className="text-primary-0 font-head text-lg sm:text-2xl font-normal">Top Publisher's Book</h3>
                <span className="text-primary-0 font-poppin text-sm cursor-pointer">See All</span>
                </div>


                <TopPublisher />

            </section>
           

        </div>
        
        </>
    )
}
export default Books;