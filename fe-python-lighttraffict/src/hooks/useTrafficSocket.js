import { useEffect, useState } from "react";

export function useTrafficSocket() {
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/traffic");

    socket.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };

    return () => socket.close();
  }, []);

  return data;
}