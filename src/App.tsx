import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 p-4">
        Header
        {/* Header content */}
      </header>
      <main className="flex-grow p-4">
        Content
        {/* Content */}
      </main>
    </div>
  );
};

export default App;

