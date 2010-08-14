class Event < ActiveRecord::Base
  has_many :users
  has_many :pitches
end
