(async () => {
  const config = await import('@tinkoff/prettier-config');
  module.exports = config.default;
})();
