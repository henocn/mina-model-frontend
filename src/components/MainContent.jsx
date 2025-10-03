import { useState, useEffect, useRef } from "react";
import { User, Cpu, Play } from "lucide-react"; // Remplacement Robot par Cpu

const chatHistory = [
  { role: "user", content: "Salut, comment ça va ?" },
  { role: "ai", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { role: "user", content: "Peux-tu me lire un texte ?" },
  { role: "ai", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
];

const MainContent = () => {
  const [messages, setMessages] = useState(chatHistory);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { role: "user", content: input };
    const newIA = {
      role: "ai",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    };

    setMessages([...messages, newMsg, newIA]);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Topbar FIXED */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-300 to-blue-300 shadow-md">
        <div className="flex items-center justify-between px-6 py-3">
          <span className="text-lg font-bold text-gray-900">MinaModel</span>
          <div className="flex space-x-6 text-gray-800">
            <a href="#" className="hover:text-purple-700 font-medium">Generate</a>
            <a href="#" className="hover:text-purple-700 font-medium">Teams</a>
          </div>
          <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white">
            <User size={18} />
          </div>
        </div>
      </div>

      {/* Cadre du chat (scrollable seulement ici) */}
      <div className="flex-1 flex justify-center mt-[64px] mb-[80px] overflow-hidden">
        <div className="flex flex-col w-full max-w-2xl overflow-y-auto px-4 space-y-4 border border-purple-200 rounded-lg bg-white shadow-sm">
          {messages.map((msg, idx) =>
            msg.role === "user" ? (
              <div key={idx} className="flex justify-end">
                <div className="flex items-end space-x-2 max-w-[70%]">
                  <div className="bg-purple-200 text-gray-900 px-4 py-2 rounded-2xl shadow-sm">
                    {msg.content}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-purple-400 flex items-center justify-center text-white">
                    <User size={18} />
                  </div>
                </div>
              </div>
            ) : (
              <div key={idx} className="flex justify-start">
                <div className="flex items-center space-x-2 max-w-[70%]">
                  <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-800">
                    <Cpu size={18} />
                  </div>
                  <div className="bg-gray-200 px-4 py-2 rounded-2xl shadow-sm flex items-center space-x-2 w-full">
                    <button className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white hover:bg-purple-500">
                      <Play size={16} />
                    </button>
                    <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden relative">
                      <div className="absolute left-0 top-0 h-full w-1/2 bg-purple-400 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input FIXE en bas */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-purple-200 shadow-md flex justify-center p-4">
        <div className="flex w-full max-w-2xl space-x-2">
          <input
            type="text"
            placeholder="Écrivez votre message..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-900 focus:outline-none shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-5 py-3 bg-purple-400 text-white rounded-xl hover:bg-purple-500 font-semibold shadow-md"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
