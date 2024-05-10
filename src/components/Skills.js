import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a CS student I am well versed in the fundamental such as Data Structures and Algorithmns, Database management Systems , Object Oriented Programming. I have learned Web Developement and started learning about Machine Learning.<br></br>I like to learn from my experiences and all of my projects are based on a story.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Digital Ilustration</h5>
                                <h7>Adobe Illustrator|Photoshop</h7>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Developement</h5>
                                <h7>MERN|Next.js</h7>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Communication</h5>
                                <h7>Fluent English</h7>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
