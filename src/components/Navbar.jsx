





import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // hangi dropdown açık?

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <nav className="nav">
      <img src="kurt.jpg" alt="Logo" className="logo" />

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="/" className="nav-link">ANASAYFA</a></li>
        <li><a href="/" className="nav-link">HAKKIMIZDA</a></li>

        {/* Dropdown 1 */}
        <li
          className={`has-dropdown ${openDropdown === "hizmetler" ? "show" : ""}`}
          onClick={() => toggleDropdown("hizmetler")}
        >
          <a href="#" className="nav-link">HİZMETLERİMİZ</a>
          <ul className="dropdown">
            <li><a href="/">Oto Kurtarma</a></li>
            <li><a href="/">Oto Yol Yardım</a></li>
            <li><a href="/">Kamyonet Çekici</a></li>
            <li><a href="/">Traktör Çekici</a></li>
            <li><a href="/">Motorsiklet Çekici</a></li>
            <li><a href="/">İş Makinası Çekici</a></li>
            <li><a href="/">Otobüs Çekici</a></li>
          </ul>
        </li>

        {/* Dropdown 2 */}
        <li
          className={`has-dropdown ${openDropdown === "bolgeler" ? "show" : ""}`}
          onClick={() => toggleDropdown("bolgeler")}
        >
          <a href="#" className="nav-link">HİZMET BÖLGELERİMİZ</a>
          <ul className="dropdown">
            <li><a href="/">Kırkağaç</a></li>
            <li><a href="/">Manisa</a></li>
            <li><a href="/">Soma</a></li>
            <li><a href="/">Akhisar</a></li>
            <li><a href="/">Salihli</a></li>
            <li><a href="/">Balıkesir</a></li>
            <li><a href="/">Saruhanlı</a></li>
            <li><a href="/">Gölmarmara</a></li>
          </ul>
        </li>

        <li><a href="/" className="nav-link">İLETİŞİM</a></li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;























// import { GiHamburgerMenu } from "react-icons/gi";
// const Navbar = () =>{
//     return(
//         <div className="nav">
//               <img src="kurt.jpg" alt="" width={100}/>
           
//               <ul>
//                 <li><a href=""className="nav-link" >ANASAYFA</a></li>
//                 <li><a href="" className="nav-link">HAKKIMIZDA</a></li>
//                 <li><a href="" className="nav-link">HİZMETLERİMİZ</a>
//                 <div className="dropdown">
//                     <ul>
//                         <li><a href="">Oto Kurtarma</a></li>
//                         <li><a href="">Oto Yol Yardım</a></li>
//                         <li><a href="">kamyonet çekici</a></li>
//                         <li><a href="">Traktör çekici</a></li>
//                         <li><a href="">Motorsiklet çekici</a></li>
//                         <li><a href="">iş makinası çekici</a></li>
//                         <li><a href="">otobüs çekici</a></li>
//                     </ul>
//                  </div>

//                 </li>

//                 <li><a href="" className="nav-link">HİZMET BÖLGELERİMİZ</a>
//                 <div className="dropdown">
//                     <ul>
//                             <li><a href="">Kırkağaç</a></li>
//                             <li><a href="">manisa</a></li>
//                             <li><a href="">soma</a></li>
//                             <li><a href="">akhisar</a></li>
//                             <li><a href="">salihli</a></li>
//                             <li><a href="">balıkesir</a></li>
//                             <li><a href="">Saruhanlı</a></li>
//                             <li><a href="">Gölmarmara</a></li>
//                         </ul>
//                     </div>


//                 </li>
//                 <li><a href="" className="nav-link">İLETİŞİM</a></li>
// </ul>

//             <div className="menu-icon">
//                 <GiHamburgerMenu />
//                 </div>
//         </div>
//     );
// };

// export default Navbar;