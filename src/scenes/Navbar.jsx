import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
// import Logo from '../assets/logoRichie.png';
import MyCv from "../assets/files/RICHARD_ADEKPONYA_CV.pdf";
import { BsDownload } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Bitmoji from '../assets/bitmoji.png';

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-red" : ""
      } hover:text-blue transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const LinkDesktop = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-red" : ""
      } hover:text-blue transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-[#000009]";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* <h4 className="font-playfair text-3xl font-bold">RAY</h4> */}
        <div>
            {/* <img className='bg-black' src={Logo} alt='Logo Image' style={{ width: '50px' }} /> */}
            
            <span className="flex items-center justify-between mx-auto w-5/6" ><img class="rounded-full w-9 h-9" src={Bitmoji} alt="profile picture"></img></span>
            <h4 className="font-playfair text-2xl font-bold">RKA</h4>
          </div>
        {/* {isTopOfPage ? (
          <div>
          
            <h4 className="font-playfair text-2xl font-bold">RKA</h4>
          </div>
        ) : (
          <div>
            
            <h4 className="font-playfair text-2xl font-bold">RKA</h4>
          </div>
        )} */}

        {/* DESKTOP NAV */}
        {(isDesktop )? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <LinkDesktop
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkDesktop
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkDesktop
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkDesktop
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <LinkDesktop
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <SocialMediaIcons /> */}
            {/* <a
              className='hover:opacity-50 transition duration-500 text-pink-200'
              href='https://www.linkedin.com/in/richard-adekponya-319b18178/'
              
            >
             <BsDownload size={30} />
            </a> */}
            <Tooltip title="Download CV">
              <a href={MyCv} download="Richard's Resume" target="_blank">
                <Button  style={{ backgroundColor: 'bg-[#1da1aa]',color:'white' }}>
                <span className="ml-10">  <BsDownload size={25} />  </span> 
                </Button>
                <span className="ml-1"> My CV</span>
              </a>
            </Tooltip>
          </div>
        ):
        
        (
          <button
            className="rounded-full"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button
                className="rounded-full "
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
              {/* <Link
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}

              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
            </div>

            <SocialMediaIcons />
            <Tooltip title="Download CV">
              <a href={MyCv} download="Richard's Resume" target="_blank">
              <Button style={{ backgroundColor: 'bg-[#1da1aa]',color:'yellow' }}>
                <span className="ml-10">  <BsDownload size={25} />  </span> <span className="ml-5">My CV</span>
                </Button>
              </a>
            </Tooltip>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
