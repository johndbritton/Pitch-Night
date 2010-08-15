class ActivitiesController < ApplicationController
  # GET /activities
  # GET /activities.xml
  def index
    unless params[:user_id]
      @activities = Pitch.all + Vote.all + Membership.all
    else
      pitches = Pitch.find(:all, :conditions => ["user_id = ?", params[:user_id]])
      votes = Vote.find(:all, :conditions => ["user_id = ?", params[:user_id]])
      memberships = Membership.find(:all, :conditions => ["user_id = ?", params[:user_id]])
      @activities = pitches + votes + memberships
    end
    @activities.sort! { |a,b| b.created_at <=> a.created_at }

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @activities }
      format.json { render :json => @activities }
    end
  end
end
