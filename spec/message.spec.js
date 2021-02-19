const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Message();
      },
      {
        message: 'name parameter is required.'
      }
    );
  });

  it("constructor sets name", function() {
        let name = "Test message with two commands";
        let message = new Message(name);
        assert.strictEqual(message.name, "Test message with two commands")
  });

  it("contains a commands array passed into the constructor as 2nd argument", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Here are some commands", commands);
    assert.strictEqual((message.commands).join(''), [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')].join(''))
  })

})