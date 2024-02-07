const apiRequest = async (url = "", options = null, errMsg = null) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error("Please Reload The App");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
