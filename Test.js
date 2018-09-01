const chai = require('chai')
const program = require('./SubarraySort')


describe('subarraySort', function () {

    it('Test #1', function() {
        chai.expect(program.subarraySort([1, 2])).to.deep.equal([-1, -1]);
    });

    it('Test #2', function() {

        chai.expect(program.subarraySort([2, 1])).to.deep.equal([0, 1]);
    });

    it('Test #3', function() {
        chai.expect(program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])).to.deep.equal([3, 9]);
    });

    
    it('Test #4', function() {
        chai.expect(program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19])).to.deep.equal([4, 9]);
    });

    it('Test #5', function() {
        chai.expect(program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19])).to.deep.equal([4, 6]);
    });


});