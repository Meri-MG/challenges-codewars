function ghostBusters(building) {
  return !/\s+/g.test(building)
    ? "You just wanted my autograph didn't you?"
    : building.replace(/\s+/g, '');
}
