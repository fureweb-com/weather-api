module.exports = {
  getWeather (lat, lng) {
    // TODO: lat와 lng 범위를 정규화 처리하여 가장 가까운 곳으로 매칭되도록 한다.

    const weather = {
      // 임시 응답 작성
      lat,
      lng,

      // TODO: 날씨 관련 정보, 최저기온, 최고기온, 강수확률, 강수량, PM2.5, PM10, O3, NO2, CO, SO2 등등 위경도를 통해 얻을 수 있는 모든 정보를 응답 메시지로 작성한다.
    }

    return { weather }
  }
}
