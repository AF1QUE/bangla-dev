import { Link } from "react-router-dom";

export default function CompanyCard({ company }) {
  <div
    key={company.id}
    className="rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  >
    <div className="flex flex-row justify-between items-center">
      <span className="text-lg font-medium text-gray-900">{company.name}</span>
      <img className="h-10 w-10 rounded-lg" src={company.logo} alt="" />
    </div>

    <p className="mt-4 text-sm text-gray-500">{company.description}</p>

    <Link
      to={`companies/${company.id}`}
      className="flex items-center justify-center rounded-md bg-white mt-6 px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
    >
      View Company
    </Link>
  </div>;
}
