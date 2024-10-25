import React,{useState} from 'react';
// import { TfiWrite } from "react-icons/tfi";
// import { RiChatNewLine } from "react-icons/ri";
// import axios from 'axios';
import RightButton from './assets/RightButton';
import LeftButton from './assets/LeftButton';

import { FaArrowCircleUp } from "react-icons/fa";
const LeftPanel = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [itinerary, setItinerary] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  // Handle DOC file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setItinerary("");
};
const handleUploadDoc = async () => {
  if (!selectedFile) return alert("Please select a DOC file first!");

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await axios.post("http://localhost:5000/upload-doc", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Set itinerary to the response from the backend
    setItinerary(response.data.itinerary || "No itinerary could be generated.");
  } catch (error) {
    console.error("Error generating itinerary:", error);
    setItinerary("Error generating itinerary.");
  }
};
const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setUploadedImage(file);
    const url = URL.createObjectURL(file); // Use the file directly here
    setImagePreviewUrl(url);
    console.log("Blob URL:", url);
  }
};

  const handleUpload = async () => {
    console.log(selectedImage)
      // const formData = new FormData();
      // formData.append('image', selectedImage);

      // try {
        
      //     // const response = await axios.post('http://localhost:5000/upload', formData, {
      //     //     headers: {
      //     //         'Content-Type': 'multipart/form-data',
      //     //     },
      //     // });
      //     // Assuming the backend returns the processed image URL
      //     setUploadedImage(response.data.image_url);
      // } catch (error) {
      //     console.error('Error uploading image:', error);
      // }
    }
  return (
    <div style={{
      overflow: 'auto',
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* IE and Edge */
    }} className="flex flex-col items-center p-4 w-full h-full rounded-lg shadow-md bg-gradient-to-b from-[#004AAD] to-[#5DE0E6]">
      {/* Icon Section */}
      <div className='flex w-full justify-between'>
        <div className="p-2 flex items-center justify-center w-10 h-10 bg-[#C5882E] rounded-xl mb-4 ml-1 ">
          {/* <TfiWrite /> */}
          <LeftButton/>
        </div>
        <div className="p-2 flex items-center justify-center w-10 h-10 bg-white rounded-xl mb-4 mr-1">
          {/* <RiChatNewLine /> */}
          <RightButton/>
        </div>
      </div>
    
      <div className="w-full p-2 bg-white rounded-md shadow-md">
        CHAT-PLAN-TRAVEL-REPEAT
      </div>
      <br/>
    
      <div className="w-full p-2 bg-white rounded-md shadow-md ">
        <div>IMAGE INTERPRETTER</div>
        <div >
          <div className='flex w-full' >
            <input type="file" accept="image/*" onChange={handleImageChange} />
            
            <button className="bg-yellow-500 text-black rounded-md" onClick={handleUpload}> <FaArrowCircleUp size={30} /></button>
            </div>
            {uploadedImage && (
                <div>
                    <h3>Processed Image:</h3>
                    <p>{imagePreviewUrl}</p>
                    <img src={imagePreviewUrl} alt="Processed" />
                </div>
            )} 
        </div>
        <br/>
        
      </div>
      <br/>
      
      <div className="w-full p-2 bg-white rounded-md shadow-md ">
        <div>DOC. INTERPRETTER</div>
        <div >
          <div className='flex w-full' >
            <input type="file" accept=".doc,.docx" onChange={handleFileChange} />
            
            <button className="bg-yellow-500 text-black rounded-md" onClick={handleUploadDoc}> <FaArrowCircleUp size={30} /></button>
            </div>
            {itinerary && (
                <div>
                    <h3>Processed Image:</h3>
                    <p>{itinerary}</p>
                </div>
            )} 
        </div>
        <br/>
        
      </div>
        </div>
    
  );
};

export default LeftPanel;
