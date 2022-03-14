import './App.css';

function App() {

  let closeIframe = () => {
    let url =
      window.location != window.parent.location
        ? document.referrer
        : document.location.href;
    window.parent.postMessage({message: "close-iframe", boolean: false}, url);
  };

  return (
    <div className="App">
      <div className='App-body'>
        <div className="close-btn">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={closeIframe}>Close iframe</a>
        </div>
      </div>   
    </div>
  );
}

export default App;
