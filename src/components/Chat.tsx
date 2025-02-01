"use client";

import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;

    console.log("Message sent:", message); // Placeholder for sending message
    setMessage(""); // Clear input field after sending
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">💬 Chat App</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 text-black rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-full mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
