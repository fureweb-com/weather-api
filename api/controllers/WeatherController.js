const { weatherservice: WeatherService } = global.sails.services

module.exports = {
  getWeather (req, res) {
    return WeatherService.getWeather(req, res)
  }
}
