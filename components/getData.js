
let markerData =[];

const locations = [
  {
    name: "Oslo",
    lat: 59.923043,
    lng: 10.752839
  },
  {
    name: "Stockholm",
    lat: 59.339025,
    lng: 18.065818
  },
  {
    name: "Copenhagen",
    lat: 55.675507,
    lng: 12.574227
  },
  {
    name: "Berlin",
    lat: 52.521248,
    lng: 13.399038
  },
  {
    name: "Paris",
    lat: 48.856127,
    lng: 2.346525
  }
];

locations.forEach((item, index) => {
    const data = {
        position : [item.lat, item.lng],
        content : item.name,
        id : index,
        name: item.name,
    }
    markerData.push(data);

});


export default markerData;