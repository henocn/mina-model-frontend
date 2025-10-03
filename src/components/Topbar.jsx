import { useState } from "react";
import { Sun, Moon, ChevronDown, LogOut, Settings } from "lucide-react";

export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-700 via-purple-700 to-gray-700 dark:from-gray-700 dark:via-purple-800 dark:to-gray-700 text-white px-6 py-2 flex items-center justify-between shadow-md">
      <div className="text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        MinaModel
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-purple-300 transition-colors">Conversation</a>
        <a href="#" className="hover:text-purple-300 transition-colors">Équipe</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="relative">
          <button className="flex items-center space-x-1 hover:text-purple-300">
            <span>User</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}