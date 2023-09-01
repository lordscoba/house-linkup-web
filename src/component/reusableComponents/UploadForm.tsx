import React, { useState, useRef } from 'react';

type Props = {};

const UploadForm = (props: Props) => {
  const [image, setImage] = useState(null) as any;
  const [imageName, setImageName] = useState('');
  const [isImage, setIsImage] = useState<Boolean>(false);

  const fileInputRef = useRef(null) as any;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);

      setImage(imageURL);
      setImageName(file?.name);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      setImageName(file?.name);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleImagePreview = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsImage((prev) => !prev);
  };
  return (
    <section className="w-full max-w-[1004px] py-[23px]  xl:px-0 hide-scrollbar">
      {/* <section className="bg-[#D9D9D9] pt-[93px] xl:h-[870px] pb-[93px] xl:px-0 relative">
        <p className="text-center xl:text-[24px] text-[20px] text-[#000] font-[500]">
          Rent with us and be Confident that Your home will be Filled Out!
        </p>
      </section> */}

      <form className="w-full xl:w-[1130px] m-auto bg-[#fff] rounded-lg lg:px-[63px] px-4 py-[52px]    mb-[5rem] border">
        <section className="xl:flex block items-center justify-between mb-[25px]">
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="name" className="text-[17px] font-[600]">
              {' '}
              Name <span className="text-[red] text-[1.2rem] ">*</span>
            </label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full border py-2 px-4 rounded-md"
              />
            </div>
          </div>
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="email" className="text-[17px] font-[600]">
              Email <span className="text-[red] text-[1.2rem] ">*</span>
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="w-full border py-2 px-4 rounded-md"
              />
            </div>
          </div>
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="unit-number" className="text-[17px] font-[600]">
              {' '}
              Unit Number <span className="text-[red] text-[1.2rem] ">*</span>
            </label>
            <div>
              <input
                type="tel"
                name="unit-number"
                id="unit-number"
                placeholder="Enter Unit Number"
                className="w-full border py-2 px-4 rounded-md"
              />
            </div>
          </div>
        </section>

        <section className="xl:flex block items-center justify-between mb-[25px]">
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="city" className="text-[17px] font-[600]">
              {' '}
              City
            </label>{' '}
            <span className="text-[red] text-[1.2rem] ">*</span>
            <div className="border flex  px-4 py-2 rounded-md">
              <select
                name=""
                id=""
                className="w-full border-none outline-none focus:border-none"
              >
                <option value="me">me</option>
              </select>
            </div>
          </div>
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="state" className="text-[17px] font-[600]">
              {' '}
              State
            </label>{' '}
            <span className="text-[red] text-[1.2rem] ">*</span>
            <div className="border flex  px-4 py-2 rounded-md">
              <select
                name="state"
                id="state"
                className="w-full border-none outline-none focus:border-none"
              >
                <option value="me">state</option>
              </select>
            </div>
          </div>
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="home-type" className="text-[17px] font-[600]">
              {' '}
              Home Type
            </label>{' '}
            <span className="text-[red] text-[1.2rem] ">*</span>
            <div className="border flex  px-4 py-2 rounded-md">
              <select
                name="home-type"
                id="home-type"
                className="w-full border-none outline-none focus:border-none"
              >
                <option value="me">Home type</option>
              </select>
            </div>
          </div>
        </section>
        <section className="xl:flex block items-center gap-[25px] mb-[25px]">
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="price" className="text-[17px] font-[600]">
              {' '}
              Price <span className="text-[red] text-[1.2rem] ">*</span>
            </label>
            <div>
              <input
                type="tel"
                name="price"
                id="price"
                placeholder="Enter Price"
                className="w-full border py-2 px-4 rounded-md"
              />
            </div>
          </div>
          <div className="xl:w-[318px] w-full mb-4">
            <label htmlFor="flat-type" className="text-[17px] font-[600]">
              {' '}
              Flat Type
            </label>{' '}
            <span className="text-[red] text-[1.2rem] ">*</span>
            <div className="border flex  px-4 py-2 rounded-md">
              <select
                name="flat-type"
                id="flat-type"
                className="w-full border-none outline-none focus:border-none"
              >
                <option value="">Select flat type</option>
                <option value="me">3 Bedroom </option>
                <option value="me">5 Bedroom </option>
              </select>
            </div>
          </div>
        </section>

        <section className="mb-[25px]">
          <label htmlFor="description" className="text-[17px] font-[600]">
            Description{' '}
          </label>
          <span className="text-[red] text-[1.2rem] ">*</span>
          <div>
            <textarea
              placeholder="Description"
              className="px-4 border w-full rounded-md h-[151px] pt-2"
            ></textarea>
          </div>
        </section>
        {/* IMAGE UPLOAD */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#000]">Upload Photos</h2>
          <div className="image-uploader border-2 border-dashed border-[#69B99D] rounded-md flex items-center justify-center py-[60px] text-center ">
            <div
              className="drop-area h-full"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {image ? (
                // <img src={image} alt="Uploaded" className="preview-image" />
                <p className="font-bold">{imageName}</p>
              ) : (
                <p className="text-[#000] font-[500] text-[1rem]">
                  Drag and drop an image here or
                </p>
              )}

              <div className="inline-block relative cursor-pointer ">
                <label
                  htmlFor="browse"
                  onClick={handleLabelClick}
                  className="inline-block py-[10px] px-[20px] cursor-pointer text-[#69B99D] font-[500] text-[1rem]"
                >
                  Browse
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-[55px]">
            <button
              type="submit"
              className="bg-[#69B99D] font-[500] text-[#fff] xl:text-[22px] text-[18px] w-full xl:w-[513px] m-auto xl:py-[16px] py-[8px] rounded-md"
            >
              Contact Us
            </button>
          </div>
          <div className="mt-[25px] text-enter">
            <button onClick={handleImagePreview} className=" mb-[1rem]">
              Preview Image
            </button>
            {isImage && (
              <>
                {!image ? (
                  <p>No Image to Preview at the moment</p>
                ) : (
                  <img src={image} alt="Uploaded" className="preview-image" />
                )}
              </>
            )}
          </div>
        </section>
      </form>
    </section>
  );
};

