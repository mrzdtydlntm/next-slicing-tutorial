import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

function SectionSkills() {
  return (
    <section className="py-28 bg-primaryGrey" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>My Skills</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              image="/javascript.svg"
              level="Lanjutan"
              name="JavaScript"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              image="/react.svg"
              level="Basic"
              name="React"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              image="/javascript.svg"
              level="Basic"
              name="JavaScript"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              image="/javascript.svg"
              level="Lanjutan"
              name="JavaScript"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              image="/react.svg"
              level="Basic"
              name="React"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              image="/javascript.svg"
              level="Basic"
              name="JavaScript"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              image="/javascript.svg"
              level="Lanjutan"
              name="JavaScript"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              image="/react.svg"
              level="Basic"
              name="React"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillCard
              image="/javascript.svg"
              level="Basic"
              name="JavaScript"
              imageClassName="h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
