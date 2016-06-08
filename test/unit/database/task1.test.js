import task1_initModel from '../../../src/database/task1';

describe.only('node database task1', () => {

  let models = null;
  before(async (done) => {
    try {
      models = await task1_initModel()
      done()
    } catch (e) {
      done(e)
    }
  });

  it('create user data', async (done) => {
    try {
      let addUser = {
        username: 'test',
        password: 'test',
        email: 'test@mail.com'
      }
      let result = await models.User.create(addUser);
      result.toJSON().should.has.keys('id', 'username', 'username', 'password', 'createdAt', 'updatedAt')
      done()
    } catch (e) {
      done(e)
    }
  });

  it('find user data', async (done) => {
    try {
      let results = await models.User.findAll();
      (results.length >= 1).should.be.true
      done()
    } catch (e) {
      done(e)
    }
  });

});
