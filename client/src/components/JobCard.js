import ClassNames from "classnames";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiUser } from "react-icons/hi";

export default function JobCard({ job, className }) {
  const styles = className;
  const tags = job.tags.map((tag) => (
    <span class="rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {tag}
    </span>
  ));

  return (
    <Link to={job.id}>
      <div
        className={ClassNames(
          styles,
          "group rounded-lg border flex justify-between border-gray-300 bg-white px-5 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        )}
      >
        <div className="">
          <h3 className="text-lg font-medium">
            <a href="#" className="focus:outline-none">
              {/* Extend touch target to entire panel */}

              {job.title}
            </a>
            <span className="block text-sm text-gray-500 mt-2">
              {job.company}
            </span>
          </h3>

          <div className="mt-4 flex gap-2">{tags}</div>
          <div className="flex gap-8 mt-4">
            <span className="flex items-center gap-2 text-base text-gray-600">
              <HiLocationMarker />
              {job.location}
            </span>

            <span className="flex items-center gap-2 text-base text-gray-600">
              <HiUser />
              {job.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <img src={job.logo} className="w-[60px] rounded-md" />
          <button
            type="button"
            className="invisible group-hover:visible rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Apply Now
          </button>
        </div>
      </div>
    </Link>
  );
}
