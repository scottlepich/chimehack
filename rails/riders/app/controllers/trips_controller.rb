class TripsController < ApplicationController

  def index

  end


  def edit

  end


  # playback/data consumption: mapview 
  def show
    render action: :index
  end

  # add notes along gps locations during a trip
  def record

  end

end