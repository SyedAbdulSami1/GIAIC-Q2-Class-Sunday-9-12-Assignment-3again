import Header from "@/app/component/header";
import Footer from "@/app/component/footer";

export default function Contact() {
  return (
    <div className="outerPage">
      <Header/>
      <div className="parent-container">
        <div className="child-container">
            <div className="child-container-img">
            <img src="/images/_MG_8761.jpg" alt="My image"/>
            </div>
            <br/>
          <p>Welcom in <strong>Contact Us</strong></p>
        </div>  
      </div>
      <Footer/>
    </div>
  );
}
