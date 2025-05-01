import Navbar from './Navbar'; 

const Main = () => {
    return (
        <div>
            <Navbar />
            <section className="hero-section">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>
                        Kırkağaç'ın En Güvenilir <br /> Oto Kurtarma Hizmeti
                    </h1>
                    <p>
                        Kırkağaç'ta oto çekici hizmeti, <br /> sürücülere 7/24 acil yardım imkanı sunar.
                    </p>
                    <a href="tel:05398772717" className="cta-button">
                        0539 877 27 17
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Main;
