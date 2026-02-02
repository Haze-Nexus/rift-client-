import { MessageSquare, Plus, Trash2 } from 'lucide-react';

export default function Sidebar({ chats, activeId, onSelect, onNewChat, onDeleteChat }) {
  return (
    <aside className="w-64 bg-black/40 border-r border-white/5 flex flex-col p-4 h-full">
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-8 h-8 bg-gradient-to-tr from-rift-purple to-rift-pink rounded flex items-center justify-center font-bold text-white shadow-lg">R</div>
        <span className="font-bold text-xl tracking-tighter text-white">RIFT.ai</span>
      </div>

      <button 
        onClick={onNewChat}
        className="flex items-center justify-center gap-2 w-full py-3 mb-6 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-semibold text-rift-pink"
      >
        <Plus size={18} /> Novo Chat
      </button>

      <div className="flex-1 overflow-y-auto space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 px-2">Histórico</p>
        {chats.map(chat => (
          <div key={chat.id} className="group relative">
            <button
              onClick={() => onSelect(chat.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all ${
                activeId === chat.id ? 'bg-rift-purple/10 text-white' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <MessageSquare size={16} />
              <span className="truncate pr-6">{chat.title}</span>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onDeleteChat(chat.id); }}
              className="absolute right-2 top-3 text-gray-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}