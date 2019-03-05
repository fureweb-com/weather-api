module.exports = {
  getWeather (req, res) {
    const { query: { lat, lng } } = req

    if (!lat || !lng) return res.badRequest({ errorMessage: '위도와 경도는 필수 요소입니다.' })
    // TODO: lat, lng에 대한 range validation 필요

    const weather = {
      // TODO: 날씨 관련 정보, 최저기온, 최고기온, 강수확률, 강수량, PM2.5, PM10, O3, NO2, CO, SO2 등등 위경도를 통해 얻을 수 있는 모든 정보를 응답 메시지로 작성한다.
    }

    res.json({ weather })
  }
}
