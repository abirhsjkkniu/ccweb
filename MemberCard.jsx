export default function MemberCard({ member }) {
  return (
    <div className="club-card member-card">
      <img src={member.photo} alt={`Portrait of ${member.name}`} className="member-photo" />
      <h5 className="mb-0" style={{ fontSize: "1.05rem" }}>{member.name}</h5>
      <div className="position">{member.position}</div>
      <div className="meta mb-2">{member.department} {member.session && `· Session ${member.session}`}</div>
      {member.bio && <p className="small text-muted mb-3">{member.bio}</p>}
      {(member.facebook || member.email) && (
        <div className="social-mini">
          {member.facebook && <a href={member.facebook} aria-label={`${member.name} on Facebook`}><i className="bi bi-facebook"></i></a>}
          {member.email && <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><i className="bi bi-envelope"></i></a>}
        </div>
      )}
    </div>
  );
}
