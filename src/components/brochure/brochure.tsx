import React from "react";

interface BrochureType {
  achievements: Array<string>;
  companyName: string;
  employementDate: string;
  index: number;
  title: string;
}

const brochure = ({
  achievements,
  companyName,
  employementDate,
  title,
  index,
}: BrochureType) => {
  return (
    <>
      <div className="w-full" key={index}>
        <div className="">
          <ol className="border-l-2 border-info-100">
            <div className="flex-start md:flex">
              <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="mb-10 ml-6 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                <div className="mb-4 flex justify-between">
                  <a
                    href="#!"
                    className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                  >
                    <h3 className="text-md font-semibold mb-2">{title}</h3>

                    <p className="text-sm">{companyName}</p>
                  </a>
                  <a
                    href="#!"
                    className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                  >
                    21 / 12 / 2021
                  </a>
                </div>
                {achievements.map((achievement, index) => (
                  <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};

export default brochure;
