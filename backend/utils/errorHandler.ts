class ErrorHandler extends Error {
    statusCode: any;
  errors: {};
    constructor(message: string | string[], statusCode: number) {
      super(Array.isArray(message) ? message.join(", ") : message);
      this.statusCode = statusCode;
      this.stack = (new Error()).stack;
      this.name = "ErrorHandler";
      this.errors = {};
    }
  }
  
  export default ErrorHandler;
  