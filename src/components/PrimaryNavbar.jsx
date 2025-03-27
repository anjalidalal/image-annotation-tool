import { FiUpload } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";

export const PrimaryNavbar = ({ hasImages, handleFileChange }) => {
  return (
    <header className="py-5 px-8 xl:px-12 h-[72px] flex w-full justify-between items-center border-b border-b-surface-grey bg-surface-primary">
      <h1 className="font-medium text-text-dark text-base">Folder</h1>
      {hasImages && (
        <div className="flex items-center gap-4">
          <div className="relative h-12 flex items-center">
            <input
              type="text"
              placeholder="Search Images"
              className="border h-full w-[300px] xl:w-[454px] border-surface-grey rounded-lg text-sm hidden md:block pl-4 pr-2 py-2 outline-none"
            />
            <HiSearch className="absolute hidden md:block right-2.5 top-4 w-[18px] h-[18px] text-icon-grey" />
          </div>
          <label className="inline-flex items-center gap-1 px-4 py-3 text-base font-medium bg-blue text-surface-primary rounded-lg cursor-pointer">
            <FiUpload className="w-[18px] h-[18px]" />
            Upload
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}
    </header>
  );
};
