require 'capybara'
require 'capybara/cucumber'
require 'rspec'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, browser: :firefox)
end

Capybara.default_driver = :selenium
Capybara.app_host = 'http://localhost:3050'
