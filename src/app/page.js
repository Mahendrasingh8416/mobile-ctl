import Header from "@/app/glocompo/Header";


// import CategoryStrip from "/components/CategoryStrip";

// import ProcessSection from "/components/ProcessSection";
// import Services from "/components/Services";
// import Testimonials from "/components/Testimonials";
// import CTASection from "/components/CTASection";

import Category from "/componets/Category"

import Footer from "/glocompo/Footer";

export default function Page() {
  return (
  <>
      <div className="container-fluid p-0 container-outer">

      <div className="container bg-white p-0">

        <Header />

        <main>

          <section className="p-0">
            <Hero />
          </section>

          <section>
            <Category />
          </section>

          <section>
            <Blue />
          </section>

          <section>
            <ProcessSection />
          </section>

          <section>
            <Services />
          </section>

          <section>
            <Testimonials />
          </section>

          <section>
            <CTASection />
          </section>

        </main>

        <Footer />

      </div>
    </div>
  </>
  )
}
