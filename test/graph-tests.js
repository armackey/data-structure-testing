var graph;
describe('Graph', function() {
  beforeEach(function() {
    graph = new Graph(0);
  });

  it('should have an addNode and contains function', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
  });

  it('should add edge to graph', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.eql(true);
  });

  it('should add edges to graph', function() {
    graph.addNode(1);
    graph.edges[0].addNode(2);
    expect(graph.contains(2)).to.eql(true);
  })

});