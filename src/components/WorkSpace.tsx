import Image from "next/image";

const features = [
  {
    title: "Community",
    description:
      "This community will help you grow, collaborate, and support each other's journey, balancing healthy competition with a sense of belonging for lasting success.",
    imgUrl: "/h6.webp",
  },
  {
    title: "Milestones Tracking",
    description:
      "We'll help you stay on track by setting and tracking key milestones over 20 weeks, making sure you're always moving forward.",
    imgUrl: "/h4.webp",
  },
  {
    title: "Quick Investments and Demo Day",
    description:
      "Get access to investment opportunities on demo day that help you scale your business faster post cohort",
    imgUrl: "/h1.webp",
  },

  {
    title: "Global Networking",
    description:
      "Expand your horizons by connecting with a worldwide community of founders and professionals, all eager to collaborate.",
    imgUrl: "/h5.webp",
  },
  {
    title: "Expert Mentors",
    description:
      "Tap into the knowledge of experienced mentors who've been through it all and are ready to guide you through the ups and downs.",
    imgUrl: "/h7.webp",
  },
  {
    title: "Founder's Branding",
    description:
      "We'll help you shape and strengthen your personal brand, making you stand out as a thought leader and visionary.",
    imgUrl: "/last.webp",
  },
];

const WorkSpace = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-col w-full min-h-screen mb-8 ">
      <span className="md:text-5xl text-2xl font-bold  text-center">
        A virtual Workspace for <br /> dreamers, next founder’s, differentiators{" "}
        <br /> and visionaries.
      </span>
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ description, imgUrl, title }, indexValue) => {
          return (
            <Boxes
              description={description}
              imgUrl={imgUrl}
              title={title}
              key={indexValue}
              index={indexValue}
            />
          );
        })}
      </div>
    </div>
  );
};

interface BoxesProps {
  title: string;
  description: string;
  imgUrl: string;
  index: number;
}

const Boxes = ({ description, imgUrl, title, index }: BoxesProps) => {
  return (
    <>
      <div className="w-full h-auto boxesbg rounded-3xl  p-6 flex flex-col items-center gap-6">
        <Image
          alt="Feature image"
          src={imgUrl}
          width={450}
          height={500}
          className="rounded-xl"
          style={{ objectFit: "cover" }}
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            {title}
            <br />
            {index === 1 ? "(20 weeks)" : ""}
          </h2>
          <p className="text-md text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkSpace;
