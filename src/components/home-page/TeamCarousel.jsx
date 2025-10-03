import TeamMemberPreview from "./TeamMemberPreview";

function TeamCarousel({ team }) {
  const duplicated = [...team, ...team];

  return (
    <div className="relative overflow-hidden w-full bg-white py-10">
      <div className="flex animate-scroll whitespace-nowrap">
        {duplicated.map((person, i) => {
          const isDuplicate = i >= team.length;
          return (
            <div
              key={`${person.name}-${i}`}
              className="flex-shrink-0 px-6"
              aria-hidden={isDuplicate ? "true" : undefined}
            >
              <TeamMemberPreview person={person} duplicate={isDuplicate} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamCarousel;

