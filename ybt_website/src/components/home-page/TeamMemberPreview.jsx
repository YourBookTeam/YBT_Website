function TeamMemberPreview({ name, position, imgSrc }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={imgSrc}
        className="rounded-full h-50 w-50 object-cover bg-gold"
      />
      <div className="text-2xl font-semibold">{name}</div>
      <div className="text-xl">{position}</div>
    </div>
  );
}
export default TeamMemberPreview;
