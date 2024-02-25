import React from 'react'
import "./MainLoader.css"
import ReactDOM from 'react-dom';

const MainLoader = () => {
  return ReactDOM.createPortal(
    <div className='loader-parent'>
        <span className='loader'></span>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
  <div className='central-all'>
        <span className='loader'></span>
    </div>
  )
}

export default MainLoader


//Button loading
// /* HTML: <div class="loader"></div> */
// .loader {
//     --w:10ch;
//     font-weight: bold;
//     font-family: monospace;
//     font-size: 30px;
//     letter-spacing: var(--w);
//     width:var(--w);
//     overflow: hidden;
//     white-space: nowrap;
//     text-shadow: 
//       calc(-1*var(--w)) 0, 
//       calc(-2*var(--w)) 0, 
//       calc(-3*var(--w)) 0, 
//       calc(-4*var(--w)) 0,
//       calc(-5*var(--w)) 0, 
//       calc(-6*var(--w)) 0, 
//       calc(-7*var(--w)) 0, 
//       calc(-8*var(--w)) 0, 
//       calc(-9*var(--w)) 0;
//     animation: l16 2s infinite;
//   }
//   .loader:before {
//     content:"Loading...";
//   }
//   @keyframes l16 {
//     20% {text-shadow: 
//       calc(-1*var(--w)) 0, 
//       calc(-2*var(--w)) 0 red, 
//       calc(-3*var(--w)) 0, 
//       calc(-4*var(--w)) 0 #ffa516,
//       calc(-5*var(--w)) 0 #63fff4, 
//       calc(-6*var(--w)) 0, 
//       calc(-7*var(--w)) 0, 
//       calc(-8*var(--w)) 0 green, 
//       calc(-9*var(--w)) 0;}
//     40% {text-shadow: 
//       calc(-1*var(--w)) 0, 
//       calc(-2*var(--w)) 0 red, 
//       calc(-3*var(--w)) 0 #e945e9, 
//       calc(-4*var(--w)) 0,
//       calc(-5*var(--w)) 0 green, 
//       calc(-6*var(--w)) 0 orange, 
//       calc(-7*var(--w)) 0, 
//       calc(-8*var(--w)) 0 green, 
//       calc(-9*var(--w)) 0;}
//     60% {text-shadow: 
//       calc(-1*var(--w)) 0 lightblue, 
//       calc(-2*var(--w)) 0, 
//       calc(-3*var(--w)) 0 #e945e9, 
//       calc(-4*var(--w)) 0,
//       calc(-5*var(--w)) 0 green, 
//       calc(-6*var(--w)) 0, 
//       calc(-7*var(--w)) 0 yellow, 
//       calc(-8*var(--w)) 0 #ffa516, 
//       calc(-9*var(--w)) 0 red;}
//     80% {text-shadow: 
//       calc(-1*var(--w)) 0 lightblue, 
//       calc(-2*var(--w)) 0 yellow, 
//       calc(-3*var(--w)) 0 #63fff4, 
//       calc(-4*var(--w)) 0 #ffa516,
//       calc(-5*var(--w)) 0 red, 
//       calc(-6*var(--w)) 0, 
//       calc(-7*var(--w)) 0 grey, 
//       calc(-8*var(--w)) 0 #63fff4, 
//       calc(-9*var(--w)) 0 ;}
//   }


//spinner
// .loader {
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     display: inline-block;
//     border-top: 4px solid #FFF;
//     border-right: 4px solid transparent;
//     box-sizing: border-box;
//     animation: rotation 1s linear infinite;
//   }
//   .loader::after {
//     content: '';  
//     box-sizing: border-box;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     border-bottom: 4px solid #FF3D00;
//     border-left: 4px solid transparent;
//   }
//   @keyframes rotation {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   } 