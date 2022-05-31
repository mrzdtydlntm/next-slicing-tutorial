import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

function SectionProjects() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Many projects done</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              name="Teraa"
              desc="Lorem ipsum dolor sit amet, consectueekgnaikwnf"
              image="/teraa.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="JICAMap"
              desc="Lorem ipsum dolor sit amet, consectueekgnaikwnf"
              image="/JICAmap.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="JICAMap"
              desc="Lorem ipsum dolor sit amet, consectueekgnaikwnf"
              image="/JICAmap.png"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItem
              name="Teraa"
              desc="Lorem ipsum dolor sit amet, consectueekgnaikwnf"
              image="/teraa.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
