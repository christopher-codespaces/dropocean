import React from "react";

export default function OurMission() {
  return (
    <section class="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row bg-black text-white">
      <div class="max-w-md pr-20 lg:pt-28">
        <img
          src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png"
          alt="Home Improvement Illustration"
        />
      </div>
      <div>
        <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
            />
          </svg>
        </div>
        <h2 class="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
          Our <span class="text-indigo-600">Mission</span>
        </h2>
        <p class="text-lg text-gray-400 mb-8">
          The Home Improvement {`industry's`} most trusted.
        </p>
        <p class="text-lg text-gray-400 mb-6">
          When you work with us, you receive more than just ordinary services.
          You receive the best in the business.
        </p>
        <p class="text-lg text-gray-400 mb-6">
          Along with our highly specialized team members, we can bring your
          vision to life. From shingles to pixels, our designers and developers
          are not just experts. They are virtuosos, orchestrating websites that
          not only captivate your brand and customer trust but also serve as
          powerful lead magnets.
        </p>
        <p class="text-lg text-gray-400 mb-6">
          Whether you are the heartbeat of a small local family business or the
          powerhouse of a large Home Improvement enterprise, we know what it
          takes to get you to the top. Our deep understanding of what works and
          what doesn’t in the web industry landscape ensures that your website
          is attractive and converts prospective customers.
        </p>
        <p class="text-lg text-gray-400 mb-6">
          At the heart of our approach is a commitment to putting your needs
          front and center. Your sites aren’t just another portfolio piece to
          our incredible collection – it’s part of our collective journey. Our
          unwavering dedication ensures that your priorities are not just
          acknowledged but are the driving force behind every decision we make.
        </p>
        <p class="text-lg text-gray-400 mb-6">
          In choosing us, you’re not selecting a service; you’re selecting a
          team that will physically be with you every step of the way.
        </p>
        <p class="text-lg text-gray-400">
          Enough convincing? We’re ready to have you as our next happy roofer.
          Together, we can make your Home Improvement business stand out from
          the competition.
        </p>
      </div>
    </section>
  );
}
