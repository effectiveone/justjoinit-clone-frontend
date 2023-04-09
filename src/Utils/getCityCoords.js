const cities = {
  // Berlin: { lat: 52.52, lng: 13.405 },
  // "New York": { lat: 40.7128, lng: -74.006 },
  // "San Francisco": { lat: 37.7749, lng: -122.4194 },
  // London: { lat: 51.5074, lng: -0.1278 },
  // Sydney: { lat: -33.8688, lng: 151.2093 },
  Kraków: { lat: 50.0647, lng: 19.945 },
  Poznań: { lat: 52.4064, lng: 16.9252 },
  Wrocław: { lat: 51.1079, lng: 17.0385 },
  Śląsk: { lat: 50.2649, lng: 19.0238 },
  Trójmiasto: { lat: 54.4416, lng: 18.5601 },
};

export function getCityCoords(city) {
  return cities[city] ? cities[city] : null;
}
