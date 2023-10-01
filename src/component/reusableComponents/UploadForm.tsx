import React, { useState, useRef, useEffect } from 'react';
import UploadParlor from './UploadParlor';
import UploadKitchen from './UploadKitchen';
import UploadToilet from './UploadToilet';
import UploadRoom from './UploadRoom';
import UploadBathRoom from './UploadBathRoom';
import { useDispatch, useSelector } from 'react-redux';
import { uploadHouseUserAction } from '../../redux/actions/dashboardactions/usersdashboard/usersdashboard.action';
import { StoreReducerTypes } from '../../redux/store';
import { UPLOAD_HOUSE_RESET } from '../../redux/constants/dashboardconstants/usersdashboardconstants/usersdashboard.constants';
import CircularLoader from '../loader/CircularLoader';
import Message from '../message/Message';
import State from '../select/State';
import LocalGovSelect from '../select/LocalGovSelect';
import TownsSelect from '../select/TownsSelect';

type Props = {
  setData: Function;
};

const UploadForm = ({ setData }: Props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null) as any;
  const [imageName, setImageName] = useState('');
  const [isImage, setIsImage] = useState<boolean>(false);
  const [house_type, setHouse_type] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [local_government, setLocal_government] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [numOfParlor, setNumOfParlor] = useState(0);
  const [numOfKitchen, setNumOfKitchen] = useState(0);
  const [numOfToilet, setNumOfToilet] = useState(0);
  const [numOfRooms, setNumOfRooms] = useState(0);
  const [numOfBathRoom, setNumOfBathRoom] = useState(0);
  const [price, setPrice] = useState(0);

  const [parlorImageName, setParlorImageName] = useState('');
  const [parlorImageUrl, setparlorImageUrl] = useState('');
  const [isParlorImage, setIsParlorImage] = useState<boolean>(false);

  const [kitchenImageName, setKitchenImageName] = useState('');
  const [kitchenImageUrl, setKitchenImageUrl] = useState('');
  const [isKitchenImage, setIsKitchenImage] = useState<boolean>(false);

  const [toiletImageName, setToiletImageName] = useState('');
  const [toiletImageUrl, setToiletImageUrl] = useState('');
  const [isToiletImage, setIsToiletImage] = useState<boolean>(false);

  const [roomImageName, setRoomImageName] = useState('');
  const [roomImageUrl, setRoomImageUrl] = useState('');
  const [isRoomImage, setIsRoomImage] = useState<boolean>(false);

  const [bathRoomImageName, setBathRoomImageName] = useState('');
  const [bathRoomImageUrl, setBathRoomImageUrl] = useState('');
  const [isBathRoomImage, setIsBathRoomImage] = useState<boolean>(false);

  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setaddress] = useState('');
  const [posterId, setPosterId] = useState('');

  const fileInputRef = useRef(null) as any;
  const parlorRef = useRef(null) as any;
  const kitchenRef = useRef(null) as any;
  const toiletRef = useRef(null) as any;
  const roomRef = useRef(null) as any;
  const bathRoomRef = useRef(null) as any;

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState('');

  const uploadHouseState = useSelector(
    (state: StoreReducerTypes) => state?.uploadHouse
  );

  // console.log(uploadHouseState);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    setImage(file);
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      // setImage(imageURL);
      setImageName(file?.name);
      console.log({ image: image });
    }
  };

  const handleParlorFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setparlorImageUrl(imageURL);
      setParlorImageName(file?.name);
    }
  };

  const handleToiletFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setToiletImageUrl(imageURL);
      setToiletImageName(file?.name);
    }
  };

  const handleKitchenFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setKitchenImageUrl(imageURL);
      setKitchenImageName(file?.name);
    }
  };

  const handleRoomFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      // const file = event?.target?.files?.[0];
      setRoomImageUrl(imageURL);
      setRoomImageName(file?.name);
    }
  };

  const handleBathRoomFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setBathRoomImageUrl(imageURL);
      setBathRoomImageName(file?.name);
    }
  };

  // HANDLE DROP FUNCTION
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      setImageName(file?.name);
    }
  };

  // HANDLE DRAG OVER

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // HANDLE LABEL CLICK THAT OPENS THE IMAGE FOLDER
  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleParlorLabelClick = () => {
    parlorRef.current.click();
  };

  const handleKitchenLabelClick = () => {
    kitchenRef.current.click();
  };

  const handleToiletLabelClick = () => {
    toiletRef.current.click();
  };

  const handleRoomLabelClick = () => {
    roomRef.current.click();
  };

  const handleBathRoomLabelClick = () => {
    bathRoomRef.current.click();
  };

  // HANDLE IMAGE PREVIEW FUNCTIONS

  const handleImagePreview = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsImage((prev) => !prev);
  };

  const handleParlorImagePreview = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsParlorImage((prev) => !prev);
  };

  const handleKitchenImagePreview = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsKitchenImage((prev) => !prev);
  };

  const handleToiletImagePreview = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsToiletImage((prev) => !prev);
  };

  const handleRoomImagePreview = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsRoomImage((prev) => !prev);
  };

  const handleBathRoomImagePreview = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setIsBathRoomImage((prev) => !prev);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const arrays = {
      image,
      full_name: fullName,
      email,
      address,
      house_type,
      state,
      city,
      totalNum_ofParlor: numOfParlor,
      totalNum_ofKitchen: numOfKitchen,
      totalNum_ofRooms: numOfRooms,
      totalNum_ofToilet: numOfToilet,
      totalNum_ofBathroom: numOfBathRoom,
      status,
      price,
    };
    setData([arrays]);
    window.scrollTo({
      top: 26,
      behavior: 'smooth',
    });

    dispatch(
      uploadHouseUserAction({
        address,
        city,
        description,
        email,
        frontImage: image,
        full_Name: fullName,
        house_type,
        local_government,
        poster: posterId,
        price,
        state,
        status,
        totalNum_ofParlor: numOfParlor,
        totalNum_ofKitchen: numOfKitchen,
        totalNum_ofRooms: numOfRooms,
        totalNum_ofToilet: numOfToilet,
        totalNum_ofBathroom: numOfBathRoom,
        token,
      }) as any
    );

    dispatch({ type: UPLOAD_HOUSE_RESET });
  };

  // USEEFFECT

  useEffect(() => {
    const loading = uploadHouseState?.loading;
    setLoading(loading);

    const success = uploadHouseState?.success;
    setSuccess(success);
    if (success) {
      const Message = uploadHouseState?.serverResponse?.message;
      setSuccessMessage(Message);
    }
  }, [uploadHouseState?.loading, uploadHouseState?.success]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    setErrorMessage('');
    if (success) {
      timeout = setTimeout(() => {
        setSuccessMessage('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [success]);

  useEffect(() => {
    const err = uploadHouseState?.error;
    setError(err);
    if (err) {
      const err = uploadHouseState?.serverError;
      setErrorMessage(err);
    }
  }, [uploadHouseState?.error]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (errorMessage) {
      timeout = setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  useEffect(() => {
    const storedData = localStorage.getItem('loginUser')
      ? JSON.parse(localStorage.getItem('loginUser') as any)
      : null;

    const storedToken = storedData?.token;
    const id = storedData?.userDoc?._id;
    setPosterId(id);
    setToken(storedToken);
  }, []);

  return (
    <section className="w-full max-w-[1130px] py-[23px] m-auto xl:px-0 hide-scrollbar">
      {uploadHouseState?.loading ? <CircularLoader /> : null}
      {success ? <Message type="success"> {successMessage}</Message> : null}

      {error ? <Message type="danger">{errorMessage}</Message> : null}
      <form
        onSubmit={handleFormSubmit}
        className="w-full xl:w-[1130px] m-auto bg-[#fff] rounded-lg lg:px-[63px] px-2  py-[42px]    mb-[5rem] border"
      >
        <section className="">
          <section>
            <h2 className="text-center text-[16px] lg:text-[22px] font-semibold mb-3">
              {' '}
              Poster's Details
            </h2>

            <section className="flex gap-[20px] flex-wrap ">
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="fullName" className="text-[17px] font-[600]">
                  {' '}
                  Full Name <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    id="Fullname"
                    value={fullName}
                    onChange={(e: any) => setFullname(e.target.value)}
                    placeholder="Enter Full Name"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="email" className="text-[17px] font-[600]">
                  Email <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="email"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="address" className="text-[17px] font-[600]">
                  Address <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e: any) => setaddress(e.target.value)}
                    placeholder="email"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
            </section>
          </section>
          <br />

          <section>
            <h2 className="text-center text-[16px] lg:text-[22px] font-semibold mb-3">
              {' '}
              House Details
            </h2>

            <section className="flex gap-[20px] flex-wrap">
              <div className="lg:w-[318px] w-full mb-4">
                {/* <label htmlFor="state" className="text-[17px] font-[600]">
                  {' '}
                  State
                </label>{' '}
                <span className="text-[red] text-[1.2rem] ">*</span>
                <div className="border flex  px-4 py-2 rounded-md">
                  <select
                    name="state"
                    id="state"
                    onChange={(e: any) => setState(e.target.value)}
                    className="w-full border-none outline-none focus:border-none"
                  >
                    <option value="" disabled selected>
                      Select State
                    </option>{' '}
                    <option value="anambra">Anambra</option>
                    <option value="Enugu">Enugu</option>
                    <option value="imo">Imo</option>
                  </select>
                </div> */}

                <State location="State" />
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                {/* <label htmlFor="city" className="text-[17px] font-[600]">
                  {' '}
                  City
                </label>{' '}
                <span className="text-[red] text-[1.2rem] ">*</span>
                <div className="border flex  px-4 py-2 rounded-md">
                  <select
                    name="city"
                    id="city"
                    onChange={(e: any) => setCity(e.target.value)}
                    className="w-full border-none outline-none focus:border-none"
                  >
                    <option value="" disabled selected>
                      Select City
                    </option>{' '}
                    <option value="awka">Awka</option>
                    <option value="uduEbot">UduEbot</option>
                  </select>
                </div> */}

                <LocalGovSelect />
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                {/* <label
                  htmlFor="local-government"
                  className="text-[17px] font-[600]"
                >
                  {' '}
                  LGA
                </label>{' '}
                <span className="text-[red] text-[1.2rem] ">*</span>
                <div className="border flex  px-4 py-2 rounded-md">
                  <select
                    name="local-government"
                    id="local-government"
                    onClick={(e: any) => setLocal_government(e.target.value)}
                    className="w-full border-none outline-none focus:border-none"
                  >
                    <option value="" disabled selected>
                      Select LGA
                    </option>{' '}
                    <option value="dunukofia">Dunukofia</option>
                    <option value="aniocha">Aniocha</option>
                  </select>
                </div> */}

                <TownsSelect />
              </div>
              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="home-type" className="text-[17px] font-[600]">
                  {' '}
                  Home Type
                </label>{' '}
                <span className="text-[red] text-[1.2rem] ">*</span>
                <div className="border flex  px-4 py-2 rounded-md">
                  <select
                    name="home-type"
                    onChange={(e: any) => setHouse_type(e.target.value)}
                    id="home-type"
                    className="w-full border-none outline-none focus:border-none"
                  >
                    <option value="" disabled selected>
                      Select Home Type
                    </option>{' '}
                    <option value="1 bedroom flat">One Bedroom Flat</option>
                    <option value="2 bedroom flat">two Bedroom Flat</option>
                    <option value="3 bedroom flat">three Bedroom Flat</option>
                  </select>
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="price" className="text-[17px] font-[600]">
                  {' '}
                  Price <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e: any) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="status" className="text-[17px] font-[600]">
                  {' '}
                  Status
                </label>{' '}
                <span className="text-[red] text-[1.2rem] ">*</span>
                <div className="border flex  px-4 py-2 rounded-md">
                  <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e: any) => setStatus(e.target.value)}
                    className="w-full border-none outline-none focus:border-none"
                  >
                    <option value="" disabled selected>
                      Select an option (Buy or Rent)
                    </option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="NumOfParlor" className="text-[17px] font-[600]">
                  {' '}
                  No Of parlor{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfParlor"
                    id="NumOfParlor"
                    value={numOfParlor}
                    onChange={(e: any) => setNumOfParlor(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label
                  htmlFor="NumOfKitchen"
                  className="text-[17px] font-[600]"
                >
                  {' '}
                  No Of Kitchen{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfKitchen"
                    id="NumOfKitchen"
                    value={numOfKitchen}
                    onChange={(e: any) => setNumOfKitchen(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="NumOfToilet" className="text-[17px] font-[600]">
                  {' '}
                  No Of Toilet{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfToilet"
                    id="NumOfToilet"
                    value={numOfToilet}
                    onChange={(e: any) => setNumOfToilet(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label htmlFor="NumOfRooms" className="text-[17px] font-[600]">
                  {' '}
                  No Of Rooms{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfRooms"
                    id="NumOfRooms"
                    value={numOfRooms}
                    onChange={(e: any) => setNumOfRooms(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>

              <div className="lg:w-[318px] w-full mb-4">
                <label
                  htmlFor="NumOfBathRoom"
                  className="text-[17px] font-[600]"
                >
                  {' '}
                  No Of BathRoom{' '}
                  <span className="text-[red] text-[1.2rem] ">*</span>
                </label>
                <div>
                  <input
                    type="tel"
                    name="NumOfBathRoom"
                    id="NumOfBathRoom"
                    value={numOfBathRoom}
                    onChange={(e: any) => setNumOfBathRoom(e.target.value)}
                    placeholder="EG 2, 3...."
                    className="w-full border py-2 px-4 rounded-md"
                  />
                </div>
              </div>
            </section>
          </section>

          <br />

          <section className="mb-[25px]">
            <label htmlFor="description" className="text-[17px] font-[600]">
              Description{' '}
            </label>
            <span className="text-[red] text-[1.2rem] ">*</span>
            <div>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                className="px-4 border w-full rounded-md h-[151px] pt-2"
              ></textarea>
            </div>
          </section>
          {/* IMAGE UPLOAD */}
          <section>
            <h2 className="text-[18px] font-[600] text-[#000]">
              Upload Photos
            </h2>
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
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="my-2">
              <button
                onClick={handleImagePreview}
                className=" mb-[1rem] border px-3 py-1 bg-[rgba(110,99,99,0.7)] text-[#fff]"
              >
                Preview Image
              </button>
            </div>

            <div className="text-center mt-[55px]">
              <button
                type="submit"
                className="bg-[#69B99D] font-[500] text-[#fff] xl:text-[22px] text-[18px] w-full xl:w-[513px] m-auto xl:py-[16px] py-[8px] rounded-md"
              >
                Submit
              </button>
            </div>
            <div className="mt-[25px] text-enter">
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

          {/* OTHER IMPORTANT IMAGES */}
          {/* <div>
            <h2 className="font-semibold text-center text-[18px] my-10 uppercase">
              Other Important Images to upload (REQUIRED)
            </h2>
            <div className="flex flex-wrap gap-6">
              <UploadParlor
                handleParlorFileChange={handleParlorFileChange}
                handleParlorImagePreview={handleParlorImagePreview}
                handleParlorLabelClick={handleParlorLabelClick}
                isParlorImage={isParlorImage}
                parlorImageName={parlorImageName}
                parlorImageUrl={parlorImageUrl}
                parlorRef={parlorRef}
              />

              <UploadKitchen
                handleKitchenFileChange={handleKitchenFileChange}
                handleKitchenImagePreview={handleKitchenImagePreview}
                handleKitchenLabelClick={handleKitchenLabelClick}
                isKitchenImage={isKitchenImage}
                kitchenImageName={kitchenImageName}
                kitchenImageUrl={kitchenImageUrl}
                kitchenRef={kitchenRef}
              />

              <UploadToilet
                handleToiletFileChange={handleToiletFileChange}
                handleToiletImagePreview={handleToiletImagePreview}
                handleToiletLabelClick={handleToiletLabelClick}
                isToiletImage={isToiletImage}
                toiletImageName={toiletImageName}
                toiletImageUrl={toiletImageUrl}
                toiletRef={toiletRef}
              />

              <UploadRoom
                handleRoomFileChange={handleRoomFileChange}
                handleRoomImagePreview={handleRoomImagePreview}
                handleRoomLabelClick={handleRoomLabelClick}
                isRoomImage={isRoomImage}
                roomImageName={roomImageName}
                roomImageUrl={roomImageUrl}
                roomRef={roomRef}
              />
              <UploadBathRoom
                bathRoomImageName={bathRoomImageName}
                bathRoomImageUrl={bathRoomImageUrl}
                bathRoomRef={bathRoomRef}
                handleBathRoomFileChange={handleBathRoomFileChange}
                handleBathRoomImagePreview={handleBathRoomImagePreview}
                handleBathRoomLabelClick={handleBathRoomLabelClick}
                isBathRoomImage={isBathRoomImage}
              />
            </div>
          </div> */}
        </section>
      </form>
    </section>
  );
};

export default UploadForm;
