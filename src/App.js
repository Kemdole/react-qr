import React from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* https://github.com/zpao/qrcode.react */}
      <QRCode value={'http://facebook.github.io/react/'} />
    </div>
  );
}

export default App;
