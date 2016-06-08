
import startServer from '../../src/server';


describe.only('node server hello world', () => {


  beforeEach(async (done) => {
    try {
      console.log(startServer);
      await startServer()
      done()
    } catch (e) {
      done(e)
    }
  });

  it('check server', async (done) => {
    try {
      let result = await request('http://localhost:8888').get("/").expect(200)
      result.text.should.be.eq('Hello World')

      let {text} = await request('http://localhost:8888').get("/").expect(200)
      text.should.be.eq('Hello World')
      done()
    } catch (e) {
      done(e)
    }
  });

});
