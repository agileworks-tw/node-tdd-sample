import FacebookHelper from '../../../src/facebook/helper.js'

describe('facebook-helper', () => {
  let facebookHelper = null;

  before((done) => {
    let userId = "100000233810027";
    let token = "EAACEdEose0cBAEwW8XaqzmqfzNLXZBynbm1Ft5lXnYPYNa5UX8febjOjCZCaD7ZBXftbT9LmfPuDyEoaiQ8EWZAUkpsMjbqjwyEMZCtsLJXiM3RzqMbsINzkygnZCn032u8n1rTq3pdZBlT8xoRVTfWJtZBpZBUdN3mDrQHwdpigzsbKgcSTo2hq3onDskcTZANz0ZD";
    facebookHelper = new FacebookHelper({userId, token});
    done();
  });

  it("get friends list", async (done) => {
    try {
      let friends = await facebookHelper.getFriends();
      console.log("friends", friends);
      (friends != null).should.be.true;
      friends.should.be.Array;
      friends[0].should.have.keys("name", "id");
      done();
    } catch (e) {
      done(e);
    }
  });

  it.only("publish post", async (done) => {
    try {
      let post = {
        message: 'test facebook post api'
      }
      let result = await facebookHelper.publishPost(post);
      console.log("result", result);
      done();
    } catch (e) {
      done(e);
    }
  });
});
