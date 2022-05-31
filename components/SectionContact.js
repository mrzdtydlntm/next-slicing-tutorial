import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

function SectionContact() {
  return (
    <section className="container mx-auto px-10 2xl:px-10" id="contact">
      <div className="bg-primaryGrey p-14 flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full border-r border-primaryGrey-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>How To Contact</SectionParagraph>
            <ContactItem
              icon="/mail.svg"
              label="Mail"
              value="mrzdtydlntm@gmail.com"
              className="mt-10"
            />
            <ContactItem
              icon="/phone.svg"
              label="Phone"
              value="081394473670"
              className="mt-6"
            />
            <ContactItem
              icon="/twitter.svg"
              label="Twitter"
              value="mrzdtydlntm"
              className="mt-6"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field name="name" label="Name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field name="email" label="Email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;