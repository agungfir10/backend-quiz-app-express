module.exports = {
  encode: function (hash) {
    const buff = new Buffer.from(hash, 'base64');
    return buff.toString('ascii');
  },
  decode: function (value) {
    const buff = new Buffer.from(value);
    return buff.toString('base64');
  },
};
