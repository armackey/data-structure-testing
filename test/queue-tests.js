var queue;
describe('Queue', function() {

  beforeEach(function() {
    queue = new Queue();
  });

  it('should have enqueue and dequeue method', function() {

    expect(queue).to.have.property('enqueue');
    expect(queue).to.have.property('dequeue');

    expect(queue.dequeue).to.be.a('function');
    expect(queue.enqueue).to.be.a('function');
  });

  it('should push elements to queue', function() {
    queue.enqueue(0);
    expect(queue.dequeue()).to.eql(0);
  });

  it('should pop most recently pushed elements', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).to.eql(1);
    expect(queue.dequeue()).to.eql(2);
  });

  it('should return undefined when popping empty queue', function() {
    expect(queue.dequeue()).to.eql(undefined);
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.dequeue()).to.eql(0);
    expect(queue.dequeue()).to.eql(1);
  });

});