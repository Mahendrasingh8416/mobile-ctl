import Image from "next/image";

export default function Hero() {
  return (
   <section className="hero">
    <div className="hero-box">
     <Image
      src={"/images/mobilebanner.png"}
      alt="ok"
      width={auto
      
      />
      <div  className="row align-items-center">
            <h1>
                Technology Built for the <br />
                Way People Actually Work
              </h1>
      </div>

     
    </div>

   </section>
  );
}
