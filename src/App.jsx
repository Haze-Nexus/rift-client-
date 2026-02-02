import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [chats, setChats] = useState([
    { id: 1, title: 'Primeiro Contato', messages: [] }
  ]);
  const [activeChatId, setActiveChatId] = useState(1);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: `Chat ${chats.length + 1}`,
      messages: []
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  const handleDeleteChat = (id) => {
    const filtered = chats.filter(c => c.id !== id);
    setChats(filtered);
    if (activeChatId === id && filtered.length > 0) {
      setActiveChatId(filtered[0].id);
    }
  };

  return (
    <div className="flex h-screen w-full bg-rift-dark text-gray-200">
      <Sidebar 
        chats={chats} 
        activeId={activeChatId} 
        onSelect={setActiveChatId} 
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
      />
      <main className="flex-1 flex flex-col items-center justify-center border-t border-white/5 md:border-t-0">
         <p className="text-gray-500">Selecione ou crie um chat para começar.</p>
      </main>
    </div>
  );
}

export default App;