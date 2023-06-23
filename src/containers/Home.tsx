import React from 'react'
import Header from '../components/Header';

type Props = {}

const Home: React.FC = ({}: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 p-4">
        <Header />
      </header>
      <main className="flex-grow p-4">
        Content
        {/* Content */}
      </main>
    </div>
  )
}

export default Home;