import { Socket } from "net";

const client = new Socket();
let responseData = "";

client.connect(80, "kodaktor.ru", () =>
  client.write(`GET /j/users HTTP/1.0
Host: kodaktor.ru

`),
);

client.on("data", (data) => {
    responseData += data.toString();
});

client.on("end", () => {
  console.log(JSON.parse(responseData.split('\r\n\r\n')[1]));
});