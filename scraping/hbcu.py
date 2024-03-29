
# from bs4 import BeautifulSoup
# import requests

# page_to_scrape = requests.get("https://theapplication.org/fellowships")
# soup = BeautifulSoup(page_to_scrape.text, "html.parser")

# # Find all links with "HBCU" in their title
# links_with_hbcu = soup.find_all("a", title=lambda title: title and "HBCU" in title)

# # Print the href attribute of each link
# for link in links_with_hbcu:
#     print(link.get("href"))