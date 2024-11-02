'use client';

import { useChat } from 'ai/react';
import ChatMessage from './ChatMessage';

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isAi={message.role === 'assistant'}
            />
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe tu mensaje aquí..."
          className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
} 