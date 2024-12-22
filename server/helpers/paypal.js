const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUfWjpDTyeAmYUW0NlmN97Y7Mz9VtTd3JSDWXfN7xYV3lWvGFQl92VaNt1_WHcOpVbs4D_PsgJ7I0NEY",
  client_secret: "EO9Wh2QsjvP_P7VzAxEV-mEMDPH5iB9K07fuJL97xDFZOe2CPCSJqTKk3zQy3GlGE5EAESY6IE4NGgxV",
});

module.exports = paypal;
