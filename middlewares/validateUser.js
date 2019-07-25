const validateUser = (req, res, next) => {
    const { username, password, department } = req.body;
    const user = {
      username, password, department
    };
    if (typeof user.username === "undefined" || typeof user.department === "undefined" || typeof user.password === "undefined" ) {
      return res
        .status(404)
        .json({ errorMessage: "Please provide username as key, and value for the new user." });
    } 
    if(user.username.trim() === '' || user.department.trim() === '' || user.password.trim() === '') {
      return res
        .status(404)
        .json({ errorMessage: "Please provide value for the new user." });
    }
    next();
  };
  
  export default validateUser;