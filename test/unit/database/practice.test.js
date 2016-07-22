import task1_initModel from '../../../src/database/task1';

describe('practice', () => {
  let models = null;
  beforeEach(async (done) => {
    try {
      models = await task1_initModel();
      done();
    } catch (e) {
      done(e);
    }
  });

  it('在資料庫中 Post table 中新增一個 price 欄位 data types 為 INTEGER', async (done) => {
    try {
      const data = {
        title: 'post a',
        desc: 'post desc',
        price: 100,
      };
      const result = await models.Post.create(data);
      result.toJSON().should.has.keys(
        'id',
        'title',
        'desc',
        'price',
        'createdAt',
        'updatedAt'
      );
      result.price.should.be.eq(data.price);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('使用 sequelize 新增一個 post 使測試 pass', async (done) => {
    try {
      const input = {
        title: 'AAA',
        desc: 'BBB',
        price: 100,
      };

      let result;

      result.title.should.be.eq('AAA');
      result.desc.should.be.eq('BBB');
      result.price.should.be.eq(100);
      done();
    } catch (e) {
      done(e);
    }
  });

  describe.only('practice find', () => {
    let models = null;
    let targetPost = null
    beforeEach(async (done) => {
      try {
        models = await task1_initModel();
        const data = {
          title: 'post a',
          desc: 'post desc',
          price: 100,
        };
        targetPost = await models.Post.create(data);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('使用 sequelize 尋找 targetPost ', async (done) => {
      try {

        let findTarget;

        findTarget.id.should.be.eq(targetPost.id);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('使用 sequelize 更新 targetPost 的資料', async (done) => {
      try {
        const input = {
          title: '123',
          desc: '456',
          price: 999,
        }

        let findTarget;
        let result;

        result.title.should.be.eq(input.title);
        result.desc.should.be.eq(input.desc);
        result.price.should.be.eq(input.price);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('使用 sequelize 刪除 targetPost', async (done) => {
      try {

        let findTarget;

        let check = await models.Post.findAll();
        (check.length === 0).should.be.true;
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
