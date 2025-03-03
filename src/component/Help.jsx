import React, { useState } from "react";

const faqs = [
  { question: "How do I adopt a pet?", answer: "Find a pet, apply, and bring them home after approval." },
  { question: "What are the adoption fees?", answer: "Fees vary by pet. Check the listing for details." },
  { question: "What should I do after adoption?", answer: "Take your pet to a vet and create a cozy space." },
  { question: "How can I contact support?", answer: "Email us at petadopt@gmail.com or call +977 9800000000." },
];

const Help = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-3 fw-bold fs-1">How Can We Help?</h2>

   
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search help topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
      <div className="accordion">
        {faqs.map((faq, index) => {
          const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase());

          return matchesSearch ? (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                </button>
              </h2>
              {openIndex === index && <div className="accordion-body">{faq.answer}</div>}
            </div>
          ) : null;
        })}

        
        {faqs.every(faq => !faq.question.toLowerCase().includes(search.toLowerCase())) && (
          <p className="text-center">No results found.</p>
        )}
         
      
      </div>
      <div>
      <div className="card shadow p-3 mb-4 border border-primary">
        <div className="card-body">
          <h3 className="fw-bold text-primary mb-4">Adoption Process</h3>
          <ul className="list-unstyled">
            <li className="mb-2"> Browse available pets and choose one that fits your lifestyle.</li>
            <li className="mb-2"> Submit an adoption application with your details.</li>
            <li className="mb-2"> Wait for approval and schedule a meeting with the pet.</li>
            <li className="mb-2"> Complete the paperwork and adoption fee payment.</li>
            <li> Bring your new pet home and provide a loving environment!</li>
          </ul>
        </div>
      </div>
      </div>
      
    </div>
    
  );
};

export default Help

