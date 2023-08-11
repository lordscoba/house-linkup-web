import React, { useState, useRef } from 'react';

type Props = {};

const ContactHero = (props: Props) => {
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
  return (
    <section className="">
      <section className="bg-[#D9D9D9] pt-[93px]">
        <p className="text-center text-[24px] text-[#000] font-[500]">
          Rent with us and be Confident that Your home will be Filled Out!
        </p>
        <div className="image-uploader border border-dashed h-[102px] text-center text-[red]">
          <div
            className="drop-area h-full"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              // <img src={image} alt="Uploaded" className="preview-image" />
              <p>{imageName}</p>
            ) : (
              <p>Drag and drop an image here or</p>
            )}

            <div className="inline-block relative cursor-pointer ">
              <label
                htmlFor="browse"
                onClick={handleLabelClick}
                className="inline-block py-[10px] px-[20px] cursor-pointer"
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
        <div>
          <button onClick={() => setIsImage((prev) => !prev)}>
            Preview Image
          </button>
          {isImage && (
            <img src={image} alt="Uploaded" className="preview-image" />
          )}
        </div>
      </section>
    </section>
  );
};

export default ContactHero;

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
