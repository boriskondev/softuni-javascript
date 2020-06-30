function solveClasses() {
    class Article{
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        get content() {
            return this._content
        }

        set content(text) {
            if (text.length >= 150) {
                throw new Error( "Short reports content should be less then 150 symbols.");
            }
            this._content = text
        }

        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(obj) {
            if (Object.keys(obj).length === 2 && obj.hasOwnProperty('title') && obj.hasOwnProperty('author')) {
                this._originalResearch = obj;
            } else {
                throw new Error(`The original research should have author and title.`);
            }
        }

        addComment(comment) {
            this.comments.push(comment);
            return "The comment is added.";
        }

        toString() {
            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;
            if (this.comments.length > 0) {
                result += "\nComments:";
                this.comments.forEach(c => result += `\n${c}`);
            }
            return result
        }
    }

    class BookReview extends Article{
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName,  orderDescription) {
            for (let obj of this.clients) {
                if (obj.clientName === clientName && obj.orderDescription === orderDescription) {
                    throw new Error("This client has already ordered this review.")
                }
            }
            this.clients.push({clientName, orderDescription});
            return `${ clientName } has ordered a review for ${ this.book.name }`
        }

        toString() {
            let result = super.toString();
            result += `\nBook: ${ this.book.name }`
            if (this.clients.length > 0) {
                result += "\nOrders:"
                this.clients.forEach(c => result += `\n${ c.clientName } - ${ c.orderDescription }.`)
            }
            return result
        }
    }

    return {Article, ShortReports, BookReview}
}

let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
//------------------------------

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript\"s features are executed in C++ — the underlying language.")
console.log(short.toString());

//------------------------------

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());
