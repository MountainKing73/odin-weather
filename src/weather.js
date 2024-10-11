class Weather {
  constructor(data) {
    this.location = data.address;
    this.description = data.description;
    this.date = data.currentConditions.datetime;
    this.temperature = data.currentConditions.datetime;
    this.humidity = data.currentConditions.humidity;
    this.windspeed = data.currentConditions.windspeed;
    this.conditions = data.currentConditions.windspeed;
  }
}

export { Weather };
