import React from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
const cards = data.map(item => {
  return (
    <Card 
      key={item.id}
      {...item}
    />
  )
})

// test comment

  return (
      <div>
          <Navbar />
          <section className="card--list">
            {cards}
          </section>
      </div>
  );
}

export default App;
