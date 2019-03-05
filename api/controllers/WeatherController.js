const { weatherservice: WeatherService } = global.sails.services

module.exports = {
  getWeather (req, res) {
    const weather = WeatherService.getWeather(req, res)
    return res.json(weather)
  }
}
