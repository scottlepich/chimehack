class PhotoGeoTaggerController < ApplicationController

  def start_trip
    # display page
  end

  def end_trip
    trip_id = params[:id]

    # create directory and data file
    dir = File.join(Rails.root, 'data', 'trips', trip_id)
    if not Dir.exist?(dir)
      Dir.mkdir(dir)
    end
    file_name = File.join(dir, 'trip_data.json')

    File.open(file_name, 'w') do |f|
      f.puts(params.to_json.to_s)
    end

    # display page
  end

  def show_trip_map
    trip_id = params[:trip_id]
    dir = File.join(Rails.root, 'data', 'trips', trip_id)
    file_name = File.join(dir, 'gps_data.txt')
    gps_data = File.readlines(file_name)
    gps_data.map! { |l| l.chomp }

    gps_data.map! do |d|
      d.split(',')
    end

    t = gps_data[0][0].to_i
    duration = 0
    gps_data.each_with_index do |d, i|
      #d << "/data/trips/#{trip_id}/photos/#{i}.jpg"
      d << "/data/trips/1/photos/#{i}.jpg"
      duration = d[0].to_i - t
      d << (duration / 60)
    end

    @gps_data = gps_data

    dir = File.join(Rails.root, 'data', 'trips', trip_id)
    file_name = File.join(dir, 'trip_data.json')
    @trip_data = JSON.load(File.new(file_name).to_io)
    @trip_data['duration'] = duration
    @trip_data['fuel_required'] = @trip_data['fuel_start'].to_f - @trip_data['fuel_end'].to_f

    #@trip_data = {
    #    :name => 'weekly checkup',
    #    :from => 'abc',
    #    :to => 'xyz',
    #    :duration => duration,
    #    :vehicle => 'Honda 250',
    #    :fuel_required => '2.5 Liters'
    #}
  end

  def save_trip_data
    trip_id = params[:trip_id]

    # create directory and data file
    dir = File.join(Rails.root, 'data', 'trips', trip_id)
    if not Dir.exist?(dir)
      Dir.mkdir(dir)
    end
    file_name = File.join(dir, 'gps_data.txt')

    # some fake data
    t = Time.now - 2.hours
    data = []
    lat = rand(-90000..90000) / 1000.0
    long = rand(-180000..180000) / 1000.0

    lat = 37.7772883
    long = -122.4172494

    lat = -29.30832
    long = 27.49160

    data << "#{t.to_i},#{lat},#{long}"
    n = 10
    n.times do
      t = t + 5.minutes

      lat += rand(-150..150) / 10000.0
      long += rand(-150..150) / 10000.0

      data << "#{t.to_i},#{lat},#{long}"
    end

    # write data to file
    File.open(file_name, 'w') do |f|
      data.each do |d|
        f.puts(d)
      end
    end
  end

end
