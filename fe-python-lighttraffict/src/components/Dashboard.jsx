import { useTrafficSocket } from "../hooks/useTrafficSocket";
import TrafficLight from "./TrafficLight";

export default function Dashboard() {
  const data = useTrafficSocket();

  return (
    <div>
      {Object.keys(data).map((dir) => (
        <TrafficLight
          key={dir}
          direction={dir}
          state={data[dir]}
        />
      ))}
    </div>
  );
}