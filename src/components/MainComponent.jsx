import ContentBlock from "./ContentBlock";

export default function MainComponent() {
  const blocks = [
    {
        info: 'August 12, 2024   -   by Designthemes',
      image: "/Shorts/black3.webp",
      title: "The Art of Radiant Refinement",
      description: "Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus",
    },
    {   
        info: 'August 12, 2024   -   by Designthemes',
      image: "/Shorts/black2.webp",
      title: "Exude an Aura of Timeless Grace",
      description: "Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus",
    },
    {
        info: 'August 12, 2024   -   by Designthemes',
      image: "/Shorts/Black.webp",
      title: "Immerse Yourself in Timeless Elegance",
      description: "Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus",
    },
  ];

  return (
    <div className="w-full h-full md:flex-row md:w-[100%] flex flex-col justify-around items-center">
      {blocks.map((block, index) => (
        <ContentBlock
          key={index}
          info={block.info}
          image={block.image}
          title={block.title}
          description={block.description}
        />
      ))}
    </div>
  );
}
