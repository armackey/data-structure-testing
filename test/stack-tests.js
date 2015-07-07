var stack;
describe('Stack', function() {

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have a push and pop method', function() {
    expect(stack).to.have.property('push');
    expect(stack).to.have.property('pop');
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
  });

  it('should push elements to stack', function() {
    stack.push(0);
    expect(stack.pop()).to.eql(0);
  });

  it('should pop most recently pushed elements', function() {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).to.eql(2);
    expect(stack.pop()).to.eql(1);
  });

  it('should return undefined when popping empty stack', function() {
    expect(stack.pop()).to.eql(undefined);
    stack.push(0);
    stack.push(1);
    expect(stack.pop()).to.eql(1);
    expect(stack.pop()).to.eql(0);
  });
});