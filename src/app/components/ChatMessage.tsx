import { FC } from 'react';

interface ChatMessageProps {
  message: string;
  isAi: boolean;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, isAi }) => {
  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isAi 
            ? 'bg-gray-200 text-gray-800' 
            : 'bg-blue-500 text-white'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage; 