class CreatePitches < ActiveRecord::Migration
  def self.up
    create_table :pitches do |t|
      t.integer :number
      t.string :title
      t.string :problem
      t.string :solution
      t.string :goal
      t.string :need
      t.string :soft_name
      t.integer :event_id
      t.integer :user_id

      t.timestamps
    end
  end

  def self.down
    drop_table :pitches
  end
end
