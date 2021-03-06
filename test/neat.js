/* Import */
var chai = require('chai');
var assert = chai.assert;

/* Shorten var names */
var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Config = neataptic.Config;

/* Turn off warnings */
Config.warnings = false;

/*******************************************************************************************
                      Tests the effectiveness of evolution
*******************************************************************************************/

describe('Neat', function () {
  it('AND', function () {
    this.timeout(40000);

    // Train the AND gate
    var trainingSet = [{
      input: [0, 0],
      output: [0]
    }, {
      input: [0, 1],
      output: [0]
    }, {
      input: [1, 0],
      output: [0]
    }, {
      input: [1, 1],
      output: [1]
    }];

    var network = new Network(2, 1);
    network.evolve(trainingSet, {
      mutation: Methods.Mutation.FFW,
      equal: true,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.03
    });

    // Get average and check if it's enough
    var test = network.test(trainingSet);
    assert.isBelow(test.error, 0.03);
  });
  it('XOR', function () {
    this.timeout(40000);

    // Train the XOR gate
    var trainingSet = [{
      input: [0, 0],
      output: [0]
    }, {
      input: [0, 1],
      output: [1]
    }, {
      input: [1, 0],
      output: [1]
    }, {
      input: [1, 1],
      output: [0]
    }];

    var network = new Network(2, 1);
    network.evolve(trainingSet, {
      mutation: Methods.Mutation.FFW,
      equal: true,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.03
    });

    // Get average and check if it's enough
    var test = network.test(trainingSet);
    assert.isBelow(test.error, 0.03);
  });
  it('XNOR', function () {
    this.timeout(60000);

    // Train the XNOR gate
    var trainingSet = [{
      input: [0, 0],
      output: [1]
    }, {
      input: [0, 1],
      output: [0]
    }, {
      input: [1, 0],
      output: [0]
    }, {
      input: [1, 1],
      output: [1]
    }];

    var network = new Network(2, 1);
    network.evolve(trainingSet, {
      mutation: Methods.Mutation.FFW,
      equal: true,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.03
    });

    // Get average and check if it's enough
    var test = network.test(trainingSet);
    assert.isBelow(test.error, 0.03);
  });
});
