class HomePage < SitePrism::Page
	set_url '/'

	element :keyword, '#search'
	elements :results, '#content li'
  element :deleteItem, ".delete[value='Code Generation Network - Language Translation ...']"
  element :confirm, "#delete"

	def search content
		keyword.set content
		sleep 3
	end

	def result
		results.length
	end

  def delete
    deleteItem.click
    sleep 3
    confirm.click
    sleep 3
  end
end
