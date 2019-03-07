const { weatherservice: WeatherService } = global.sails.services

module.exports = {
  getWeather (req, res) {
    const { query: { lat, lng } } = req

    // TODO: validation에 대한 처리를 향후 별도의 Error 핸들링용 객체를 이용하는 방식으로 변경할 것
    if (!lat || !lng) return res.badRequest({ errorMessage: '위도와 경도는 필수 요소입니다.' })

    const response = WeatherService.getWeather(+lat, +lng)

    return res.json(response)
  }
}
