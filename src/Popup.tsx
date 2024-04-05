import appLogo from '/youtube-comment.png'
import './App.css'

function Popup() {

  return (
    <>
      <div>
          <img src={appLogo} className="logo" alt="Youtube Comments" />
      </div>
      <h2>Youtube Comments Overlay</h2>
      <div className="card">
        <p>
          Watch Youtube and read comments at the same time!
        </p>
      </div>
      <p>
        Developed by James Zhong
        <br />< a href="mailto:jamzhong@gmail.com">jamzhong@gmail.com</a>
      </p>
      <p></p>
    </>
  )
}

export default Popup
