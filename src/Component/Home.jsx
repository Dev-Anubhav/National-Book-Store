import { useEffect, useState } from "react";
import Books from "./Books/Books";
import HeroSlider from "./HeroSlider";
import Searchbar from "./Searchbar";
import Modale from "./Modal";
import chatlogo from '../assets/image/chatbot.svg';
import { Card, CardContent, Typography, Button } from '@mui/material';
import 'react-chatbot-kit/build/main.css'
import CustomChatbot from "../ChatBot/CustomChatbot.jsx";




const Home = () => {
    const [data, setData] = useState(null);
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(false);
    useEffect(() => {
        const newData = JSON.parse(localStorage.getItem("formData"));

        setData(newData);
    }, []);


    const handleClose = () => {
        setOpen(false);
        localStorage.removeItem('formData');
    }


    const handleShow = () => {

        setShow(true);
    }

    return (
        <>
            {data && (
                <Modale open={open} handleClose={handleClose} data={data} />
            )}
            <Searchbar />
            <HeroSlider />
            <Books />


{
    show ? 
    <div className="chatbot fixed bottom-7 right-0 sm:right-5">
       <CustomChatbot setShow={setShow}/>
        </div> : <div className="flex justify-end items-end  bg-gray-200" onClick={handleShow}>
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
export default Home;