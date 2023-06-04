import logo1 from "../../logos/logo-1.jpg";
import logo2 from "../../logos/logo-2.jpg";
import logo3 from "../../logos/logo-3.jpg";
import logo4 from "../../logos/logo-4.jpg";
import logo5 from "../../logos/logo-5.jpg";
import logo6 from "../../logos/logo-6.jpg";
import logo7 from "../../logos/logo-csm.jpg";
import logo8 from "../../logos/logo-8.jpg";
import logo9 from "../../logos/logo-9.jpg";
import logo10 from "../../logos/logo-10.jpg";

import JobCard from "../../components/JobCard";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Tabs from "../../components/Tabs";
import JobContent from "../../components/JobContent";
import logo from "../../logos/logo-6.jpg";

const profile = {
  name: "Google",
  email: "ricardo.cooper@example.com",
  avatar: logo,
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

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
];

export default function SingleCompany() {
  return (
    <>
      <div className="mb-[100px]">
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={profile.backgroundImage}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 mb-10">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-md ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.avatar}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {profile.name}
                </h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <EnvelopeIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Message</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PhoneIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {profile.name}
            </h1>
          </div>
          <Tabs />
          <JobContent />
          <h2 className="font-bold text-2xl mb-10">Jobs offered by this company</h2>
          {jobs.map((job) => (
            <JobCard className="my-4" job={job} />
          ))}
        </div>
      </div>
    </>
  );
}
