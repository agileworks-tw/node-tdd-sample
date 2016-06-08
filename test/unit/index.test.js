
import HelloWorld from '../../src';


describe('TDD hello world', () => {

  let helloWorld = null;
  beforeEach(() => {
    helloWorld = new HelloWorld();
  });

  it('say hello', async (done) => {
    try {
      const result = await helloWorld.greet();
      result.should.be.eq('hello')
      console.log('=== result ===', result);
      done();
    } catch (e) {
      done(e);
    }
  });

});
