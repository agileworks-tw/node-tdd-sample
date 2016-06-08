
import task1_startServer from '../../../src/server/task1';


describe('node server task1', () => {

  let app = null;
  beforeEach(async (done) => {
    try {
      app = await task1_startServer()
      done()
    } catch (e) {
      done(e)
    }
  });

  it('check server', async (done) => {
    try {
      let result = await request(app).get("/").expect(200)
      result.text.should.be.eq('Hello World')

      let {text} = await request(app).get("/").expect(200)
      text.should.be.eq('Hello World')
      done()
    } catch (e) {
      done(e)
    }
  });

  afterEach(async (done) => {
    app.close(() => {
      done();
    });
  })

});
