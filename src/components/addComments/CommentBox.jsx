import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, addReply } from "../../redux/commentsSlice";
import { AddCommentModal } from "./AddCommentModal";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const CommentBox = ({ x, y, id, onClose, commentData }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [replyText, setReplyText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [openCommentModal, setOpenCommentModal] = useState(false);

  const handleAddComment = () => {
    if (text.trim()) {
      dispatch(addComment({ x: x ?? "", y: y ?? "", text: text }));
      setText("");
      onClose();
    }
  };

  const handleAddReply = () => {
    if (replyText.trim()) {
      dispatch(addReply({ parentId: id, text: replyText.trim() }));
      setReplyText("");
    }
  };

  return (
    <>
      {id ? (
        <div
          ref={dropdownRef}
          className="w-[240px] z-50 relative p-3 bg-white shadow-lg rounded-lg border"
        >
          <div className="flex justify-between border-b pb-1 border-b-[#E7E7EB] text-text-dark-p items-center">
            <h3 className="text-gray-600 text-sm font-medium">Comment</h3>
            <div className="inline-flex items-center gap-3">
              <BsThreeDots
                onClick={() => setDropdownOpen(true)}
                className="w-[14px] h-[14px] text-medium-dark"
              />
              <IoClose
                onClick={onClose}
                className="w-4 h-4 cursor-pointer text-[#707683]"
              />
            </div>
          </div>
          <div className="flex w-full items-start flex-col gap-3 mt-2">
            <div className="gap-1 flex-col flex">
              <div className="text-text-dark-p items-center gap-1 flex">
                <div className="bg-[#1E7631] text-surface-primary rounded-full h-6 w-6 flex justify-center items-center">
                  A
                </div>
                <p className="text-xs whitespace-nowrap text-text-dark-p font-medium">
                  Akanksha Sagar
                </p>
              </div>
              <p className="text-xs ml-7 font-normal">{commentData.text}</p>
            </div>
            {commentData?.replies ? (
              <>
                {commentData?.replies?.map((el) => (
                  <div className="gap-1 flex-col flex">
                    <div className="text-text-dark-p items-center gap-1 flex">
                      <div className="bg-[#1E7631] text-surface-primary rounded-full h-6 w-6 flex justify-center items-center">
                        A
                      </div>
                      <p className="text-xs whitespace-nowrap text-text-dark-p font-medium">
                        Akanksha Sagar
                      </p>
                    </div>
                    <p className="text-xs ml-7 font-normal">{el.text}</p>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
            <div
              className={`${
                openCommentModal ? "items-start" : " items-center"
              } flex gap-1`}
            >
              <div className="bg-[#1E7631] text-surface-primary rounded-full h-6 w-6 flex justify-center items-center">
                A
              </div>
              <AddCommentModal
                openCommentModal={openCommentModal}
                setOpenCommentModal={setOpenCommentModal}
                comment={replyText}
                setComment={setReplyText}
                handleSubmit={handleAddReply}
                isThread
              />
            </div>
          </div>
          {dropdownOpen && (
            <div className="absolute text-medium-dark right-3 top-9 p-1 bg-surface-primary border border-surface-grey rounded-md text-sm">
              <button className="block rounded px-2.5 py-1 hover:bg-primary-bg w-full text-left">
                Edit
              </button>
              <button className="block px-2.5 py-1 rounded whitespace-nowrap hover:bg-primary-bg w-full text-left">
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="absolute" style={{ top: y, left: x }}>
          <AddCommentModal
            openCommentModal={openCommentModal}
            setOpenCommentModal={setOpenCommentModal}
            comment={text}
            setComment={setText}
            handleSubmit={handleAddComment}
          />
        </div>
      )}
    </>
  );
};

export default CommentBox;
