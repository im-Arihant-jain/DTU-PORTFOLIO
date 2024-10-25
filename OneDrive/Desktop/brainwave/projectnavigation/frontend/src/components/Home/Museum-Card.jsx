const MuseumCard = ({ imageSrc, caption , mp1,mp2,mp3,ep1,ep2,ep3 }) => {
  return (
    <div className="bg-white shadow rounded-lg sm:mb-4 mx-2 w-[400px] max-sm:w-full max-sm:m-4  ">
      {/* Image from local folder */}
      <div
        className="w-full bg-cover bg-no-repeat bg-center h-[200px] mb-3 rounded-t-lg"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Content */}
      <div className="flex justify-between">
        <div className="w-3/5 ml-3">
          <h2 className="font-bold text-xl leading-none">
          Exploring the Historic Side of {caption}
         
          </h2>
          <br/>
          <h3>Morning</h3>
          
          <p className="text-sm text-gray-500 mb-2">{mp1}</p>
          <p className="text-sm text-gray-500 mb-2">{mp2}</p>
          <p className="text-sm text-gray-500 mb-2">{mp3}</p>
         
          {/* <p className="text-sm text-gray-500 mb-2">New Delhi</p> */}
          
          <h3>Evening</h3>
          <p className="text-sm text-gray-500 mb-2 ">{ep1}</p>
          <p className="text-sm text-gray-500 mb-2">{ep2}</p>
          <p className="text-sm text-gray-500 mb-2">{ep3}</p>
          {/* <p className="text-sm text-gray-500 mb-2">{e}</p> */}
          {/* <p className="text-sm text-gray-500">Good for all age groups</p> */}
        </div>

        <div className="flex flex-col items-end px-3 pb-3">
          <div className="bg-[#2B7D0F] w-fit px-2 h-fit text-white rounded">
            <span className="text-sm">4.3</span>
            <span className="ml-1">★</span>
          </div>
          <span className="text-xs text-gray-500 ml-2">300+ Reviews</span>
          <div className="rounded border-[#E41515] border-[0.5px] border-solid bg-[#ffa9a982] text-[#E41515] p-1 text-xs w-fit mt-2">
            Trending
          </div>
        </div>
      </div>
     </div>
  );
};

export default MuseumCard;
