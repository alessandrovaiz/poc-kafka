import { kafka } from "./config";

const consumer = kafka.consumer({ groupId: "consumer-1" });

(async () => {
  console.log("\nStarting kafka consumer\n");
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic" });
  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("\n" + message.value);
    },
  });

  process.on("SIGTERM", () => {
    consumer.disconnect();
  });
})();
