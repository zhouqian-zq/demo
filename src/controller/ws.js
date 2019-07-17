const Base = require('./base.js');

module.exports = class extends Base {
  openAction() {
    console.log('ws open');
    this.broadcast('open','open2');
  }
  closeAction() {
    console.log('ws close');
    return this.success();
  } 
  messageAction() {
    this.wsData.data.data.time = think.datatime(new Date(), 'HH:mm:ss')
    this.broadcast('message',this.wsData.data);
  }
  onlineAction() {
    userList.push(id);
    this.boardcast('offline',`游客${id}上线`)
  }
  offlineAction() {
    const id =this.wsData.data.id;
    userList = userList.filter(userId=>userId!==id);
    this.boardcast('offline',`游客${id}下线`)
  }
}
