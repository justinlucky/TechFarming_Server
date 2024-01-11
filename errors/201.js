// 201.js
class CreatedResponse {
    constructor(data) {
      this.status = 201;
      this.data = data;
    }
  
    send(response) {
      response.status(this.status).json(this.data);
    }
  }
  
  module.exports = {
    CreatedResponse
  };
  