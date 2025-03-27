import { IoSendSharp } from "react-icons/io5";
import { VscMention } from "react-icons/vsc";
import { IoAttachOutline } from "react-icons/io5";

export const AddCommentModal = ({
  isThread,
  openCommentModal,
  setOpenCommentModal,
  comment,
  setComment,
  handleSubmit,
}) => {
  return (
    <>
      {!openCommentModal && (
        <div
          onClick={() => setOpenCommentModal(true)}
          className={`${
            !isThread && "shadow-boxShadow"
          } border border-surface-grey z-20 inline-flex items-center bg-surface-primary rounded-lg w-[173px] px-3 h-10 py-1.5 text-sm font-medium text-icon-grey`}
        >
          Add Comment
        </div>
      )}
      {openCommentModal && (
        <div
          className={`${
            isThread
              ? "border border-surface-grey w-[184px]"
              : "shadow-lg w-[173px]"
          } bg-surface-primary rounded-lg`}
        >
          <input
            className="w-full text-text-dark-p py-1.5 text-sm px-3 rounded-t-lg h-10 p-1 focus:outline-none"
            value={comment}
            placeholder="hello"
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex py-1 px-3 h-8 border-t border-t-surface-grey justify-between items-center">
            <div className="flex items-center text-medium-dark gap-0.5">
              <VscMention className="w-5 h-5 cursor-pointer" />
              <IoAttachOutline className="w-5 h-5 cursor-pointer" />
            </div>
            <IoSendSharp
              onClick={handleSubmit}
              className="text-blue h-5 w-5 cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
};
