import React, { useState } from "react"

 import { LinkedinOutlined,GithubOutlined} from '@ant-design/icons';
import { useScrollPosition } from "./useScrollPosition"

import Box from '@material-ui/core/Box';
import './Footer.css'
export default function Footer() {
  const [sticky, setSticky] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
    )
    
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <footer>

      <Box
      as="footer"
      mb="-1em"
      sx={{
        position: "sticky",
        transform: sticky ? "translateY(100%)" : "translateY(0)",
        transition: "transform 400ms ease-in",
        bottom: 0,
        left: 0,
      }}
      >
     Moshe Yaso © {new Date().getFullYear()}
     <a href="https://www.linkedin.com/in/moshe-yaso"><LinkedinOutlined /></a> 
     <a href="https://www.linkedin.com/in/moshe-yaso"><GithubOutlined /></a> 
    </Box>
        </footer>
  )
}












































// import React from 'react'
// import './Footer.css'
// import {Link} from 'react-router-dom'

// const Footer =()=> {
//   return (
//     <>
// <footer>
// <svg  viewBox="0 0 120 28">
//  <defs> 
//    <mask id="xxx">
//      <circle cx="7" cy="12" r="40" fill="#fff" />
//    </mask>
   
//    <filter id="goo">
//       <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
//       <feColorMatrix in="blur" mode="matrix" values="
//            1 0 0 0 0  
//            0 1 0 0 0  
//            0 0 1 0 0  
//            0 0 0 13 -9" result="goo" />
//       <feBlend in="SourceGraphic" in2="goo" />
//   	</filter>
//      <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
//   </defs> 

//    <use id="wave3" className="wave" x="0" y="-2" ></use> 
//    <use id="wave2" className="wave" x="0" y="0" ></use>
 
//   <g className="topball">

//     <g className="arrow">
//     <polyline points="108,8 110,6 112,8" fill="none"  />
//     <polyline points="110,6 110,10.5" fill="none"  />
//     </g>
    
//   </g>
//   <g className="gooeff">
//   <circle className="drop drop1" cx="20" cy="2" r="1.8"  />
//   <circle className="drop drop2" cx="25" cy="2.5" r="1.5"  />
//   <circle className="drop drop3" cx="16" cy="2.8" r="1.2"  />
//     <use id="wave1" className="wave"  x="0" y="1" />
  
//     {/* <!-- g mask="url(#xxx)"> */}
//     <path   id="wave1"  className="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
//     </g>
//   {/* </g --> */}

// </svg>

//   <div>done with fun - by Uwe Chardon</div>
// </footer>
// </>
        
//     )
// }


// export default Footer

//         //  <div className="footer">
//         // <div className="footer_links">
//         //  </div>
//         //      <p>C @ Moshe Yaso</p>
//         //  </div> 