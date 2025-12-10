import { Copy, ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { useState } from "react";
import type { Message } from "src/types/chat";
interface MessageActionsProps {
  message: Message;
}

export const MessageActions = ({ message }: MessageActionsProps) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    console.log("like");
    console.log(message.id);

    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    console.log("dislike");
    console.log(message.id);

    setDisliked(!disliked);
    setLiked(false);
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={handleCopy}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      >
        {copied ? (
          <Check className="text-black dark:text-white" size={16} />
        ) : (
          <Copy className="text-gray-500" size={16} />
        )}
      </button>
      <button
        onClick={handleLike}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      >
        <ThumbsUp
          className={liked ? "text-black dark:text-white" : "text-gray-500"}
          size={16}
        />
      </button>
      <button
        onClick={handleDislike}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      >
        <ThumbsDown
          className={disliked ? "text-black dark:text-white" : "text-gray-500"}
          size={16}
        />
      </button>
    </div>
  );
};
