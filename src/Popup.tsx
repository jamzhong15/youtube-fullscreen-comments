import appLogo from '/youtube-comment.png'
import './App.css'

function Popup() {

  return (
    <>
      <div>
          <img src={appLogo} className="logo" alt="Youtube Comments" />
      </div>
      <h1>Youtube Comments Overlay</h1>
      <div className="card">
        <p>
          Watch Youtube and read comments at the same time!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Popup
