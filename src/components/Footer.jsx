import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box">
          <img src="kurt.jpg" alt="Kurt Logo" width={80} height={80} />
        </div>

        <div className="footer-box">
          <h2>Kurt Yol Yardım</h2>
          <div className="icon-item">
            <FaPhoneAlt />
            <span>+90 539 877 27 17</span>
          </div>
          <div className="icon-item">
            <FaMapMarkerAlt />
            <span>
              Şair Eşref Mah. Halit Kayadipli Cad. 70 Sok. No:100 J/D8<br />
              Kırkağaç / Manisa
            </span>
          </div>
        </div>

        <div className="footer-box">
          <h2>Hizmetlerimiz</h2>
          <a href="/">Oto Kurtarma</a>
          <a href="/">Oto Yol Yardım</a>
          <a href="/">İş Makinaları Çekme</a>
          <a href="/">Traktör Çekme</a>
          <a href="/">Motorsiklet Çekme</a>
          <a href="/">Kamyon Çekme</a>
        </div>

        <div className="footer-box">
          <h2>Hizmet Bölgelerimiz</h2>
          <a href="/">Kırkağaç</a>
          <a href="/">Soma</a>
          <a href="/">Bakır</a>
          <a href="/">Salihli</a>
          <a href="/">Manisa</a>
          <a href="/">Gölmarmara</a>
          <a href="/">Balıkesir</a>
          <a href="/">Saruhanlı</a>
        </div>
      </footer>

      <div className="footer-bottom">
        © 2025 Kurt Yol Yardım. Tüm Hakları Saklıdır.
      </div>
    </>
  );
};

export default Footer;
