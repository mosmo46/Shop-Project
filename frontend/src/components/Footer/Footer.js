import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { LinkedinOutlined,GithubOutlined} from '@ant-design/icons';

const Footer =()=> {
    return (
        <div className="footer">
       <div className="footer_links">
           <Link href="https://www.linkedin.com/in/moshe-yaso"><LinkedinOutlined /></Link> 
           <Link href="https://www.linkedin.com/in/moshe-yaso"><GithubOutlined /></Link> 
        </div>
            <p>C @ Moshe Yaso</p>
        </div>
    )
}

export default Footer
