import task1_initModel from '../../../src/database/task1';

describe('database level 2', () => {
  let models = null;
  let userList1 = [];
  beforeEach(async (done) => {
    try {
      models = await task1_initModel();
      userList1 = [
        { username: 'test1', password: 'test1', email: 'test1@gmail.com', age: 18 },
        { username: 'test2', password: 'test2', email: 'test2@gmail.com', age: 30 },
        { username: 'test3', password: 'test3', email: 'test3@gmail.com', age: 20 },
        { username: 'test4', password: 'test4', email: 'test4@yahoo.com.tw', age: 23 },
      ];
      await models.User.bulkCreate(userList1);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('一次創建多組 user', async (done) => {
    try {
      const userList2 = [
        { username: 'test1', password: 'test1', email: 'test1@gmail.com', age: 18 },
        { username: 'test2', password: 'test2', email: 'test2@gmail.com', age: 30 },
        { username: 'test3', password: 'test3', email: 'test3@gmail.com', age: 20 },
        { username: 'test4', password: 'test4', email: 'test4@yahoo.com.tw', age: 23 },
      ];
      await models.User.bulkCreate(userList2);

      const check = await models.User.findAll();
      check.length.should.be.eq(userList1.length + userList2.length);

      done();
    } catch (e) {
      done(e);
    }
  });

  it('查找 18~23 歲的使用者', async (done) => {
    try {
      const result = await models.User.findAll({
        where: {
          age: {
            $between: [18, 23],
          },
        },
      });
      result.length.should.be.eq(3);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('查找 email 是使用 gmail 的', async (done) => {
    try {
      const result = await models.User.findAll({
        where: {
          email: {
            $like: '%@gmail.com',
          },
        },
      });
      result.length.should.be.eq(3);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('根據年齡排序使用者', async (done) => {
    try {
      const result = await models.User.findAll({
        order: 'age ASC',
      });
      result[0].age.should.be.eq(18);
      done();
    } catch (e) {
      done(e);
    }
  });
});
