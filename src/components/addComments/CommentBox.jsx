import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, addReply } from "../../redux/commentsSlice";
import { AddCommentModal } from "./AddCommentModal";

const CommentBox = ({ x, y, id, onClose }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [replyText, setReplyText] = useState("");
  const replies = useSelector((state) => state.comments.comments);

  const [openCommentModal, setOpenCommentModal] = useState(false);

  const handleSubmit = () => {
    if (text.trim()) {
      if (id) {
        dispatch(addReply({ parentId: id, replyText }));
      } else {
        dispatch(addComment({ x: x ?? "", y: y ?? "", text }));
      }
      onClose();
    }
  };
  console.log("hwyyadadef/.....", replies);

  return (
    <>
      {id ? (
        <div className="w-[240px] z-50 relative p-3 bg-white shadow-lg rounded-lg border">
          <h3 className="text-gray-600 font-medium">Comment</h3>
          <div className="flex w-full items-start flex-col gap-3 mt-2">
            <div className="items-center gap-1 flex">
              <div className="bg-[#1E7631] text-surface-primary rounded-full h-6 w-6 flex justify-center items-center">
                A
              </div>
              <p className="text-xs whitespace-nowrap text-text-dark-p font-medium">
                Akanksha Sagar
              </p>
            </div>
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
                handleSubmit={handleSubmit}
                isThread
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute" style={{ top: y, left: x }}>
          <AddCommentModal
            openCommentModal={openCommentModal}
            setOpenCommentModal={setOpenCommentModal}
            comment={text}
            setComment={setText}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </>
  );
};

export default CommentBox;
