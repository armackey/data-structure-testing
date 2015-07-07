describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "add", "contains", "depthFirst", "breadthFirst"', function() {
    expect(binarySearchTree.add).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstPre).to.be.a("function");
    expect(binarySearchTree.breadthFirst).to.be.a("function");
  });

  it('should add values at the correct location in the tree', function(){
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirst"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirst(func);
    expect(array).to.eql([5,2,3,7,6]);
  });

  it('should execute a callback on every value in a tree using "breadthFirst"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPre(func);
    expect(array).to.eql([5,2,7,3,6]);
  });
});
