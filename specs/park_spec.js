const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('spinosaurus', 'carnivore', 100);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 80);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1)
    const actual = park.dinosaurCollection.length
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    park.removeDinosaur(dinosaur2)
    const actual = park.dinosaurCollection.length
    assert.deepStrictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.mostVisitedDinosaur()
    assert.strictEqual(actual, 'spinosaurus')
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.findSpecies('spinosaurus')
    assert.deepStrictEqual(actual, [dinosaur2])
  });

  it('should be able to calculate total visitors per day', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.totalVisitorsDay()
    assert.strictEqual(actual, 230)
  })

  it('should be able to calculate total visitors per year', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.totalVisitorsYear()
    assert.strictEqual(actual, 83950)
  })

  it('should be able to calculate revenue for one year', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.totalRevenueYear()
    assert.strictEqual(actual, 8395000)
  })

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    const actual = park.removeSpecies('spinosaurus')
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3])
  });

});
