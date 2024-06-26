import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatbotUi from './ChatbotUi';
import { bookAPIConfig } from '../APi/apiConfig';

const CustomChatbot = ({ setShow }) => {
  const initialMessages = [
    { sender: 'bot', text: 'Hello' },
    { sender: 'bot', text: "Welcome to LiveChat! I'm here to assist you with your queries. Choose a topic below or type your question." },
    {
      sender: 'bot',
      text: 'Please choose an option:',
      options: [
        { text: 'Book Ticket', value: 'book ticket' },
        { text: 'Search Book', value: 'search book' }
      ]
    }
  ];

  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : initialMessages;
  });
  const [input, setInput] = useState('');
  const [isBookSearchMode, setIsBookSearchMode] = useState(false);


  useEffect(() => {
    sessionStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setInput('');

      if (isBookSearchMode) {

        try {
          const response = await axios.post(bookAPIConfig.chatbot, { message: `search book ${input}` }, {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "1",
            }
          });
          const apiDataArray = response.data.data.data;
          const botMessage = {
            sender: 'bot',
            text: response.data.data.response,
            data: apiDataArray
          };

          setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
        } catch (error) {
          console.error('Error searching for book:', error);
        }
        
      } else {

        try {
          const response = await axios.post(bookAPIConfig.chatbot, { message: input }, {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "1",
            }
          });
          const apiDataArray = response.data.data.data
          const botMessage = {
            sender: 'bot',
            text: response.data.data.response,
            data: apiDataArray
          };

          setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
        } catch (error) {
          console.error('Error sending message:', error);
        }
      }
    }
  };

  const handleOptionClick = (optionValue, navigate) => {
    if (optionValue === 'search book') {
      setIsBookSearchMode(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: 'Search Book' },
        { sender: 'bot', text: 'Please enter the name of the book you want to search for.' }
      ]);
    }
    else if (optionValue === 'book ticket') {
      navigate('/register')
    }
    else {
      setInput(optionValue);
      handleSendMessage();
    }
  };

  return (
    <ChatbotUi
      setShow={setShow}
      messages={messages}
      input={input}
      setInput={setInput}
      handleSendMessage={handleSendMessage}
      handleOptionClick={handleOptionClick}
    />
  );
};

export default CustomChatbot;
