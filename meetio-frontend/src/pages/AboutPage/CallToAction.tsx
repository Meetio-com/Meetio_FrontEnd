import Button from "../../components/Button";

const CallToAction = () => {
  return (
    <div
      className="relative bg-[#486284] text-white text-center py-16 px-4 
                    clip-path"
    >
      <h2 className="text-xl md:text-4xl font-semibold md:w-[652px] md:mx-auto py-5 md:py-10">
        Start taking advantage of our power video conferencing tools
      </h2>
      <div className="mt-5 text-base md:text-lg flex flex-col sm:flex-row justify-center gap-4">
        <Button
          to="/signup"
          containerClass="bg-white text-[#486284]"
          variant="ocx"
        >
          Sign Up For Free
        </Button>
        <Button
          to="/pricing"
          containerClass="border border-white text-white"
          variant="ocx"
        >
          See Our Pricing Plans
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;