class Person {
    static id = 0;
    constructor(id, name, surname, card, address, phone, book) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.card = card;
        this.address = address;
        this.phone = phone;
        this.book = book;
    }

    static createNewPerson() {

        var subjectInfo = [
            document.getElementById('name'),
            document.getElementById('surname'),
            document.getElementById('card'),
            document.getElementById('address'),
            document.getElementById('phone'),
            document.getElementById('book'),
          ]
    
        // for (var i = 0; i < 6; i++) {
        //     if (subjectInfo[i].value.length == 0) {
        //       throw new Error('Validation failed')
        //     }
        //   }
    
        var person = new Person(
            Person.id,
            subjectInfo[0].value,
            subjectInfo[1].value,
            subjectInfo[2].value,
            subjectInfo[3].value,
            subjectInfo[4].value,
            subjectInfo[5].value
        )

        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');
        tr.setAttribute('class', `tr${Person.id}`);
        tbody.appendChild(tr)

        for (var i = 0; i <= 6; i++) {
            var td = document.createElement('td');
            if(i == 6) {
                td.innerHTML = `<button type="button" class="btn btn-danger" name=${Person.id}>Delete</button>`
                tr.appendChild(td)
            } else if (i == 5) {
                td.innerHTML = `<select class="form-control" id="bookSelect${Person.id}">`
                tr.appendChild(td)
                subjectInfo[i] = subjectInfo[i].value.split(',')
                for (var j = 0; j < subjectInfo[i].length; j++){
                    var bookSelect = document.getElementById(`bookSelect${Person.id}`)
                    bookSelect.innerHTML += `<option>${subjectInfo[i][j]}</option>`
                }
                tr.appendChild(td)
            }
            else {
                td.appendChild(document.createTextNode(subjectInfo[i].value))
                tr.appendChild(td)
            }
        }

        document.getElementById()
        Person.incrementId();
    }

    static incrementId() {
        this.id += 1;
    }
 }


 document.getElementById('submit').addEventListener('click', Person.createNewPerson)