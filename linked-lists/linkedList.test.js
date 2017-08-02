var assert = require('assert');
var LinkedList = require('./linkedList');

describe('LinkedList', () => {
  var linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('#constructor', () => {
    it('should initialize properties', () => {
      assert.equal(linkedList.head, null);
    });
  });

  describe('#append', () => {
    it('should add a node to the list', () => {
      linkedList.append('lorem');

      assert.equal(linkedList.getCount(), 1);
      assert.equal(linkedList.getLast().data, 'lorem');
    });

    it('node should be head if list is empty', () => {
      assert.equal(linkedList.getCount(), 0);

      linkedList.append('ipsum');

      assert.equal(linkedList.getCount(), 1);
      assert.equal(linkedList.head.data, 'ipsum');
      assert.equal(linkedList.getLast().data, 'ipsum');
    });

    it('node should be added to the end', () => {
      linkedList.append('dolor');

      assert.equal(linkedList.getLast().data, 'dolor');
    });
  });

  describe('#prepend', () => {
    it('should add a new node to the head', () => {
      linkedList.prepend('lorelei');

      assert.equal(linkedList.getCount(), 1);
      assert.equal(linkedList.head.data, 'lorelei');
      assert.equal(linkedList.getLast().data, 'lorelei');
    });
  });
});
