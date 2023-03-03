# Start Kafka Broker

``docker-compose up -d``

# Create Kafka Topic

``docker exec broker kafka-topics --bootstrap-server broker:9092 --create --topic quickstart``