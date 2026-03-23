"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import AddressAutocomplete from "../../components/AddressAutocomplete";

export default function ContactFormV2() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your backend or form service here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Free No-Obligation Offer
          </span>
          <h2 className="text-[40px] font-normal mt-2 mb-4" style={{ color: "rgb(47, 47, 47)" }}>
            Ready to Sell Your House Fast?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Fill out the form below and the Presto Realty team will get back to you within
            24 hours with a fair cash offer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-6" style={{ color: "rgb(47, 47, 47)" }}>Get In Touch</h3>
              <div className="space-y-5">
                <a
                  href="tel:+17025550000"
                  className="flex items-center gap-4 group"
                  style={{ color: "rgb(47, 47, 47)" }}
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-200">
                    <Phone size={20} className="text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Call Us</p>
                    <p className="font-semibold" style={{ color: "rgb(47, 47, 47)" }}>(702) 555-0000</p>
                  </div>
                </a>
                <a
                  href="mailto:info@prestorealty.com"
                  className="flex items-center gap-4 group"
                  style={{ color: "rgb(47, 47, 47)" }}
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-200">
                    <Mail size={20} className="text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
                    <p className="font-semibold" style={{ color: "rgb(47, 47, 47)" }}>info@prestorealty.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Location</p>
                    <p className="font-semibold" style={{ color: "rgb(47, 47, 47)" }}>Las Vegas, NV 89101</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="font-semibold mb-2" style={{ color: "rgb(47, 47, 47)" }}>Presto Realty&apos;s Promise to You</p>
              <ul className="space-y-2">
                {[
                  "Cash offer within 24 hours",
                  "No obligation, no pressure",
                  "Close on your timeline",
                  "Zero fees or commissions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                    <CheckCircle size={14} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "rgb(47, 47, 47)" }}>We Got Your Info!</h3>
                <p className="text-gray-500">
                  Thanks for reaching out to Presto Realty. One of our team members will contact
                  you within 24 hours with your cash offer.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-xl space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "rgb(47, 47, 47)" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: "rgb(47, 47, 47)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(702) 555-0000"
                      className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "rgb(47, 47, 47)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "rgb(47, 47, 47)" }}>
                    Property Address *
                  </label>
                  <AddressAutocomplete
                    id="property-address"
                    value={form.address}
                    onChange={(val) => setForm({ ...form, address: val })}
                    placeholder="123 Main St, Las Vegas, NV"
                    required
                    showIcon
                    className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "rgb(47, 47, 47)" }}>
                    Tell Us About Your Situation
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Why are you looking to sell? Is there anything we should know about the property?"
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <Send size={18} />
                  Get My Free Cash Offer from Presto Realty
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to our Privacy Policy. Presto Realty never shares your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
