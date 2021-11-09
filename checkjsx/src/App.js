import './App.css';
import './style.css'
import myPicture from "./imageInSrc.jpg";


function App() {
  return (
    <div className="App" style={{borderStyle:"solid", borderWidth:"1px", color:"black", maxWidth:"100vw"}}>
        <h1 className={"title red"}>sami belhaj</h1>
        <br/>
        <img src={myPicture} alt='myImage'/>
        <br/>
        <img src={process.env.PUBLIC_URL + '/imageInPublic.jpg'} alt='myPic' />;
        <video width="320" height="240" controls >
      <source src="myVideo.mp4" type="video/mp4"/>
</video>
    </div>
  );
}

export default App;
