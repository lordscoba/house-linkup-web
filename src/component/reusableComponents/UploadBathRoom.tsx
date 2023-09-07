import React from 'react';

type Props = {
  bathRoomImageUrl: string;
  bathRoomImageName: string;
  handleBathRoomLabelClick: () => void;
  handleBathRoomFileChange: (e: any) => void;
  bathRoomRef: null;
  handleBathRoomImagePreview: (e: any) => void;
  isBathRoomImage: boolean;
};

const UploadBathRoom = ({
  bathRoomImageName,
  bathRoomImageUrl,
  bathRoomRef,
  handleBathRoomFileChange,
  handleBathRoomImagePreview,
  handleBathRoomLabelClick,
  isBathRoomImage,
}: Props) => {
  return (
    <section className="w-full lg:max-w-[228px]">
      <h2 className="text-[18px] font-[600] text-[#000]">Bathroom Image</h2>
      <div className="image-uploader border-2 border-dashed border-[#69B99D] rounded-md flex items-center justify-center h-[213px] pt-6 text-center ">
        <div
          className="drop-area h-full"
          // onDrop={handleDrop}
          // onDragOver={handleDragOver}
        >
          {bathRoomImageUrl ? (
            // <img src={image} alt="Uploaded" className="preview-image" />
            <p className="font-bold">{bathRoomImageName}</p>
          ) : (
            <p className="text-[#000] font-[500] text-[1rem]">
              Drag and drop an image here or
            </p>
          )}

          <div className="inline-block relative cursor-pointer ">
            <label
              htmlFor="browse"
              onClick={handleBathRoomLabelClick}
              className="inline-block py-[10px] px-[20px] cursor-pointer text-[#69B99D] font-[500] text-[1rem]"
            >
              Browse
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleBathRoomFileChange}
              ref={bathRoomRef}
              className="hidden"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-[55px]">
        <button
          type="submit"
          className="bg-[#69B99D] font-[500] text-[#fff] xl:text-[20px] text-[15px] w-full py-1  m-auto   rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="mt-[25px] text-enter">
        <button
          onClick={handleBathRoomImagePreview}
          className=" mb-[1rem] border px-3 py-1 bg-[rgba(110,99,99,0.7)] text-[#fff]"
        >
          Preview Image
        </button>
        {isBathRoomImage && (
          <>
            {!bathRoomImageUrl ? (
              <p>No Image to Preview at the moment</p>
            ) : (
              <img
                src={bathRoomImageUrl}
                alt="Uploaded"
                className="preview-image"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default UploadBathRoom;