export default UploadForm;

// const [selectedCountry, setSelectedCountry] = useState('');
// const [states, setStates] = useState([]);

// // Function to fetch states based on selected country
// const fetchStates = async () => {
//   try {
//     // Replace with your API call to fetch states
//     const response = await fetch(`API_URL/${selectedCountry}`);
//     const data = await response.json();
//     setStates(data);
//   } catch (error) {
//     console.error('Error fetching states:', error);
//   }
// };

// const handleCountryChange = (event) => {
//   setSelectedCountry(event.target.value);
//   fetchStates(); // Fetch states when country changes
// };

// return (
//   <div>
//     <select value={selectedCountry} onChange={handleCountryChange}>
//       <option value="usa">USA</option>
//       <option value="canada">Canada</option>
//       {/* Add other country options */}
//     </select>
//     <div>
//       <h2>States:</h2>
//       <ul>
//         {states.map((state) => (
//           <li key={state.id}>{state.name}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// import axios from 'axios';

// const StateSelector = () => {
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);

//   useEffect(() => {
//     fetchCountries();
//   }, []);

// const fetchCountries = async () => {
//   try {
//     const response = await axios.get('https://restcountries.com/v3.1/all');
//     setCountries(response.data);
//   } catch (error) {
//     console.error('Error fetching countries:', error);
//   }
// };

// const fetchStates = async () => {
//   try {
//     const response = await axios.get(`https://countries-api.example.com/states/${selectedCountry}`);
//     setStates(response.data);
//   } catch (error) {
//     console.error('Error fetching states:', error);
//   }
// };

// const handleCountryChange = (event) => {
//   setSelectedCountry(event.target.value);
//   fetchStates();
// };

// return (
//   <div>
//     <select value={selectedCountry} onChange={handleCountryChange}>
//       <option value="">Select a country</option>
//       {countries.map((country) => (
//         <option key={country.cca3} value={country.cca3}>
//           {country.name.common}
//         </option>
//       ))}
//     </select>
//     <div>
//       <h2>States:</h2>
//       <ul>
//         {states.map((state) => (
//           <li key={state.id}>{state.name}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

//https://restcountries.com/v3.1/all --- GETS ALL COUNTRIES OF THE WORLD
//https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
