export default function HubCard({ hub }) {
  return (
    <div className="card">
      <h3>{hub.name}</h3>
      <p>R {hub.price} per crate</p>
      <button className="btn">View</button>
    </div>
  );
}