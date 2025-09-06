export default function HowItWorks() {
  const steps = [
    { step: "1", title: "Post a Job", desc: "Describe your service needs." },
    { step: "2", title: "Receive Offers", desc: "Workers will send proposals." },
    { step: "3", title: "Hire & Pay", desc: "Select the best worker and get the job done." },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map(({ step, title, desc }) => (
          <div key={step} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-4xl font-bold mb-4">{step}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
