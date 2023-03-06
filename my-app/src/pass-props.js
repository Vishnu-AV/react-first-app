export default function PersonProfile({ person, size}) {
    return (
      <div className="card">
        <Avatar
          person={person}
          size={size}
        />
      </div>
    );
  }

export function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={person.url}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }