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

import { Link } from "react-router-dom";

const companies = [
  {
    id: 1,
    name: "GoogleHQ",
    logo: logo1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    name: "Amazon",
    logo: logo2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    name: "Ratuken",
    logo: logo3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 4,
    name: "Drivemode",
    logo: logo4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 5,
    name: "Alexspace",
    logo: logo5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 6,
    name: "Carnot",
    logo: logo6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 7,
    name: "Siva",
    logo: logo7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 8,
    name: "Money Forward",
    logo: logo8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 9,
    name: "AlpacaTech",
    logo: logo9,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export default function Example() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <div
          key={company.id}
          className="rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex flex-row justify-between items-center">
            <span className="text-lg font-medium text-gray-900">
              {company.name}
            </span>
            <img className="h-10 w-10 rounded-lg" src={company.logo} alt="" />
          </div>

          <p className="mt-4 text-sm text-gray-500">{company.description}</p>

          <Link
            to={`companies/${company.id}`}
            className="flex items-center justify-center rounded-md bg-white mt-6 px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            View Company
          </Link>
        </div>
      ))}
    </div>
  );
}
