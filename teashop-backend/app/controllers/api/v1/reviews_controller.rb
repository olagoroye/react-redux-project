class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    
   @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  # POST /reviews
  def create
    @tea = Tea.find(params[:tea_id])
    @review = @tea.reviews.build(review_params)

    if @review.save
      render json: @tea, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  #made a private route
  def destroy
    @review = Review.find(params["id"])
    @tea = @review.tea
    if @review.destroy
    render json: @tea
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    
    def review_params
      params.require(:review).permit(:comment, :tea_id)
    end
end
