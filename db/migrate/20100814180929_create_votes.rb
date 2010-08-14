class CreateVotes < ActiveRecord::Migration
  def self.up
    create_table :votes do |t|
      t.integer :pitch_id
      t.integer :user_id

      t.timestamps
    end
  end

  def self.down
    drop_table :votes
  end
end
