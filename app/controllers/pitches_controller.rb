class PitchesController < ApplicationController
  # GET /pitches
  # GET /pitches.xml
  def index
    @pitches = Pitch.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @pitches }
    end
  end

  # GET /pitches/1
  # GET /pitches/1.xml
  def show
    @pitch = Pitch.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @pitch }
    end
  end

  # GET /pitches/new
  # GET /pitches/new.xml
  def new
    @pitch = Pitch.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @pitch }
    end
  end

  # GET /pitches/1/edit
  def edit
    @pitch = Pitch.find(params[:id])
  end

  # POST /pitches
  # POST /pitches.xml
  def create
    @pitch = Pitch.new(params[:pitch])

    respond_to do |format|
      if @pitch.save
        format.html { redirect_to(@pitch, :notice => 'Pitch was successfully created.') }
        format.xml  { render :xml => @pitch, :status => :created, :location => @pitch }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @pitch.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /pitches/1
  # PUT /pitches/1.xml
  def update
    @pitch = Pitch.find(params[:id])

    respond_to do |format|
      if @pitch.update_attributes(params[:pitch])
        format.html { redirect_to(@pitch, :notice => 'Pitch was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @pitch.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /pitches/1
  # DELETE /pitches/1.xml
  def destroy
    @pitch = Pitch.find(params[:id])
    @pitch.destroy

    respond_to do |format|
      format.html { redirect_to(pitches_url) }
      format.xml  { head :ok }
    end
  end
end
