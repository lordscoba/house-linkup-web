import React from 'react';

type Props = {
  toiletImageUrl: string;
  toiletImageName: string;
  handleToiletLabelClick: () => void;
  handleToiletFileChange: (e: any) => void;
  toiletRef: null;
  handleToiletImagePreview: (e: any) => void;
  isToiletImage: boolean;
};

const UploadToilet = ({
  handleToiletFileChange,
  handleToiletImagePreview,
  handleToiletLabelClick,
  isToiletImage,
  toiletImageName,
  toiletImageUrl,
  toiletRef,
}: Props) => {
  return (
    <section className="w-full lg:max-w-[228px]">
      <h2 className="text-[18px] font-[600] text-[#000]">Toilet Image</h2>
      <div className="image-uploader border-2 border-dashed border-[#69B99D] rounded-md flex items-center justify-center h-[213px] pt-6 text-center ">
        <div
          className="drop-area h-full"
          // onDrop={handleDrop}
          // onDragOver={handleDragOver}
        >
          {toiletImageUrl ? (
            // <img src={image} alt="Uploaded" className="preview-image" />
            <p className="font-bold">{toiletImageName}</p>
          ) : (
            <p className="text-[#000] font-[500] text-[1rem]">
              Drag and drop an image here or
            </p>
          )}

          <div className="inline-block relative cursor-pointer ">
            <label
              htmlFor="browse"
              onClick={handleToiletLabelClick}
              className="inline-block py-[10px] px-[20px] cursor-pointer text-[#69B99D] font-[500] text-[1rem]"
            >
              Browse
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleToiletFileChange}
              ref={toiletRef}
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
          onClick={handleToiletImagePreview}
          className=" mb-[1rem] border px-3 py-1 bg-[rgba(110,99,99,0.7)] text-[#fff]"
        >
          Preview Image
        </button>
        {isToiletImage && (
          <>
            {!toiletImageUrl ? (
              <p>No Image to Preview at the moment</p>
            ) : (
              <img
                src={toiletImageUrl}
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

export default UploadToilet;
