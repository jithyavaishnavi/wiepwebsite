import React from "react";
import {
  FaYoutube,
  FaTimes,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

const FooterCTA = () => {
  return (
    <footer className="bg-white text-black">
      {/* CTA Section */}

      <div className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 space-y-12 md:space-y-8 text-[16px] leading-relaxed">
        {/* About Us Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-[30px] md:text-[30px] font-SEMIBOLD mb-6">
            Discover exciting opportunities to grow, collaborate,<br /> and innovate
            with <span className="font-bold text-[#C8A2C8]">WiEP</span>. Join us
            in shaping an <br />inclusive Ethereum ecosystem.
          </h2>

          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-6 py-[6px] rounded-full bg-[#C8A2C8] text-white text-[14px] hover:bg-black hover:border-[#C8A2C8] hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition">
              <span>↗ Handbook</span>
            </button>
          </div>
        </section>
        {/* Footer Section */}
        <div className="bg-black text-white px-6 sm:px-12 pt-12 pb-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-16 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-3">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>About</li>
                <li>Membership</li>
                <li>Events</li>
                <li>Collaborate</li>
                <li>Study Groups</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Know More</h3>
              <ul className="space-y-2 text-sm">
                <li>Code of Conduct</li>
                <li>Associates & Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact Us</h3>
              <p className="text-sm">
                E-mail ID :<br />
                asdfg@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Social</h3>
              <div className="flex items-center space-x-4 mt-2">
                <FaYoutube className="text-xl" />
                {/* It seems FaTimes might have been a typo, consider another social icon if needed */}
                {/* <FaTimes className="text-xl" /> */}
                <FaGithub className="text-xl" />
                <FaDiscord className="text-xl" />
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />
          <p className="text-center text-xs text-white/40">
            © 2025 WiEP | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
