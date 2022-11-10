import api from './instance'
function get_weather (city) {
    api.get(
        `/weather?city=${city}`
    )
}
export {get_weather}
export const getCityWeather = (city) => api.get(`/weather?city=${city}`);