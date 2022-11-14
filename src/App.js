import logo from './logo.svg';
import './Login.css';
import icon from './asset_icon.jpg';
import logonarindo from './narindo.png';
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className='bg'>
    <div className='container'>
      <div className='white-container'>
        <div className='left-container'>
          <div className='carousel-div'>
          <img src={icon} width={'70%'} height={'70%'}></img>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h2 style={{textAlign: 'center', margin: '0'}}>Manage Your Asset</h2>
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                'EFFICIENTLY',
                2000,
                'EXCELLENTLY',
                2000,
                'EFFECTIVELY',
                2000,
                ]}
                speed={40} // Custom Speed from 1-99 - Default Speed: 40
                style={{fontWeight: 'bolder', fontSize: '1.5em', width: '220px', textAlign: 'center' , backgroundColor: '#bd1722', color:'white', paddingLeft:'10px', borderRadius: '5px'}}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
          </div>
          </div>
        </div>
        <div className='right-container'>
          <img src={logonarindo} width={'40%'} height={'12%'}></img>
          <h1>Welcome to Namaste!</h1>
          <p id='login-txt'>Login to your account</p>
          <p id='email'>Email</p>
          <input className='input' placeholder='Email Address'></input>
          <button className='login-btn'><span>Login</span></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
