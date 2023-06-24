import React from 'react'
import Header from '../components/Header';
import Content from './Content';

type Props = {}

const Home: React.FC = ({}: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white">
        <Header />
      </header>
      <main className="flex-grow">
        <Content />
      </main>
    </div>
  )
}

export default Home;