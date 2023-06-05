import React, { useEffect } from 'react';

function MapComponent() {
  useEffect(() => {
    // Carga el script de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBibf2xhEER9xlTeXn0TGALZUrCuZ3AE9M`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      // Elimina el script de Google Maps al desmontar el componente
      document.head.removeChild(script);
    };
  }, []);

  function initMap() {
    // Crea el mapa
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -31.536438, lng: -68.521959 },
      zoom: 10,
    });

    // Agrega un marcador en las coordenadas
    const marker = new window.google.maps.Marker({
      position: { lat: -31.536438, lng: -68.521959 },
      map: map,
    });
  }

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default MapComponent;
