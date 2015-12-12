Given(/^Open the homepage for add test$/) do
  @homepage = HomePage.new
  @homepage.load
end

When(/^Add bookmark title is "([^"]*)" address is "([^"]*)" to input$/) do | title, address|
  @homepage.add title, address
end

And(/^Search added "([^"]*)"$/) do | search_content |
  @homepage.search search_content
end

Then(/^Have (\d+) result match$/) do | expect |
  expect(@homepage.result).to eq expect.to_i
end
