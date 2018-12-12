let kafka = require('kafka-node')
const chalk = require('chalk')

module.exports = app => {

    const Producer = kafka.Producer
    const options = {
        kafkaHost: app.config.kafka.host
    }
    const client = new kafka.KafkaClient(options)
    const producer = new Producer(client)
    producer.on('ready', function () {
        console.log(chalk.green('kafka ready!'))
    })
    producer.on('error', function () {
        console.log('error!')
    })
    app.kafkaClient = producer
}