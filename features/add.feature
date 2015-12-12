Feature: Add
  Scenario: Add a bookmark
    Given Open the homepage for add test
    When Add bookmark title is "baidu" address is "http://www.baidu.com" to input
    And Search added "baidu"
    Then Have 1 result match
