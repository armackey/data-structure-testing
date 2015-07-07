var tree;
describe('Tree', function() {
  beforeEach(function() {
    tree = new Tree();
  });

  it('should have add and contains function', function() {
    expect(tree.add).to.be.a('function');
    expect(tree.contains).to.be.a('function');
  });

  it('should have no children when created', function() {
    expect(tree.children.length).to.eql(0);
  });

  it('should have add children', function() {
    tree.add(5);
    expect(tree.children[0].value).to.eql(5);
  });

  it('should have add multiple children', function() {
    tree.add(5);
    tree.add(8);
    expect(tree.contains(5)).to.eql(true);
    expect(tree.contains(8)).to.eql(true);
  });

  it('should add children to children', function() {
    tree.add(5);
    tree.children[0].add(4);
    expect(tree.contains(4)).to.eql(true);
  });
});