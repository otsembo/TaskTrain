class Todo < ApplicationRecord
  belongs_to :user

  enum :status, [ :CREATED, :STARTED, :COMPLETED, :CANCELLED ]
  enum :priority, [ :LOW, :MEDIUM, :HIGH ]

  validates :title, {
    length: { minimum: 5, maximum: 20 },
    presence: true
  }

  validates :description, {
    length: { minimum: 20 },
    presence: true
  }

  # validates :status, {
  #   numericality: { in: 0..3 }
  # }

  # validates :priority, {
  #   numericality: { in: 0..2 }
  # }

end
