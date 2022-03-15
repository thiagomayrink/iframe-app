import './App.css';

function App() {

  let closeIframe = (action) => {
    let url =
      window.location !== window.parent.location
        ? document.referrer
        : document.location.href;
    window.parent.postMessage({message: "close-checkout", provider: 'VTEX', action: action}, url);
  };

  return (
    <div className="App">
      <div className='App-body'>
        <div className="cancel-btn">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={() => closeIframe('cancel_transaction')}>Cancel payment</a>
        </div>
        <div className="confirm-btn">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={() => closeIframe('confirm_transaction')}>Confirm payment</a>
        </div>
      </div>
    </div>
  );
}

export default App;
