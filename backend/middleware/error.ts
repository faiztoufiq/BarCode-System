// import ErrorHandler from "../utils/errorHandler";

// export default (err: { statusCode: any;stack:any;value:any; message: any; name: string; errors: { [s: string]: unknown; } | ArrayLike<unknown>; }, req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: { success: boolean; error: any; description: any; stack: any; }): void; new(): any; }; }; }, next: any) => {
//   let error = { ...err };

//   error.statusCode = err && err.statusCode ? err.statusCode : 500;
//   error.message = err && err.message ? err.message : "Internal Server Error";

//   if (err.name === "ValidationError") {
//     const message = Object.values(err.errors).map((value) => (value as { message: string }).message);
//     error = new ErrorHandler(  message, 400);
//   }
  
//   res?.status(error.statusCode).json({
//     success: false,
//     error,
//     description: error.message,
//     stack: process.env.NODE_ENV === "production" ? null : error.stack,
//   });
// };
