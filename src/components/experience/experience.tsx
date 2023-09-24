import Brochure from "../brochure/brochure";

const currentExperience = [
  {
    date: "",
    title: "Software Engineer",
    companyName: "Austriacard Holdings",
    achievements: [
      "Analyze and enhance application performance, identifying optimization opportunities, and implementing improvements, including multi-threading and concurrent programming techniques, to enhance efficiency.",
      "Developing RESTful APIs and web services to enable seamless data exchange between applications and external systems.",
      "Collaborated closely with product owners, designers, and stakeholders throughout the entire SDLC to grasp requirements, refine specifications, and deliver top-notch software aligning with business objectives.",
      "Providing tailor-made solutions to esteemed clients including industry leaders like Vodafone and Iaso Group.",
      "Guiding and providing support to junior team members in their professional development.",
    ],
  },
  {
    date: "",
    title: "Software Engineer",
    companyName: "Viva Wallet",
    achievements: [
      "Maintaining and improving the company's sales portal and ordering system.",
      "Improving company's CRM system to meet user requirements.",
      "Contribution in various third-party API integrations.",
      "Collaboration with cross-functional tech teams to successfully deliver products on a daily basis.",
      "Implemented comprehensive unit and functional tests for MVP features.",
      "Developed secure and compliant financial software solutions, ensuring data integrity and regulatory adherence for a fintech leader, resulting in seamless transactions and customer trust.",
      "Orchestrated end-to-end development of financial products encompassing both front-end user experiences and robust back-end functionality, to deliver comprehensive, market-leading solutions.",
    ],
  },
  {
    date: "",
    title: "Junior Softare Engineer",
    companyName: "Prosvasis",
    achievements: [
      "Designed and developed a CRM real-time application using ASP .NET MVC.",
      "Designed and developed an internal tool for the CRM using .NET CORE.",
      "Contribution in developing and maintaining the main product.",
      "Collaborated closely with UX designers to translate wireframes and mockups into pixel-perfect, user-friendly web applications.",
      "Implemented responsive design principles, ensuring seamless user experiences across various devices and screen sizes.",
    ],
  },
];

const experience = () => {
  return (
    <>
      <div className="pl-6 pt-40 w-1/2">
        <h2 className="text-lg  flex items-center justify-center mb-156">
          Experience
        </h2>

        <section id="experience">
          <div className="flex flex-col space-y-4 items-center">
            {currentExperience.map(
              ({ title, companyName, achievements, date }, index) => (
                <Brochure
                  achievements={achievements}
                  companyName={companyName}
                  index={index}
                  employementDate={date}
                  title={title}
                ></Brochure>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default experience;
