class LibraryItem:
    def __init__(self, title, year, available=True):
        self.title = title
        self.year = year
        self.available = available

    def borrow(self):
        if self.available:
            self.available = False
            return self.title + " is borrowed"
        else:
            return self.title + " is not available"

    def return_item(self):
        self.available = True
        return self.title + " is returned"

    def __str__(self):
        return self.title + " (" + str(self.year) + ")"

    
class Book(LibraryItem):
    def __init__(self, title, year, author, pages):
        super().__init__(title, year)
        self.author = author
        self.pages = pages

    def read(self):
        return "Reading " + self.title

    def __str__(self):
        return "Book: " + super().__str__() + " by " + self.author
    
class DVD(LibraryItem):
    def __init__(self, title, year, duration):
        super().__init__(title, year)
        self.duration = duration

    def play(self):
        return "Playing " + self.title

    def __str__(self):
        return "DVD: " + super().__str__() + ", " + str(self.duration) + " min"
