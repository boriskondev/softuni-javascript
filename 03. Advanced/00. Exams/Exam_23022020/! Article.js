class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        } else {
            let username = this._likes[0];
            let restLikesNum = this._likes.length - 1;
            return `${username} and ${restLikesNum} others like this article!`;
        }
    }

    like(username) {
        let findUser = this._likes.filter(user => { return user === username });

        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }

        if (findUser.length === 0) {
            this._likes.push(username)
            return `${username} liked ${this.title}!`;
        } else {
            throw new Error("You can't like the same article twice!");
        }
    }

    dislike(username) {
        let findUser = this._likes.filter(user => { return user === username });

        if (findUser.length === 0) {
            throw new Error(`You can't dislike this article!`);
        } else {
            let indexToDelete = this._likes[username];
            this._likes.splice(indexToDelete, 1)
            return `${username} disliked ${this.title}`
        }
    }

    comment(username, content, id) {
        let commentFound = false;
        for (let comment of this._comments) {
            if (comment.id === id) {
                commentFound = true;
                let id = `${comment.id}.${comment.replies.length + 1}`;
                comment.replies.push({id, username, content});
                return "You replied successfully"
            }
        }

        if (id === undefined || !commentFound) {
            let newComment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            };

            this._comments.push(newComment);
            return `${username} commented on ${this.title}`
        }
    }

    toString(sortingType) {

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;

        let sortingTypes = {
            'asc': (a, b) => a.id - b.id,
            'desc': (a, b) => b.id - a.id,
            'username': (a, b) => a.username.localeCompare(b.username),
        };

        let sorting = sortingTypes[sortingType];

        this._comments.sort(sorting).map(currentElement => {
            result += `\n-- ${currentElement.id}. ${currentElement.username}: ${currentElement.content}`;
            if (currentElement.replies.length > 0) {
                currentElement.replies.sort(sorting).map(currentReply => {
                    result += `\n--- ${currentReply.id}. ${currentReply.username}: ${currentReply.content}`;
                });
            }
        });
        return result
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
