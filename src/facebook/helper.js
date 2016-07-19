var FB, exports;

FB = require("fb");

exports = module.exports = {};

exports.getFriends = function(userid, token, cb) {
  FB.setAccessToken(token);
  return FB.api(userid + '/friends', function(res) {
    return cb(null, res.data);
  });
};
