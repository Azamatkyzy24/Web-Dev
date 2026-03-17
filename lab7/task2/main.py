from Library import Book, DVD

b1 = Book("Harry Potter", 2001, "Rowling", 300)
d1 = DVD("Inception", 2010, 148)

items = [b1, d1]

for item in items:
    print(item)
    print(item.borrow())
    print(item.return_item())