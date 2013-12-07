module ApplicationHelper
  def latlng_to_geojson_point(latlng, options = {})
    {
      type: options[:type] || 'Feature',
      geometry: {
        type: options[:geometry_type] || 'Point',
        coordinates: latlng
      },
      properties: {
          title: options[:title] || 'A Single Marker',
          description: options[:description] || 'Just one of me',
          'marker-size' => options[:marker_size] || 'large',
          'marker-color' => options[:marker_color] || '#f0a'
      }
    }
  end
end
