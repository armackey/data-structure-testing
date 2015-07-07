var set;
describe('Set', function() {
  beforeEach(function() {
    set = new Set();
  });

  it('should add values to set', function() {
    set.add(0);
    set.add(1);
    expect(set.contains(0)).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(false);
  });

  it('should remove values from set', function() {
    set.add(0);
    set.add(1);
    set.add(2);
    expect(set.contains(0)).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
    set.remove(2);
    expect(set.contains(0)).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(false);
    set.remove(1);
    expect(set.contains(0)).to.equal(true);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(2)).to.equal(false);
    set.remove(0);
    expect(set.contains(0)).to.equal(false);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(2)).to.equal(false);
  });

  it('should not contain any repeated values', function() {
    set.add(0);
    set.add(0);
    expect(set.contains(0)).to.equal(true);
    set.remove(0)
    expect(set.contains(0)).to.equal(false);
  });

});