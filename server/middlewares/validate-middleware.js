const validate = (schema) => async (req, resp, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.errors[0].message;
    const erro = {
      status: 400,
      message: message,
    };
    // resp.status(400).json({msg:message});
    next(erro);
  }
};

module.exports = validate;
