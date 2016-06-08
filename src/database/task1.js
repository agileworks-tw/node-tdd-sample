import models from '../models'


export default async function task1_initModel() {
  await models.sequelize.sync({force: true})
  return models;
}
