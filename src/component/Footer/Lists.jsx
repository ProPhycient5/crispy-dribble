import React from "react";

export default function Lists() {
  return (
    <div className="grid footerGrid:grid-cols-5 grid-cols-2 gap-3 footerMd:mt-0 mt-6">
      <div className="flex flex-col space-y-3">
        <span className="title">For designers</span>
        <span className="footer-para">Go Pro!</span>
        <span className="footer-para">Explore design work</span>
        <span className="footer-para">Design blog</span>
        <span className="footer-para">Overtime podcast</span>
        <span className="footer-para">Dribble meetups</span>
        <span className="footer-para">Playoffs</span>
        <span className="footer-para">Weekly Warm-Up</span>
        <span className="footer-para">Code of conduct</span>
      </div>

      <div className="flex flex-col space-y-3">
        <span className="title">Hire designers</span>
        <span className="footer-para">Post a job opening</span>
        <span className="footer-para">Post a freelance project</span>
        <span className="footer-para">Search for designers</span>
        <span className="title pt-4">Brands</span>
        <span className="footer-para">Advertise with us</span>
      </div>

      <div className="flex flex-col space-y-3">
        <span className="title">Company</span>
        <span className="footer-para">About</span>
        <span className="footer-para">Careers</span>
        <span className="footer-para">Support</span>
        <span className="footer-para">Media kit</span>
        <span className="footer-para">Testimonials</span>
        <span className="footer-para">API</span>
        <span className="footer-para">Terms of service</span>
        <span className="footer-para">Privacy policy</span>
      </div>

      <div className="flex flex-col space-y-3">
        <span className="title">Directories</span>
        <span className="footer-para">Design jobs</span>
        <span className="footer-para">Designers for hire</span>
        <span className="footer-para">Freelance designers for hire</span>
        <span className="footer-para">Tags</span>
        <span className="footer-para">Places</span>
        <span className="title pt-4">Design assets</span>
        <span className="footer-para">Creative Market</span>
        <span className="footer-para">Fontspring</span>
        <span className="footer-para">Font Squirrel</span>
      </div>

      <div className="flex flex-col space-y-3">
        <span className="title">Design Resources</span>
        <span className="footer-para">Freelancing</span>
        <span className="footer-para">Design Hiring</span>
        <span className="footer-para">Design Portfolio</span>
        <span className="footer-para">Design Education</span>
        <span className="footer-para">Creative Process</span>
        <span className="footer-para">Design Industry Trends</span>
      </div>
    </div>
  );
}
