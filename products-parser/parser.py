from unittest import result
import requests
from bs4 import BeautifulSoup
import json
from constData import categories_urn, headers

urn = categories_urn
headers = headers


def get_all_categories_data():
    products = []
    result_data = []
    products_result = []
    count = 0
    product_id = 0

    for i in urn:
        url = f"https://fitaudit.ru/categories/{i}/energy"
        count += 1
        r = requests.get(url=url, headers=headers)

        with open(f"data/page_{count}.html", 'w', encoding='utf-8') as file:
            file.write(r.text)

    for i in range(1, 46):
        with open(f"data/page_{i}.html", encoding="utf-8") as file:
            src = file.read()

        soup = BeautifulSoup(src, 'lxml')

        table_items_cc = soup.find_all('tr', class_="table-item js__msr_cc")

        for item in table_items_cc:
            item_name = item.find('span', class_="tbl_name__link").text.strip()
            item_calorie = item.find('td', class_="tbl-value").text.strip()
            item_calorie_result = ''

            for i in list(item_calorie[:-6]):
                if i.isdigit():
                    item_calorie_result += i

            result_data.append({
                "product_name": item_name,
                "product_calorie": int(item_calorie_result),
                "grams": 100
            })
    for i in result_data:
        if i not in products:
            products.append(i)

    for p in products:
        product_id += 1
        products_result.append({
            "product_name": p['product_name'],
            "product_calorie": int(p['product_calorie']),
            "grams": 100,
            "id": product_id
        })

    with open(f'products.json', 'a', encoding='utf-8') as file:
        json.dump(products_result, file, indent=4, ensure_ascii=False)


def main():
    get_all_categories_data()


if __name__ == "__main__":
    main()
