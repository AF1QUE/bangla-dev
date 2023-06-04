import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import JobCard from "../components/JobCard";
import Filters from "../components/Filters";

import logo1 from "../logos/logo-copymatic.jpg";
import logo2 from "../logos/logo-2.jpg";
import logo3 from "../logos/logo-3.jpg";
import logo4 from "../logos/logo-4.jpg";
import logo5 from "../logos/logo-5.jpg";
import logo6 from "../logos/logo-6.jpg";
import logo7 from "../logos/logo-csm.jpg";
import logo8 from "../logos/logo-8.jpg";
import logo9 from "../logos/logo-9.jpg";
import logo10 from "../logos/logo-10.jpg";

const jobs = [
  {
    title: "Python Engineer",
    company: "GoogleHQ",
    id: "1",
    tags: ["Remote", "React", "TypeScript", "Python"],
    logo: logo1,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Software Engineer (Full Stack)",
    company: "Amazon",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "2",
    logo: logo2,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Product Manager, LINK Data",
    company: "Ratuken",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "3",
    logo: logo3,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Senior Software Engineer",
    company: "Drivemode",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "4",
    logo: logo4,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Senior UX Designer",
    company: "Alexspace",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "5",
    logo: logo5,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Android Developer",
    company: "Carnot",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "6",
    logo: logo6,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "React Native Developer",
    company: "Siva",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "7",
    logo: logo7,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Senior Front End Engineer (Next.js + Typescript)",
    company: "Money Forward",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "8",
    logo: logo8,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "QA Manager - Media and Data Solution",
    company: "AlpacaTech",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "9",
    logo: logo9,
    location: "Dhaka",
    category: "Engineering",
  },
  {
    title: "Backend Developer",
    company: "Kraken",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "10",
    logo: logo10,
    location: "Dhaka",
    category: "Engineering",
  },
];

export default function Jobs() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-[100px] sm:py-48 lg:py-[100px]">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Browse jobs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to our platform dedicated to helping you explore the best
              tech jobs in Bangladesh! Discover a world of exciting
              opportunities in today's tech industry.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-3">
        <div className="col-span-1">
          <Filters />
        </div>
        <div className="col-span-2">
          {jobs.map((job) => (
            <JobCard className="my-4" job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
