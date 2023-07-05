import { kafka } from "./config";
import { faker } from "@faker-js/faker";

const producer = kafka.producer();

(async () => {
  console.log("\nStarting kafka producer\n");
  await producer.connect();
  const sendMessagesInterval = setInterval(async () => {
    await producer.send({
      topic: "test-topic",
      messages: [
        {
          value: `Hello from ${faker.person.fullName()}! ${faker.internet.emoji()}`,
          headers: { source: "test-app" },
        },
      ],
    });
  }, 5000);

  process.on("SIGTERM", () => {
    producer.disconnect();
    clearInterval(sendMessagesInterval);
  });
})();
