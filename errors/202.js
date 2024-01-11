// 202.js
class AcceptedResponse {
    constructor(data) {
      this.status = 202;
      this.data = data;
    }
  
    send(response) {
      response.status(this.status).json(this.data);
    }
  }
  
  module.exports = {
    AcceptedResponse
  };
  