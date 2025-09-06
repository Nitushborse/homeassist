export default function Services() {
  const services = ["Electrician", "Carpenter", "Plumber", "Painter", "Cleaner"];

  return (
    <section className="py-16 px-6 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Popular Services</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {services.map((service) => (
          <span key={service} className="bg-white border rounded-lg px-5 py-2 shadow hover:bg-blue-100">
            {service}
          </span>
        ))}
      </div>
    </section>
  );
}
