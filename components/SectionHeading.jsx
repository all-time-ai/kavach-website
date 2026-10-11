import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const center = align === "center";
  return (
    <Reveal className={`mb-14 md:mb-16 ${center ? "text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={`text-3xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1] text-fade ${
          center ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed text-mute ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
