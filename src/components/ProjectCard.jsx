/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


import PropTypes from "prop-types";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ imgSrc, title, techIcons, projectLink, githubLink }) => {
  return (
    <div className="p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 transition-colors ring-1 ring-zinc-50/5 grid grid-rows-[auto_1fr_auto] min-h-[320px]">
      {/* Project Image */}
      <figure className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </figure>

      {/* Project Title and Tech Icons */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          {techIcons.map((iconSrc, index) => (
            <img
              key={index}
              src={iconSrc}
              alt={`Technology ${index}`}
              className="w-8 h-8 rounded-md bg-zinc-700 p-1"
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-auto">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md"
        >
          <ExternalLink size={20} />
          <span>Deploy</span>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;