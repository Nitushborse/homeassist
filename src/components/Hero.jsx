import { NavLink } from 'react-router-dom';
export default function Hero() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Find Trusted Service Providers with <span className="text-blue-600">HomeAssist</span>
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
  );
}
