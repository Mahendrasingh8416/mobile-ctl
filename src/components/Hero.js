import Image from "next/image";

export default function Hero() {
  return (
   <section className="hero">
    <div className="hero-box">
   
     
           <div className="img-txt  ">
             <h1><b>
                Technology Built for the <br />
                Way People Actually Work</b>
              </h1>
           </div>
    
     
    </div>
     <div className="para" >
       <p>
          We bridge the gap between complex engineering and human intuition to build tech that users actually enjoy using.
      </p>
       <div className="hero-btn">
        <div className="btn-1">
          <button className="custom-btn me-2">
            View Our Portfolio
          </button>
          </div>
            <div className="btn-2">
          <button className="custom-btn">
            Work With Us
          </button>
          </div>
          </div>
    </div>

   </section>
  );
}
