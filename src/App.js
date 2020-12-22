
import React from 'react'

const api = {
  key: "56da9185963cb122e472cf80b61488b7", 
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app warm">
      <main>
        <div className='search-box'>
          <input
            type='text'
            className="search-bar"
            placeholder="Search..."
            />
        </div>
      </main>
    </div>
  );
}

export default App;
