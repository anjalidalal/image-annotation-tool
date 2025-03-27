import { IoMdImage } from "react-icons/io";

export const ImageGrid = ({ images }) => {
  return (
    <div className="grid max-md:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-x-9 gap-y-[26px] p-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="group cursor-pointer hover:shadow w-full xl:w-[240px] border-[0.5px] p-3 flex gap-2.5 flex-col bg-surface-primary rounded-md border-surface-grey"
        >
          <div className="bg-white gap-1 flex items-center text-text-dark-p text-xs font-semibold">
            <IoMdImage className="text-[#FFB444] w-5 h-5" /> {image.name}
          </div>
          <div className="border-[0.5px] rounded-md cursor-pointer border-surface-grey">
            <img
              src={image.url}
              alt={image.name}
              className="w-full rounded-md h-40 object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
