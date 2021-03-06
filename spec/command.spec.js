const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });

  it("constructor sets command type", function() {
        let commandType = "MOVE";
        let test = new Command(commandType);
        assert.strictEqual(test.commandType, "MOVE")
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
        let value = 2000;
        let test = new Command("MOVE", value);
        assert.strictEqual(test["value"], 2000);
  });

});


