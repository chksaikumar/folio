import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Web Developer",
    company: "Coderapper (Sedin Unit)",
    date: "Dec 2020 – May 2023",
    responsibilities: [
      "Built custom Shopify apps & themes.",
      "Created full-stack apps using React, JS, Python.",
      "Developed RESTful APIs & improved backend flow.",
      "Mentored juniors & participated in Agile sprints.",
    ],
  },
  {
    job: "Frontend Developer (Freelance)",
    company: "Upwork & Fiverr",
    date: "Jan 2017 – 2023",
    responsibilities: [
      "Developed responsive SPAs with React.",
      "Designed layouts using HTML, CSS, Bootstrap.",
      "Integrated backend APIs & improved UX.",
      "Built custom platforms for clients.",
    ],
  },
  {
    job: "Graduate Student / Developer",
    company: "Auburn University at Montgomery",
    date: "2023 – Present",
    responsibilities: [
      "Pursuing MS in CS focused on full-stack & cloud.",
      "Working on MERN apps & real-time features.",
      "Building scalable personal & team projects.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 flex-wrap">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="mx-4 hidden lg:block"
            >
              <FaArrowRightLong className="text-5xl text-orange" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
