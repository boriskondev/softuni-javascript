function attachEvents() {
    const elements = {
        person(){return document.querySelector('input#person')},
        phone(){return document.querySelector('input#phone')},
        createContract(){return document.querySelector('button#btnCreate')},
        loadContacts() {return document.querySelector('button#btnLoad')},
        phonebook(){return document.querySelector('ul#phonebook')}
    };

    let contacts = [];
    const baseUrl = "http://localhost:3000/contacts";
    window.onload = load();

    elements.createContract().addEventListener('click', ()=>{
        const {value:person} = elements.person();
        const {value:phone} = elements.phone();
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({person, phone})
        })
            .then(response=>{
                return response.json();
            })
            .catch(err => console.log(err))
            .then(result => {
                contacts.push(result);
                elements.person().value = "";
                elements.phone().value = "";
                load();
            })
            .catch(err => console.log(err));
    });

    elements.loadContacts().addEventListener('click', load);

    function load(){
        elements.phonebook().innerHTML = "";
        fetch(baseUrl)
            .then((response)=>response.json())
            .then((result)=>{
                for(item in result){
                    contacts.push({[item]: {person: result[item].person, phone: result[item].phone}});
                    let listItem = document.createElement('li');
                    let buttonDelete = document.createElement('button');
                    buttonDelete.textContent = "Delete";
                    const id = item;
                    buttonDelete.addEventListener('click', (e)=>{
                        e.preventDefault();
                        fetch(baseUrl+`/${id}`,
                            {
                                method: 'DELETE'
                            })
                            .then(response => response.text())
                            .then(result => console.log(result))
                            .catch(error => console.log('error', error));
                        e.target.parentNode.remove();
                    });
                    const key = [item];
                    listItem.textContent = `${result[item].person} - ${result[item].phone}`;
                    listItem.appendChild(buttonDelete);
                    elements.phonebook().appendChild(listItem);
                };
            });

    }
}

attachEvents();