xdescribe('LinkedList', function() {
  var list;
  beforeEach(function() {
    list = new LinkedList();
  });

  it('should have a push method', function() {
    expect(list.push).to.be.a('function');
  });

  it('should have head set to null when list is made', function() {
    expect(list.head).to.eql(null);
  });

  it('should push first element to head', function() {
    list.push(5);
    expect(list.contains(5)).to.eql(true);
  });

  it('should return false if element in not present in list', function() {
    list.push(0);
    expect(list.contains(1)).to.eql(false);
  });

  it('should push multiple elements', function() {
    list.push(0);
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head.next.next.next.value).to.eql(3);
    expect(list.head.next.next.next.next).to.eql(null);
    expect(list.contains(0)).to.eql(true);
    expect(list.contains(1)).to.eql(true);
    expect(list.contains(2)).to.eql(true);
    expect(list.contains(3)).to.eql(true);
  });


  // remove x to activate test
  xit('should have addToHead method', function() {
    expect(list.addToHead).to.be.a('function');
  });

  // remove x to activate test
  xit('should add value to head', function() {
    list.push(0);
    list.push(1);
    list.push(2);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next).to.eql(null);
    list.addToHead(3);
    expect(list.head.value).to.eql(3);
    expect(list.head.next.value).to.eql(0);
    expect(list.head.next.next.value).to.eql(1);
    expect(list.head.next.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next).to.eql(null);
    list.addToHead(4);
    expect(list.head.value).to.eql(4);
    expect(list.head.next.value).to.eql(3);
    expect(list.head.next.next.value).to.eql(0);
    expect(list.head.next.next.next.value).to.eql(1);
    expect(list.head.next.next.next.next.value).to.eql(2);
    expect(list.head.next.next.next.next.next).to.eql(null);
  });
});

// remove x to activate test
describe('Doubly Linked List', function() {
  var list;
  beforeEach(function() {
    list = new LinkedList();
  });

  it('nodes should have back property', function() {
    var node = new Node(0);
    expect(node).to.have.property('back');
  });

  it('should link back reference to previous node when node is pushed to list', function() {
    list.push(0);
    list.push(1);
    list.push(2);
    expect(list.head.value).to.eql(0);
    expect(list.head.next.value).to.eql(1);
    expect(list.head.next.next.value).to.eql(2);
    expect(list.head).to.equal(list.head.next.back);
    expect(list.head.next).to.equal(list.head.next.next.back);
  });
});

