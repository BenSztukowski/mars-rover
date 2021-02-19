const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../message.js');

describe("Rover Class", function(){

  it("constructor sets position and default values for mode and generatorWatts", function(){
    let pos = 2000;
    let newRov = new Rover(pos);
    assert.strictEqual(newRov.position, 2000);
    assert.strictEqual(newRov.mode, "NORMAL");
    assert.strictEqual(newRov.generatorWatts, 110);
  })

  it("response returned by receiveMessage contains name of message", function(){
    let message = new Message('Test message with two commands', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]);
    let newRov = new Rover(98382);
    assert.strictEqual(newRov.receiveMessage(message).name, "Test message with two commands" );
  })

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let message = new Message('Test message with two commands', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]);
    let newRov = new Rover(98382);
    assert.strictEqual((newRov.receiveMessage(message)).results.length, 2);
  })

})