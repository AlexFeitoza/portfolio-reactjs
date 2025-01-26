/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import GithubIcon from "./GithubIcon";

const ProjectCard = ({ imgSrc, title, imgTags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors grid grid-rows-[auto_1fr_auto] min-h-[300px] " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4 ">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3 ">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {imgTags.map((imgSrc, key) => (
              <img
                key={key}
                src={imgSrc}
                alt={`Tag ${key}`}
                style={{ width: "25px", height: "25px" }}
                className="h-8 w-8 rounded-lg cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
            ))}
          </div>
        </div>

        <div className="w-8 h-8 grid place-items-center bg-sky-400 text-zinc-950 shirink-0 rounded-md ">
          <span className="material-symbols-rounded" aria-hidden="true">
            <GithubIcon />
          </span>
        </div>

        <div className="w-8 h-8 grid place-items-center bg-sky-400 text-zinc-950 shirink-0 rounded-md ">
          <span className="material-symbols-rounded" aria-hidden="true">
            public
          </span>
        </div>
      </div>

      <a href={projectLink} target="_blank" className="absolute inset-0 "></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgTags: PropTypes.array,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
