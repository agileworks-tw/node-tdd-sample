import task1_initModel from '../../../src/database/task1';

describe('database task1 create', () => {

  let models = null;
  beforeEach(async (done) => {
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

});


describe('database task1 find', () => {

  let models = null;
  beforeEach(async (done) => {
    try {
      models = await task1_initModel()
      let addUser = {
        username: 'test',
        password: 'test',
        email: 'test@mail.com'
      }
      let result = await models.User.create(addUser);

      done()
    } catch (e) {
      done(e)
    }
  });

  it('find user data', async (done) => {
    try {
      let results = await models.User.findAll();
      (results.length == 1).should.be.true
      done()
    } catch (e) {
      done(e)
    }
  });

});
