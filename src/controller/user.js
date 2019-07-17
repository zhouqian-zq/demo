const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const user = this.model('user'); // controller 里实例化模型
    const data = await user.select();
    return this.json(data);
  }
  async createAction() {
    // let param = this.post()
    // let id = await this.model('user').add({ name: param.name });
    let id = await this.model('user').add({ name: this.post('name') });
    const newuser = await this.model('user').where({ id: id }).find();

    return this.json({newuser});
  }
  async updateAction() {
    await this.model('user').where({name:'xiao'}).update({ name: this.post('name') });
    const newuser = await this.model('user').where({ name: this.post('name') }).find();

    return this.json({newuser});
  }
  async deleteAction() {
    await this.model('user').where({name:'zhou'}).delete({ name: this.post('name') });
    const newuser = await this.model('user').select();

    return this.json({newuser});
  }
  async findAction() {
    await this.model('user');
    const newuser = await this.model('user').where({id:3}).find();

    return this.json({newuser});
  }
}
