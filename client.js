const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('connected');
};

ws.onclose = () => {
  console.log('disconnected');
};

ws.onmessage = (res) => {
  console.log(res.data);
};
