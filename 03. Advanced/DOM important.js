// innerHTML - returns the HTML as string;
// value - for the elements inputed by user;
// textContent - the elements which are the text of the page

// ---- Difference between textNode and textContent ----
// - createTextNode() is a method and works just as its name says: it creates an element... 
// then you must do something with it (like in your example, where you append it as a child);
// so it is useful if you want to have a new element and place it somewhere
// - textContent is a property you may get or set, with a unique statement and nothing else;
// so it is useful when you only want to change the content of an already existing element

// Control + Shift + J - open console in Chrome
// Click on an element in Chrome and input $0 in console - gives reference to the given element
// .childNodes - returns a list on nodes

// Когато има формуляр, цъкането на бутона изпраща заявка към сървъра,
// затова ползваме preventDefault.