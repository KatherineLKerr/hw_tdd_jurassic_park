const Park = function(name, ticketPrice){
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurCollection = []
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexToRemove = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indexToRemove, 1);
};

Park.prototype.mostVisitedDinosaur = function() {
  var savedSpecies = null
  var maxGuests = 0

  for (each of this.dinosaurCollection){
    if (each.guestsAttractedPerDay > maxGuests){
      maxGuests = each.guestsAttractedPerDay
      savedSpecies = each.species
    };
  };
  return savedSpecies
};

Park.prototype.findSpecies = function (species) {
  let dinosaursFound = []
  for (each of this.dinosaurCollection) {
    if (each.species === species){
      dinosaursFound.push(each)
    }
  }
  return dinosaursFound
};

Park.prototype.totalVisitorsDay = function() {
  let totalVisitors = 0
  for (each of this.dinosaurCollection) {
    totalVisitors += each.guestsAttractedPerDay
  }
  return totalVisitors
};

Park.prototype.totalVisitorsYear = function () {
  let totalVisitors = 0
  for (each of this.dinosaurCollection) {
    totalVisitors += each.guestsAttractedPerDay
  }
  return totalVisitors*365
};

Park.prototype.totalRevenueYear = function () {
  let totalVisitors = 0
  for (each of this.dinosaurCollection) {
    totalVisitors += each.guestsAttractedPerDay
  }
  return totalVisitors*365*this.ticketPrice
};

Park.prototype.removeSpecies = function(species) {
  for (each of this.dinosaurCollection){
    if (each.species === species){
      const indexToRemove = this.dinosaurCollection.indexOf(each);
      this.dinosaurCollection.splice(indexToRemove, 1);
    };
  };
  return this.dinosaurCollection
};

module.exports = Park;
