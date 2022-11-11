import logo from './logo.svg';
import './Login.css';
import icon from './asset_icon.png';
import logonarindo from './narindo.png';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <div className='container'>
      <div className='white-container'>
        <div className='left-container'>
          <div className='carousel-div'>
          <Carousel className='left-container' showThumbs={false} autoPlay infiniteLoop
          showStatus={false} emulateTouch showArrows={false}>
            <div>
              <img style={{marginBottom: '40px'}} src={icon} width={'50%'} height={'50%'}></img>
            </div>
            <div>
              <img src={icon} width={'50%'} height={'50%'}></img>
            </div>

          </Carousel>
          </div>
        </div>
        <div className='right-container'>
          <img src={logonarindo} width={'40%'} height={'12%'}></img>
          <h1>Welcome to Namaste!</h1>
          <p id='login-txt'>Login to your account</p>
          <p id='email'>Email</p>
          <input className='input'></input>
          <button className='login-btn'><span>Login</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
