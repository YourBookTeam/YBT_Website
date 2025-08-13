function TeamMemberPreview({ person }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <img src={person.headshot} className="rounded-full h-50 w-50 object-cover bg-gold"/>
      <div className="text-2xl font-semibold">{person.name}</div>
      <div className="text-xl">{person.position}</div>
    </div>
  );
}
export default TeamMemberPreview;
