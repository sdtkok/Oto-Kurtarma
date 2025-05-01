import Uyarı from "./components/Uyarı";
import Main from "./components/Main";
import Alert from "./components/Alert";
import Card from "./components/Card";
import { products } from "./components/constans";
import Yorum from "./components/Yorum";
import Fotograf from "./components/Fotoğraf";
import { galeri } from "./components/constans-2";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";



function App() {
  return (
    <div className="App">
      <Uyarı />
      <Main />
      <Alert tema="servis"/>
      <div className="wrapper">
        {products.map((i)=> ( 
        <Card key={i.id} url={i.url} title={i.title} p={i.p} />
        ))}
      </div>
      <Alert tema="müsteri"/>
      <Yorum />
      <Alert tema="galeri"/>

      <div className="wrap">
        {
          galeri.map((e)=> <Fotograf url={e.url} />)
        }

      </div>

      <Footer />

      <WhatsAppIcon />

    </div>
  );
}

export default App;
