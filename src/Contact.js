import Header from './Header'
import Footer from './Footer'

function Contact() {

    return <div>
        <div className="App">
            <div className="banner-body">
                <Header />
                <div className="contact">
                    <div className="contact-left">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2620.908687693293!2d2.3574429999999995!3d48.936181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66eb34e18b951%3A0xc3c6a4ac9498bfce!2sWorld&#39;s+Business+Import!5e0!3m2!1sen!2sin!4v1429768672602" frameborder="0" ></iframe>
                    </div>
                    <div className="contact-right">
                        <p className="phn">+9100 2481 5842</p>
                        <p className="phn-bottom">4578 Marmora
                            <span>Road, Glasgow D04 89GR</span></p>
                        <p className="lom">Nullam ac urna velit. Pellentesque in arcu tortor.
                            Pellentesque nec est et elit varius pulvinar eget vitae sapien.
                            Aenean vehicula accumsan gravida.</p>
                    </div>
                    <div className="clearfix"> </div>
                    <div className="contact-left1">
                        <h3>Contact Us With <span>Any Queston</span></h3>
                        <div className="in-left">
                            <form>
                                <input type="text" placeholder="Your Name:" />
                                <input type="text" placeholder="Phone Number:" />
                                <input type="text" placeholder="E-mail:" />
                            </form>
                        </div>
                        <div className="in-right">
                            <form>
                                <textarea placeholder="Message:" required=" "></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="contact-right1">
                        <h3>Find Us On <span>Social Websites</span></h3>
                        <h4>Nullam ac urna velit pellentesque in <label>arcu tortor
                            Pellentesque nec</label></h4>
                        <p>Nullam ac urna velit. Pellentesque in arcu tortor.
                            Pellentesque nec est et elit varius pulvinar eget vitae sapien.
                            Aenean vehicula accumsan gravida. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus mus. Phasellus
                            et lectus in urna consequat consectetur ut eget risus.</p>
                        <ul>
                            <li><a href="#" className="g1"> </a></li>
                            <li><a href="#" className="p1"> </a></li>
                            <li><a href="#" className="facebook1"> </a></li>
                            <li><a href="#" className="twitter1"> </a></li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div >
            <Footer />
        </div >
    </div>
}
export default Contact;