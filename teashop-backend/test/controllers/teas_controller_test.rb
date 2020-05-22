require 'test_helper'

class TeasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tea = teas(:one)
  end

  test "should get index" do
    get teas_url, as: :json
    assert_response :success
  end

  test "should create tea" do
    assert_difference('Tea.count') do
      post teas_url, params: { tea: { brand: @tea.brand, description: @tea.description, img_url: @tea.img_url, name: @tea.name, price: @tea.price } }, as: :json
    end

    assert_response 201
  end

  test "should show tea" do
    get tea_url(@tea), as: :json
    assert_response :success
  end

  test "should update tea" do
    patch tea_url(@tea), params: { tea: { brand: @tea.brand, description: @tea.description, img_url: @tea.img_url, name: @tea.name, price: @tea.price } }, as: :json
    assert_response 200
  end

  test "should destroy tea" do
    assert_difference('Tea.count', -1) do
      delete tea_url(@tea), as: :json
    end

    assert_response 204
  end
end
