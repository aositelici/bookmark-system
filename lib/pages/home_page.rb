class HomePage < SitePrism::Page
	set_url '/'

	element :keyword, '#search'
	elements :results, '#content li'
  element :deleteItem, ".delete[value='Code Generation Network - Language Translation ...']"
  element :deleteConfirm, "#delete"
  element :addButton, ".add"
  element :name, "#name"
  element :address1, "#addModal #address"
  element :addConfirm, "#add"

	def search content
		keyword.set content
		sleep 3
	end

	def result
		results.length
	end

  def delete
    deleteItem.click
    sleep 1
    deleteConfirm.click
    sleep 1
  end

  def add (title,address)
    addButton.click
    sleep 1
    name.set title
    sleep 3
    address1.set address
    sleep 1
    addConfirm.click
    sleep 1
  end

end
