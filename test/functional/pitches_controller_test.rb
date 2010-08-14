require 'test_helper'

class PitchesControllerTest < ActionController::TestCase
  setup do
    @pitch = pitches(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pitches)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pitch" do
    assert_difference('Pitch.count') do
      post :create, :pitch => @pitch.attributes
    end

    assert_redirected_to pitch_path(assigns(:pitch))
  end

  test "should show pitch" do
    get :show, :id => @pitch.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @pitch.to_param
    assert_response :success
  end

  test "should update pitch" do
    put :update, :id => @pitch.to_param, :pitch => @pitch.attributes
    assert_redirected_to pitch_path(assigns(:pitch))
  end

  test "should destroy pitch" do
    assert_difference('Pitch.count', -1) do
      delete :destroy, :id => @pitch.to_param
    end

    assert_redirected_to pitches_path
  end
end
