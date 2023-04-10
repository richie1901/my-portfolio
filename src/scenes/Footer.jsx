import SocialMediaIcons from "../components/SocialMediaIcons";
import { MDBFooter } from 'mdb-react-ui-kit';
import Logo from '../assets/logoRichie.png';


const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
          
          <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright{'  '}
            <a className='text-dark' href='https://mdbootstrap.com/'>
              Richard Kabu Adekponya
            </a>
            
            
          </div>
         
       
      
        </MDBFooter>
      );
};

export default Footer;