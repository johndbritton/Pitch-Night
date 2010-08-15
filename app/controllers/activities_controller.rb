class ActivitiesController < ApplicationController
  # GET /activities
  # GET /activities.xml
  def index
    @activities = Pitch.all + Vote.all + Membership.all
    @activities.sort! { |a,b| b.created_at <=> a.created_at }
  
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @activities }
      format.json { render :json => @activities }
    end
  end
end
