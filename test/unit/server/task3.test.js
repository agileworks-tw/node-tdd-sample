
import startServer from '../../../src/server/task3';


describe('node server task3', () => {

  let app = null;
  beforeEach(async (done) => {
    try {
      app = await startServer()
      done()
    } catch (e) {
      done(e)
    }
  });

  it('check server', async (done) => {
    try {

      let {text} = await request(app).get("/start").expect(200)
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
