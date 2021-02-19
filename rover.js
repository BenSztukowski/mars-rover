class Rover{
  constructor(position){
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;

  }
  receiveMessage(message){
    let results = []
    for (let i = 0; i < message.commands.length; i++){
      results.push(message.commands[i]);
    }
    return {
      name: message.name,
      results: results
    }
  }
}

module.exports = Rover;