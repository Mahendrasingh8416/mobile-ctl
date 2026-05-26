import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import BlueprintSection from "../components/BlueprintSection";
import ProcessSection from "../components/ProcessSection";
// import Services from "../components/Services";


export default function Page() {
  return (

<>
        <Header />
        <Hero/>
       
         

            <section>
            <CategoryStrip />
          </section>

           <section>
            <BlueprintSection />
          </section> 
           <section>
            <ProcessSection />
          </section>
          

</>


  )
}