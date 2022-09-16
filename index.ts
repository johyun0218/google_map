/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example creates a simple polygon representing the Bermuda Triangle.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 5,
      center: { lat: 26.944078096765217, lng: -80.81865598809905 },
      mapTypeId: 'terrain',
    }
  );

  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 26.944078096765217, lng: -80.97795773297304 },
    { lat: 26.88040073435403, lng: -80.96422482393218 },
    { lat: 26.78236549440766, lng: -80.90929318776874 },
    { lat: 26.711236943581284, lng: -80.8049230790582 },
    { lat: 26.757843435278435, lng: -80.71703246119668 },
    { lat: 26.787269270782733, lng: -80.70329955215583 },
    { lat: 26.846098053043026, lng: -80.66759398864959 },
    { lat: 26.8877499552676, lng: -80.63188842514334 },
    { lat: 26.909794749891443, lng: -80.61815551610248 },
    { lat: 27.00527242640183, lng: -80.62364867971883 },
    { lat: 27.061541808190835, lng: -80.65111449780055 },
    { lat: 27.110448769912914, lng: -80.66759398864959 },
    { lat: 27.200870311371435, lng: -80.83788206075626 },
    { lat: 26.944078096765217, lng: -80.97795773297304 },
  ];

  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
