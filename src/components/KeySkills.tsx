import { IconType } from "react-icons";

type InfoCardProps = {
  icon: IconType;
};

const skills = [
  {
    label: "Frontend",
    data: ["React JS", "React Native", "Tailwind", "JavaScript"],
  },
  { label: "Backend", data: ["Node JS", "Express JS", "REST APIs", "Socket.io", "JWT"] },
];

export default function KeySkillsCard({ icon: Icon }: InfoCardProps) {
  return (
      <div className="border border-white/20 rounded p-2 text-xl font-[200] space-y-3 w-80 md:w-full p-4">
      <div className="flex items-center gap-2">
        <Icon />
        <span>Key Skills</span>
      </div>
      <div className="sm:space-y-2 space-y-6 mt-8">
        {skills.map(skill => (
            <div key={skill.label} className="space-y-2">
            <h1 className="text-[16px] font-[400] text-white/90">{skill.label}</h1>
            <div className="space-x-2 flex flex-wrap gap-2">
       {skill.data.map((data, idx) => (
          <span key={idx} className="sm:text-[15px] text-sm  font-[500] text-white/50 border rounded-full px-3">
            {data}
          </span>
       ))}
       </div>
        </div>
        ))}
      </div>
    </div>
  );
}
