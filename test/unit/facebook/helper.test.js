import FacebookHelper from '../../../src/facebook/helper.js'

describe.only('facebook-helper', () => {
  let facebookHelper = null;

  before((done) => {
    let userId = "100000233810027";
    let token = "EAACEdEose0cBAGPqBhJXUtZA3ODNE6GLa5Qjl173vrYu40a5Nntj6XQjgIKimOwkvQUsuXCQIOVAsjheeUPkMiUgyLJyPMZA25vk9f2U2wRB5e4vzUFv21WJdZCmaYvZBaXWZA7EOUgyWUGEwlDNqFZB9BiiA7YTZAj6dY4WL5VcNnAuM9D85zyE7tWCcUJmlYZD";
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
});
