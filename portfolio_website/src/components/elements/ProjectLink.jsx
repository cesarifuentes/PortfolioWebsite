import React from "react";
import chain from "../../assets/chain.svg";
import branch from "../../assets/branch.svg";

const ProjectLink = ({ link, title }) => {
  return (
    <div>
      {" "}
      {link ? (
        <div className="pt-3 hover:opacity-30">
          <a
            href={link}
            target="_blank"
            className="p-2 px-4 rounded-full bg-slate-100"
          >
            {/* <div className="inline-block mr-2 align-middle">
              <img src={chain} alt="chain link" />
            </div> */}
            <p className="inline-block align-middle">Open</p>
          </a>
        </div>
      ) : (
        <div className="pt-3">
          <a className="p-2 px-4 rounded-full bg-slate-100">
            <div className="inline-block mr-2 align-middle">
              <img src={branch} alt="branch" />
            </div>
            <p className="inline-block align-middle">In Development</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectLink;
