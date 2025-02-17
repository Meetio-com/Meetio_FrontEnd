import Title from "../Title";

const AboutSection = () => {
  return (
    <section className="md:py-10">
      <Title title="About Us" />

      <div className="grid md:grid-cols-[60%_40%] gap-2 md:gap-4">
        <div className="bg-[#486284] text-white p-3 md:p-6 rounded-lg flex flex-col h-[190px] md:min-h-[250px]">
          <h2 className="md:text-4xl text-xl font-bold py-2 md:py-5 mb-2 md:mb-5">
            Mission Statement
          </h2>
          <p className="text-xs md:text-sm font-normal flex-grow">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.....
          </p>
        </div>

        <div className="bg-[#CED7E4] p-3 md:p-6 rounded-lg flex flex-col h-[190px] md:min-h-[250px]">
          <h2 className="md:text-4xl text-xl font-bold py-2 md:py-5 mb-2 md:mb-5">
            Vision Statement
          </h2>
          <p className="text-xs md:text-sm font-normal flex-grow">
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-[30%_70%] gap-2 md:gap-4 mt-2 md:mt-4">
        <div className="bg-[#CED7E4] p-3 md:p-6 rounded-lg flex flex-col h-[190px] md:min-h-[250px]">
          <h2 className="md:text-4xl text-xl font-bold py-2 md:py-5 mb-2 md:mb-5">
            Core Values
          </h2>
          <p className="text-xs md:text-sm font-normal flex-grow">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem.
          </p>
        </div>

        <div className="bg-[#486284] text-white p-3 md:p-6 rounded-lg flex flex-col h-[190px] md:min-h-[250px]">
          <h2 className="md:text-4xl text-xl font-bold py-2 md:py-5 mb-2 md:mb-5">
            Target Market Summary
          </h2>
          <p className="text-xs md:text-sm font-normal flex-grow">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.....
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
