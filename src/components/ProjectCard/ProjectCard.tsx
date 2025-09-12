import React from "react";
import clsx from "clsx";
import s from "./ProjectCard.module.scss";
import { useToast } from "@src/components/shared/toast/ToastProvider";

interface ProjectCardProps {
  project: {
    name?: string;
    description?: string;
    image?: string;
    price?: string; // optional badge like "$890"
    github?: string;
    link?: string;
    stack?: string[];
    ctaLabel?: string; // optional, defaults to "Book now"
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, description, image, price, link, github, stack } = project;
  const ctaLabel = project.ctaLabel || "View Project";
  const toast = useToast();

  return (
    <article className={clsx(s.card)}>
      <div className={s.media}>
        {image && <img src={image} alt={name} />}
        <div className={s.mediaOverlay} />
        {price && <div className={s.pricePill}>{price}</div>}
        <button
          className={s.bookmark}
          aria-label="copy link"
          onClick={() => {
            const urlToCopy = link || github;
            if (urlToCopy) {
              navigator.clipboard
                .writeText(urlToCopy)
                .then(() =>
                  toast.success("Link copied to clipboard!", {
                    position: "top-center",
                  }),
                )
                .catch(() =>
                  toast.error("Failed to copy link", {
                    position: "top-center",
                  }),
                );
              // You'll need to implement toast notification here
              // For now, using a simple alert as placeholder
            } else {
              toast.error("No Link available!", { position: "top-center" });
            }
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 3h12a1 1 0 0 1 1 1v16l-7-4-7 4V4a1 1 0 0 1 1-1z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </button>

        <div className={clsx(s.titleWrap, "mb-20")}>
          {name && <h3 className={s.title}>{name}</h3>}
          {description && <p className={s.subtitle}>{description}</p>}
          {stack && stack.length > 0 && (
            <div className={s.tags}>
              {stack.slice(0, 3).map((t, i) => (
                <span key={`${t}-${i}`} className={s.tag}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div
          className={clsx(
            s.ctaBar,
            "absolute bottom-0 left-0 right-0 w-full bg-transparent",
          )}
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.cta}
            >
              {ctaLabel}
            </a>
          ) : github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={s.cta}
            >
              View project
            </a>
          ) : (
            <button className={s.cta} disabled>
              No link
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
