import { motion } from "framer-motion";
import { MessageCircle, BotIcon } from "lucide-react";
import { useState } from "react";

export const Overview = () => {
  // TODO - user will be retrieved from 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState('Tom');
  return (
    <>
      <motion.div
        key="overview"
        className="max-w-3xl mx-auto md:mt-20"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ delay: 0.75 }}
      >
        <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
          <p className="flex flex-row justify-center gap-4 items-center">
            <BotIcon size={44} />
            <span>+</span>
            <MessageCircle size={44} />
          </p>
          <p>Influencer Marketing Chat</p>
          <strong>Welcome {user}!</strong>
        </div>
      </motion.div>
    </>
  );
};
