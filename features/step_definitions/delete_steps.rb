Given(/^Open the homepage again$/) do
  @homepage = HomePage.new
  @homepage.load
end

When(/^Delete first bookmark$/) do
  @homepage.delete
end

Then(/^Search deleteItem "([^"]*)"$/) do | search_content |
  @homepage.search search_content
end

And(/^Only have (\d+) result$/) do | expect |
  expect(@homepage.result).to eq expect.to_i
end
