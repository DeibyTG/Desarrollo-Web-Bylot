export function f_verMapa() {
  const empresaCoords = [39.077187, -0.512246];
  const map = L.map('map').setView(empresaCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);


  const marker = L.marker(empresaCoords).addTo(map)
    .bindPopup("<b>By/Lot</b><br>Villanueva de Castellón <br> Plaza del Olmo 11")
    .openPopup();

  document.getElementById('verRuta').addEventListener('click', async () => {
    const direccion = document.getElementById('direccion').value;
    if (!direccion) {
      alert("Por favor, introduce tu dirección.");
      return;
    }

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`);
      const data = await response.json();

      if (data.length === 0) {
        alert("No se encontró la dirección. Intenta con más detalle.");
        return;
      }

      const clienteCoords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];

      const clienteMarker = L.marker(clienteCoords).addTo(map)
        .bindPopup("Tu ubicación").openPopup();

      const routeResponse = await fetch(`https://router.project-osrm.org/route/v1/driving/${clienteCoords[1]},${clienteCoords[0]};${empresaCoords[1]},${empresaCoords[0]}?overview=full&geometries=geojson`);
      const routeData = await routeResponse.json();

      if (routeData.code !== 'Ok') {
        alert("No se pudo calcular la ruta.");
        return;
      }

      const route = L.geoJSON(routeData.routes[0].geometry, {
        style: { color: '#9d6bff', weight: 5 }
      }).addTo(map);

      const bounds = L.latLngBounds(clienteCoords, empresaCoords);
      map.fitBounds(bounds);

    } catch (error) {
      console.error(error);
      alert("Error al obtener la ruta. Inténtalo de nuevo.");
    }
  });
}
