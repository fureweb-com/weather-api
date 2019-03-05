const { weatherservice: WeatherService } = global.sails.services

module.exports = {
  getWeather (req, res) {
    const response = WeatherService.getWeather(req)

    if (response.errorMessage) return res.badRequest(response)
    else return res.json(response)
  }
}
