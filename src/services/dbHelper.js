function validateConfig(config) {
  if (!config.host || !config.user || !config.database) {
    return false;
  }

  return true;
}

function buildConnectionString(config) {
  return `${config.user}@${config.host}/${config.database}`;
}

module.exports = {
  validateConfig,
  buildConnectionString,
};