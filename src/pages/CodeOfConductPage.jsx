import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';

const CodeOfConductPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-[#18181B] text-[#18181B] dark:text-[#F4F4F5] font-sans selection:bg-[#00E599] selection:text-[#18181B] transition-colors">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#F4F4F5]/80 dark:bg-[#18181B]/80 backdrop-blur-md border-b-[4px] border-[#18181B] dark:border-white transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/">
            <Logo className="text-[28px]" />
          </Link>
          <Link to="/" className="font-bold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-[#27272A] border-[4px] border-[#18181B] dark:border-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0_#18181B] dark:shadow-[#FFFFFF]">
          
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">PiggyPath Code of Conduct</h1>
          <p className="font-bold text-[#71717A] dark:text-[#A1A1AA] mb-8">Effective Date: 20/06/2026</p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 font-medium text-[#3F3F46] dark:text-[#D4D4D8]">
            <p>
              Welcome to the PiggyPath community! Our goal is to create a safe, supportive, and engaging environment where everyone can learn and grow their financial literacy. This Code of Conduct outlines the expectations for behavior across all PiggyPath platforms, including our website, mobile application, forums, and any associated social media channels.
            </p>
            <p>
              By participating in the PiggyPath community, you agree to uphold these principles and help us maintain a positive space for all learners.
            </p>

            <h2 className="text-2xl font-black text-[#18181B] dark:text-white mt-12 mb-4">1. Respect and Inclusion</h2>
            <p>
              We are a diverse community of learners at different stages of our financial journeys. Treat everyone with respect, kindness, and empathy.
            </p>
            <ul className="list-disc pl-6 space-y-1 font-bold">
              <li>Be welcoming and inclusive to all members, regardless of background, experience level, or identity.</li>
              <li>Avoid derogatory, discriminatory, or offensive language.</li>
              <li>Do not engage in harassment, bullying, or personal attacks.</li>
            </ul>

            <h2 className="text-2xl font-black text-[#18181B] dark:text-white mt-12 mb-4">2. Safe Learning Environment</h2>
            <p>
              Learning about money can be vulnerable. We want everyone to feel comfortable asking questions and sharing their progress.
            </p>
            <ul className="list-disc pl-6 space-y-1 font-bold">
              <li>Do not shame or mock others for their financial knowledge, mistakes, or situations.</li>
              <li>Offer constructive feedback and support rather than criticism.</li>
              <li>Respect the privacy of others and do not share their personal or financial information.</li>
            </ul>

            <h2 className="text-2xl font-black text-[#18181B] dark:text-white mt-12 mb-4">3. No Financial Advice</h2>
            <p>
              PiggyPath is an educational platform. While discussing concepts is encouraged, giving specific financial advice is strictly prohibited.
            </p>
            <ul className="list-disc pl-6 space-y-1 font-bold">
              <li>Do not offer personalized investment, tax, or legal advice to other users.</li>
              <li>Do not solicit funds, investments, or promote specific financial products or services.</li>
              <li>Always remind others to consult with qualified professionals for their specific financial needs.</li>
            </ul>

            <h2 className="text-2xl font-black text-[#18181B] dark:text-white mt-12 mb-4">4. Integrity and Fair Play</h2>
            <p>
              Our gamified features, leaderboards, and challenges are designed to motivate learning. Participate honestly and fairly.
            </p>
            <ul className="list-disc pl-6 space-y-1 font-bold">
              <li>Do not cheat, exploit bugs, or use unauthorized tools to gain an unfair advantage.</li>
              <li>Do not manipulate rankings, rewards, or virtual portfolios.</li>
              <li>Report any bugs, vulnerabilities, or unfair behavior to our support team.</li>
            </ul>

            <h2 className="text-2xl font-black text-[#18181B] dark:text-white mt-12 mb-4">5. Spam and Self-Promotion</h2>
            <p>
              Keep our community focused on learning. Spamming and self-promotion disrupt the educational experience.
            </p>
            <ul className="list-disc pl-6 space-y-1 font-bold">
              <li>Do not post spam, unsolicited advertisements, or promotional links.</li>
              <li>Do not use the platform to recruit users for other services or schemes.</li>
              <li>Keep discussions relevant to financial education and personal growth.</li>
            </ul>

            <h2 className="text-2xl font-black text-[#18181B] dark:text-white mt-12 mb-4">6. Reporting Violations</h2>
            <p>
              If you witness behavior that violates this Code of Conduct, please report it immediately.
            </p>
            <ul className="list-disc pl-6 space-y-1 font-bold">
              <li>Use the in-app reporting tools when available.</li>
              <li>Contact our support team directly with details of the incident.</li>
              <li>Do not attempt to moderate or resolve severe conflicts yourself.</li>
            </ul>

            <div className="bg-[#8B5CF6]/20 border-[3px] border-[#8B5CF6] rounded-xl p-6 my-8">
              <h2 className="text-2xl font-black text-[#18181B] dark:text-white mb-4">7. Enforcement</h2>
              <p>
                We take this Code of Conduct seriously. Violations may result in:
              </p>
              <ul className="list-disc pl-6 space-y-1 font-bold text-[#18181B] dark:text-[#F4F4F5]">
                <li>Warnings and educational feedback</li>
                <li>Temporary suspension of account privileges</li>
                <li>Permanent banning from the platform</li>
                <li>Reporting to relevant authorities if necessary</li>
              </ul>
              <p className="font-bold mt-4 text-[#18181B] dark:text-[#F4F4F5]">
                PiggyPath reserves the right to determine what constitutes a violation and to take appropriate action at its sole discretion.
              </p>
            </div>

            <div className="bg-[#18181B] dark:bg-white text-white dark:text-[#18181B] rounded-2xl p-8 mt-12 shadow-[8px_8px_0_#8B5CF6]">
              <h2 className="text-2xl font-black mb-4">8. Contact Us</h2>
              <p className="font-bold mb-4">If you have any questions or need to report an issue:</p>
              <ul className="space-y-2 font-bold">
                <li>Email: <a href="mailto:admin@piggypath.in" className="text-[#00E599] dark:text-[#8B5CF6] hover:underline">admin@piggypath.in</a></li>
                <li>Email: <a href="mailto:piggypath@gmail.com" className="text-[#00E599] dark:text-[#8B5CF6] hover:underline">piggypath@gmail.com</a></li>
                <li>Website: <a href="https://www.piggypath.in" target="_blank" rel="noopener noreferrer" className="text-[#00E599] dark:text-[#8B5CF6] hover:underline">www.piggypath.in</a></li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="border-t-[4px] border-[#18181B] bg-white dark:bg-[#27272A] py-8 text-center">
        <p className="font-bold text-[#A1A1AA]">
          © {new Date().getFullYear()} PiggyPath. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CodeOfConductPage;
