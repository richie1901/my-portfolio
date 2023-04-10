import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialMediaIcons = () => {

    return (
      <div className="flex justify-center md:justify-start my-10 gap-5">
        {/* <a
          className="hover:opacity-50 transition duration-500 bg-blue"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a> */}
            <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://www.linkedin.com/in/richard-adekponya-319b18178/'
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://github.com/richie1901'
            >
              <FaGithub size={30} />
            </a>
            
            <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://mail.google.com/mail/u/0/#inbox'
            >
              <HiOutlineMail size={30} />
            </a>
            
            <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://web.facebook.com/adekponya'
            >
              <FaFacebook size={30} />
            </a>
            <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://www.instagram.com/richie_kabu/'
            >
              <FaInstagram size={30} />
            </a>
             <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://twitter.com/akito_gh'
            >
              <FaTwitter size={30} />
            </a>
        {/* <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a> */}
      </div>
    );
  };
  
  export default SocialMediaIcons;