import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

import logo1 from "../../logos/logo-copymatic.jpg";
import logo2 from "../../logos/logo-2.jpg";
import logo3 from "../../logos/logo-3.jpg";
import logo4 from "../../logos/logo-4.jpg";
import logo5 from "../../logos/logo-5.jpg";
import logo6 from "../../logos/logo-6.jpg";
import logo7 from "../../logos/logo-csm.jpg";
import logo8 from "../../logos/logo-8.jpg";
import logo9 from "../../logos/logo-9.jpg";
import logo10 from "../../logos/logo-10.jpg";

const jobs = [
  {
    title: "Python Engineer",
    company: "GoogleHQ",
    id: "1",
    tags: ["Remote", "React", "TypeScript", "Python"],
    logo: logo1,
    featured: true,
  },
  {
    title: "Software Engineer (Full Stack)",
    company: "Amazon",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "2",
    logo: logo2,
    featured: true,
  },
  {
    title: "Product Manager, LINK Data",
    company: "Ratuken",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "3",
    logo: logo3,
    featured: true,
  },
  {
    title: "Senior Software Engineer",
    company: "Drivemode",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "4",
    logo: logo4,
    featured: true,
  },
  {
    title: "Senior UX Designer",
    company: "Alexspace",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "5",
    logo: logo5,
    featured: true,
  },
  {
    title: "Android Developer",
    company: "Carnot",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "6",
    logo: logo6,
    featured: true,
  },
  {
    title: "React Native Developer",
    company: "Siva",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "7",
    logo: logo7,
    featured: false,
  },
  {
    title: "Senior Front End Engineer (Next.js + Typescript)",
    company: "Money Forward",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "8",
    logo: logo8,
    featured: false,
  },
  {
    title: "QA Manager - Media and Data Solution",
    company: "AlpacaTech",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "9",
    logo: logo9,
    featured: false,
  },
  {
    title: "Backend Developer",
    company: "Kraken",
    tags: ["Remote", "React", "TypeScript", "Python"],
    id: "10",
    logo: logo1,
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function JobGrid() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {jobs.map((job, jobIdx) => (
        <div
          key={job.title}
          className={classNames(
            jobIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            jobIdx === 1 ? "sm:rounded-tr-lg" : "",
            jobIdx === jobs.length - 2 ? "sm:rounded-bl-lg" : "",
            jobIdx === jobs.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "flex flex-row gap-4 items-start relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <div className="flex flex-col items-center max-w-[100px] min-w-[100px]">
              <img src={job.logo} className="w-[60px] rounded-md" />
              <span className="text-center text-sm text-gray-700 mt-2">
                {job.company}
              </span>
            </div>
          </div>
          <div className="">
            {job.featured ? (
              <div className="mb-2">
                <span
                  id="badge-dismiss-dark"
                  class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-black bg-yellow-300 rounded-full"
                >
                  Featured
                </span>
              </div>
            ) : (
              " "
            )}
            <h3 className="text-lg font-medium">
              <Link to={`jobs/${job.id}`} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {job.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
