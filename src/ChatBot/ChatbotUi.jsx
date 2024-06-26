import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chat from '../assets/image/simpleChat.svg';
import { MdOutlineMic } from 'react-icons/md';

const ChatbotUi = ({ messages, input, setInput, handleSendMessage, setShow, handleOptionClick }) => {
  const navigate = useNavigate();
  const messageEndRef = useRef(null);
  const[isClick,setClicked]=useState(false)

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (id) => {
    navigate(`/bookdetails/${id}`);
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
            setInput(speechResult)
            
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
    <div className="chat-container">
      <div className="header">
        <button className="close-button" onClick={() => setShow(false)}>X</button>
        <div className="welcome-section items-center">
          <div className="welcome-text">
            <h5 className="font-poppin font-semibold text-lg">Welcome</h5>
            <p className="font-poppin text-base">How may I help you?</p>
          </div>
          <img src={chat} alt="Welcome" className="welcome-image h-24 w-24" />
        </div>
      </div>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
            <span>{message.text}</span>
            {message.sender === 'bot' && message.options && (
              <div className="options flex flex-col gap-2">
                {message.options.map((option, i) => (
                  <button className='border border-[#880033] rounded-sm' key={i} onClick={() => handleOptionClick(option.value,navigate)}>
                    {option.text}
                  </button>
                ))}
              </div>
            )}
            {message.sender === 'bot' && message.data && message.data.length > 0 && (
              <div className='flex flex-row flex-wrap gap-2 mt-2'>
                {message.data.map((item)=>(
                  <span key={item.id} className='border border-[#880033] p-2 cursor-pointer' onClick={()=>handleSend(item.id)}>{item.Title}<b> {item.Authors}</b> </span>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="input-container">
        <div className="input-div">
        <div className="mic-icon-container" onClick={handleMicClick}>
          <MdOutlineMic className={`mic-icon h-6 w-10 ${isClick ? 'animate-pulse': ''}`} />
        </div>
        <input
          type="text"
          placeholder="Write a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        </div>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotUi;
