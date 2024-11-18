class ResponseModel {
    success: any;
  description: any;
  content: any;
    constructor(success: any, description: any, content: any) {
      this.success = success;
      this.description = description;
      this.content = content;
    }
  }
  
  export default ResponseModel;
  