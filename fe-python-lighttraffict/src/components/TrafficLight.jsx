export default function TrafficLight({ direction, state }) {
  return (
    <div>
      <h3>{direction}</h3>
      <div className={`light ${state.light}`} />
      <p>{state.timer}</p>
    </div>
  );
}