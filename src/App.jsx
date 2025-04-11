import React from 'react';
import Domain from './components/domain';

function App() {

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
  <DomainCard title="AI/ML" imageSrc={ai} />
</div>

  )
}

export default App
