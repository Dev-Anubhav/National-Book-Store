import { MdOutlineMic } from "react-icons/md";
import filter from "../assets/image/filter.svg";
import Slider from 'react-slick';


const SearchUI=({handleChange,handleClick,handleMicClick,handleSearch,isClick,search,value,settings})=>{
    return(
        <>
         <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="SearchFilter flex sm:flex-row gap-3">
                    <div className="rounded-xl py-2 px-4 flex items-center w-full sm:w-full relative" style={{ border: "1px solid black" }}>
                        <MdOutlineMic 
                            className={`text-3xl mr-2 sm:mr-4 cursor-pointer ${isClick ? 'animate-pulse' : ''}`} 
                            style={{ color: '#454545' }} 
                            onClick={handleMicClick} 
                        />
                        <input
                            type="text"
                            placeholder="Search Books"
                            className="focus:outline-none w-full text-lg"
                            onChange={handleChange}
                            value={value}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        />
                        <button type="submit" onClick={handleSearch} className="bg-primary-0 px-4 sm:px-7 sm:py-3 py-2 font-poppin font-normal text-white rounded-lg sm:ml-3 mt-0 sm:mt-0">
                            Search
                        </button>
                    </div>
                    <img src={filter} alt="filter" className="mt-0 sm:mt-0 w-7 sm:w-10" />
                </div>
                {
                    search.length > 0 && (
                        <>
                            <h3 className="font-poppin font-semibold text-2xl mt-8">Your Search </h3>
                            <div className="py-9">
                                <Slider {...settings} style={{ padding: "0 2" }}>
                                    {search.map((book) => (
                                        <div key={book.id} className="transform transition-transform hover:scale-110" onClick={() => handleClick(book.id)}>
                                            <div className="relative">
                                                <img
                                                    src={book.image}
                                                    alt={book.Title}
                                                    className="w-full h-60 sm:h-60 object-contain rounded-lg"
                                                />
                                                <div className="absolute top-0 left-0 w-full h-full rounded-lg flex flex-col justify-between items-center sm:py-8 py-7 md:px-20 lg:px-8 px-28 sm:px-24 overflow-hidden">
                                                    <h3 className="font-manrope font-semibold text-[12px] sm:text-[14px] text-[#2D292D] text-center">{book.Title}</h3>
                                                    <p className="font-manrope text-[10px] sm:text-[12px] text-[#2D292D] text-center">{book.Authors}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </>
                    )
                }
            </div>
        
        </>
    )
}
export default SearchUI;