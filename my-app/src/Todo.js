const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}
const person = {
    name: 'Vishnu',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

export default function TodoList() {
  return (
    <div style={person.theme}>
    <h1>To Do List for {formatDate(today)}</h1>
    <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />

    <ul>
          <li>eat</li>
          <li>sleep</li>
          <li>code</li>
      </ul>
      </div>
  );
}
