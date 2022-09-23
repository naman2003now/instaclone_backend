class ApiError {
  status: number;

  error: any;

  constructor(status: number, error: any) {
    this.status = status;
    this.error = error;
  }

  static BAD_REQUEST(error: any) {
    return new ApiError(400, error);
  }

  static NOT_FOUND(error: any) {
    return new ApiError(404, error);
  }
}

export default ApiError;
