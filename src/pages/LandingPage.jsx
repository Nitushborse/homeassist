import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import FooterCTA from "../components/Footer";

import { NavLink } from 'react-router-dom';

export default function LandingPage() {


  const services = ["Electrician", "Carpenter", "Plumber", "Painter", "Cleaner"];
  const steps = [
    { step: "1", title: "Post a Job", desc: "Describe your service needs." },
    { step: "2", title: "Receive Offers", desc: "Workers will send proposals." },
    { step: "3", title: "Hire & Pay", desc: "Select the best worker and get the job done." },
  ];


  return (
    <div className="font-sans text-gray-800 container-centered">
      <div className="pt-20"></div>
      <section className="bg-orange-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Trusted Service Providers with <span className="text-primary">HomeAssist</span>
        </h1>
        <p className="text-lg mb-6">
          Post your job, connect with skilled workers, and get the work done easily.
        </p>
        <NavLink
        to="/register"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
      >
        Get Started
      </NavLink>
      </section>
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl font-bold mb-4">{step}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 bg-orange-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Popular Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <span key={service} className="bg-white border rounded-lg px-5 py-2 shadow hover:bg-orange-100">
              {service}
            </span>
          ))}
        </div>
      </section>


    </div>
  );
}