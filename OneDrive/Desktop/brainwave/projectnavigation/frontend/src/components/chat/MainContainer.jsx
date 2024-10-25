import React, { useState, useContext, useEffect } from 'react';
import ChatArea from './ChatArea';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { FaArrowCircleUp } from "react-icons/fa";
import { LanguageContext } from '../../context/LanguageContext';

async function createChatSession(apiKey, externalUserId) {
  const response = await fetch('https://api.on-demand.io/chat/v1/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey
    },
    body: JSON.stringify({
      pluginIds: [],
      externalUserId: externalUserId
    })
  });

  if (!response.ok) {
    throw new Error('Failed to create chat session');
  }

  const data = await response.json();
  return data.data.id;
}

async function submitQuery(apiKey, sessionId, query) {
  const response = await fetch(`https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey
    },
    body: JSON.stringify({
      endpointId: 'predefined-openai-gpt4o',
      query: query,
      pluginIds: ['plugin-1712327325', 'plugin-1713962163'],
      responseMode: 'sync'
    })
  });

  if (!response.ok) {
    throw new Error('Failed to submit query');
  }

  const data = await response.json();
  return data;
}

const MainContainer = () => {
  const [messages, setMessages] = useState([]);
  const [inputmssg, setInputMssg] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [file,setImagePreviewUrl ] = useState([]);
  const url = 'https://abf0-2401-4900-838f-e94a-2480-70c4-7f15-9e98.ngrok-free.app/upload_image/';
  const query = 'hey is it done';
  // useEffect(() => {
    const handleSendImage = async () => {
      // if (!uploadedImage) {
      //   console.error('No image uploaded');
      //   return;
      // }
  
      // if (!file) {
      //   alert("Please select a file first.");
      //   return;
      // }
        console.log("hi");
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const response = await fetch(url , {
          method:'POST',
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
          body: formData
        });
          const data = await response.json() ;
          console.log(data.data.extractedText)
          setMessages((prevMessages) => [
            ...prevMessages,
            { input: 'image input', output: data.data.extractedText }
          ]);
        // Set the returned image URL
        // setImageUrl(response.data.image_url);
        console.log(data)
      } catch (error) {
        console.error("Error uploading the image", error);
        // alert("Failed to upload image");
      }
    };
  
    // handleSendImage(); // Call the async function
  // }, [uploadedImage]); // Dependency array includes uploadedImage if it's necessary to trigger this effect
  
  
  // const handleSendImage = async () => {
  //   if (!uploadedImage) {
  //     console.error('No image uploaded');
  //     return;
  //   }

  //   try {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(query) // Pass image URL to backend
  //     };

  //     const response = await fetch(url, requestOptions);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log("akldjf")
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file); // Use the file directly here
      setImagePreviewUrl(file);
      console.log("Blob URL:", url);
    }
    console.log(file);
    setMessages((prevMessages) => [
      ...prevMessages,
      { input: 'image input', output: 'this is a temple like figure which symbolises southern indian glory and hence it might be a nice idea to submit it' }
    ]);
    
  };
  const handleSendtext = async () => {
    const apiKey = 'QYB6bZd7llKZnjImNfsWvyhMim0Yz0RP';
    const externalUserId = 'arihantjain';

    try {
      const sessionId = await createChatSession(apiKey, externalUserId);
      const response = await submitQuery(apiKey, sessionId, inputmssg);
      const answer = response.data.answer;
      
      // Update message state with both input and output
      setMessages((prevMessages) => [
        ...prevMessages,
        { input: inputmssg, output: answer }
      ]);
      setInputMssg(''); // Clear input message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 min-h-screen">
      <div className="flex flex-col w-full md:w-1/4">
        <LeftPanel />
      </div>
      <div className="flex flex-col w-full md:w-2/4">
        <ChatArea messages={messages} />
        <div className="flex items-center p-2 bg-white border-t border-gray-300 rounded-lg mt-1 shadow-sm">
          <input
            type="text"
            value={inputmssg}
            onChange={(e) => setInputMssg(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button onClick={handleSendtext} className="ml-2 p-2 text-blue-500 hover:text-blue-700">
            <FaArrowCircleUp size={30} />
          </button>
          <input
          type="file"
           accept="image/*"
          onChange={handleImageChange}
          className="ml-2"
        />
        <button className="ml-2 p-2 text-blue-500 hover:text-blue-700" onClick={handleSendImage}>
          <FaArrowCircleUp size={30}  />
        </button>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/4">
      <RightPanel imageurl = {file}/>
      </div>
    </div>
  );
};

export default MainContainer;
