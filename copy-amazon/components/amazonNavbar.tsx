import Head from 'next/head';
import Icon from 'react-icons';
import Link from 'next/link';
import { ImLocation2 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineDensitySmall } from "react-icons/md";
export default function Navbar() {
  return (
      <>
     <Head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
     integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
     crossOrigin="anonymous" 
     referrerPolicy="no-referrer" />
     </Head>
    <header>
      <div className="navbar">
        <div className="nav-logo Border">
          <div className="logo"></div>
        </div>
        <div className="nav-address Border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon">
          <ImLocation2 />
            <p className="add-second"> Pakistan</p>
          </div>
        </div>
        <div className="nav-search">
          <select className="search-select" >
            <option>All</option>
          </select>
          <input placeholder="Search Amazon" className="search-input" />
          <div className="search-icon">
          <FiSearch />
          </div>
        </div>
        <div className="language Border">
        <IoLanguageOutline />
          <select className="en">
            <option>EN</option>
          </select>
        </div>
        <div className=" hello Border">
          <p>
            <span>Hello, sign in</span>
          </p>
          <p className="sign-in">Account & Lists</p>
        </div>
        <div className="hello Border">
          <p>
            <span>Return</span>
          </p>
          <p className="sign-in">& Orders</p>
        </div>
        <div className="nav-cart Border">
        <FaCartPlus />
          <p className="cart">Cart</p>
        </div>
      </div>

      <div className="panel">
        <div className='language Border'>
        <GrHomeRounded />
      <Link href="./"> Home</Link></div>
        <div className="all-icon Border">
        <MdOutlineDensitySmall />
         <Link href="./all">All</Link> 
        </div>
        <div className="panel-item">
          <p className="Border"><Link href="./todays-deals">Today's Deals</Link></p>
          <p className="Border"><Link href={"./customer-service"}>Customer Service</Link></p>
          <p className="Border"><Link href={"./registry"}>Registry</Link></p>
          <p className="Border"><Link href={"./gift-cards"}>Gift Cards</Link></p>
          <p className="Border"><Link href={"./sell"}>Sell</Link></p>
        </div>
        <div className="panel-deal Border">Shop Deal in Electronics</div>
      </div>
    </header>
    </>
  );
}
