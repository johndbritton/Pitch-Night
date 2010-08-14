class Pitch < ActiveRecord::Base
  belongs_to :event
  belongs_to :pitcher, :class_name => "User", :foreign_key => "user_id"

  has_many :memberships
  has_many :members, :through => :memberships, :source => :user

  has_many :votes
  has_many :voters, :through => :votes, :source => :user
end
