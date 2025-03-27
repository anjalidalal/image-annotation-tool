import { useRef, useState } from "react";
import { IoMdImage } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useClickAway } from "react-use";
import ImageWithComments from "./addComments/ImageWithComments";

export const ImageGrid = ({ images }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useClickAway(dropdownRef, () => {
    setDropdownOpen(null);
  });

  return (
    <>
      {selectedImage ? (
        <ImageWithComments
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      ) : (
        <div className="grid max-md:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-x-9 gap-y-[26px] p-6">
          {images.map((image, index) => (
            <div
              key={index}
              ref={dropdownRef}
              onClick={() => setSelectedImage(image)}
              className="group relative cursor-pointer hover:shadow w-full xl:w-[240px] border-[0.5px] p-3 flex gap-2.5 flex-col bg-surface-primary rounded-md border-surface-grey"
            >
              <div className="bg-white gap-1 flex justify-between items-center text-text-dark-p text-xs font-semibold">
                <p>
                  <IoMdImage className="text-[#FFB444] inline-flex items-center w-5 h-5" />{" "}
                  {image.name}
                </p>
                <button
                  className={`group-hover:block ${
                    dropdownOpen === index ? "block" : "hidden"
                  }`}
                  onClick={() =>
                    setDropdownOpen(dropdownOpen === index ? null : index)
                  }
                >
                  <BsThreeDotsVertical className="w-[14px] h-[14px] text-medium-dark" />
                </button>
              </div>
              <div className="border-[0.5px] rounded-md cursor-pointer border-surface-grey">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full rounded-md h-40 object-contain"
                />
              </div>
              {dropdownOpen === index && (
                <div className="absolute text-medium-dark right-3 top-9 p-1 bg-surface-primary border border-surface-grey rounded text-sm">
                  <button className="block rounded p-2.5 hover:bg-primary-bg w-full text-left">
                    Rename
                  </button>
                  <button className="block p-2.5 rounded whitespace-nowrap hover:bg-primary-bg w-full text-left">
                    Download File
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
