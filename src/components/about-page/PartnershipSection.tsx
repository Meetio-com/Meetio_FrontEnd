import Button from "../Button";

const PartnershipSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 mt-10 justify-center items-center md:p-8">
      <div className="max-w-md bg-white shadow-[0_10px_30px_rgba(0,128,128,0.25)] rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Partner with us</h2>
        <p className="text-black/50 text-sm md:text-base mb-10">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.orem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s orem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <Button
          containerClass="bg-[#008080] text-white shadow-md"
          to="/"
          variant="ocx"
        >
          Partner with us
        </Button>
      </div>

      <div className="max-w-md bg-white shadow-[0_10px_30px_rgba(0,128,128,0.25)] rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Support us</h2>
        <p className="text-black/50 text-sm md:text-base mb-10">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.orem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s orem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <Button
          containerClass="bg-[#008080] text-white shadow-md"
          to="/"
          variant="ocx"
        >
          Support us
        </Button>
      </div>
    </div>
  );
};

export default PartnershipSection;
