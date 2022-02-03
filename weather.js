class Weather {
  constructor(city, country) {
    this.apiKey = '5d2bce9523de452c01c0eb1911d69a6a';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    // console.log(responseData);

    return responseData
  }

  // Change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}