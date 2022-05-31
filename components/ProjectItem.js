function ProjectItem({ name, desc, image }) {
  return (
    <article className="text-center">
      <img src={image} className="rounded-lg w-full" />
      <h3 className="text-2xl font-semibold mb-1 mt-4">{name}</h3>
      <p className="text-lg text-gray-400">
        {desc}
      </p>
    </article>
  );
}

export default ProjectItem;
