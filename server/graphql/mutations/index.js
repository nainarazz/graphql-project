const addMutation = require('./add');
const updateMutation = require('./update');
const deleteMutation = require('./delete');

module.exports = {
  ...addMutation,
  ...updateMutation,
  ...deleteMutation,
};
