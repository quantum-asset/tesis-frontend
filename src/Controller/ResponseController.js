export class ResponseController {
  /**
   *
   * @param {boolean} status
   * @param {string} message
   * @param {any} data
   * @returns
   */
  static ok = (status, message, data) => {
    return {
      success:
        status.toLowerCase() === "ok" || status.toLowerCase() === "success",
      message,
      data,
    };
  };
  /**
   *
   * @param {string} message
   * @returns
   */
  static error = (message) => {
    return { success: false, message };
  };
}
