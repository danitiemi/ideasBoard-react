require 'test_helper'

class ModelControllerTest < ActionDispatch::IntegrationTest
  test "should get user" do
    get model_user_url
    assert_response :success
  end

  test "should get name" do
    get model_name_url
    assert_response :success
  end

  test "should get email" do
    get model_email_url
    assert_response :success
  end

  test "should get password_digest" do
    get model_password_digest_url
    assert_response :success
  end

end
