import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <div className="container text-white">
      <Header />
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Careers. Connecting Talent with Opportunity.
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to JobPort, your trusted partner in professional growth. We
          bridge the gap between ambitious job seekers and top-tier employers
          across industries.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At JobPort, our mission is to simplify the job search process and
          create a reliable platform where talent meets opportunity. Whether
          you're a fresh graduate, an experienced professional, or a company
          looking to hire top talent, we aim to make your journey easier and
          more efficient.
        </p>
      </section>

      {/* What We Offer */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>For Job Seekers:</strong> Verified job listings, smart
            filters, resume uploads, and instant alerts.
          </li>
          <li>
            <strong>For Employers:</strong> Seamless hiring tools including job
            posting, applicant tracking, and smart recommendations.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li>✅ Easy-to-use and modern interface</li>
          <li>✅ Advanced job matching algorithms</li>
          <li>✅ Verified employers and secure applications</li>
          <li>✅ Dedicated support for job seekers and recruiters</li>
        </ul>
      </section>

      {/* Our Story */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Born out of the need for a smarter, faster, and more human job search
          platform, JobPort was built by a passionate team of developers and HR
          experts. Since day one, we've focused on innovation, integrity, and
          impact.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to take the next step in your career?
        </h3>
        <p className="text-gray-700 mb-6">
          Join JobPort today and find the job you’ve been waiting for.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
            Explore Jobs
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-xl transition">
            Post a Job
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
