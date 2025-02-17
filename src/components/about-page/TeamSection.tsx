import Button from "../Button";
import Title from "../Title";

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: "Precious Uwem", role: "Co-founder & CEO" },
  { name: "Kamaldeen", role: "UI/UX expert" },
  { name: "Felix Opoku", role: "Lead Product Manager" },
  { name: "Maryam Oje", role: "UI/UX Designer" },
  { name: "Precious Uwem", role: "Full-stack Developer" },
  { name: "Kamaldeen", role: "UI/UX Designer" },
  { name: "Felix Opoku", role: "UI/UX Designer" },
  { name: "Maryam Oje", role: "UI/UX Designer" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="mt-4 md:px-20">
      <Title
        title="Meet our team"
        subtitle="Meet our diverse team of world-class creators, designers and problem solvers"
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] p-2 md:p-6 rounded-lg text-left"
          >
            <div className="h-32 rounded-lg mb-4"></div>
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          containerClass="bg-[#486284] text-white shadow-md"
          to="/biographies"
        >
          Read biographies
        </Button>
      </div>
    </section>
  );
};

export default TeamSection;
