
let username = document.getElementById("name")
let userage = document.getElementById("age")
let usergender = document.getElementById("gender")
let useremail = document.getElementById("email")


let datalist = []



document.getElementById("click").addEventListener("click", function () {
    var data = {
        uname: username.value,
        age: userage.value,
        email: useremail.value,
        gender: usergender.value,


    }

    console.log(data);
    apipost(data, apiget())

})



async function apipost(data) {
    let res = await fetch(`http://localhost:7272/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }, body: JSON.stringify(data)
    })
    let allData = await res.json()
    console.log(allData);


    document.getElementById("btn0").addEventListener("click", function () {
        console.log("mahmoud");
    })


}


async function apiget() {
    let res = await fetch(`http://localhost:7272/users`)
    resData = await res.json()
    console.log(resData.length);

    console.log(resData);

    if (resData.length != 0) {


        var cartona = ``
        for (let i = 0; i < resData.length; i++) {
            cartona += `
        

            <tr>
                <th scope="row">${resData[i].id}</th>
                <td>${resData[i].uname ? resData[i].uname : ''}</td>
                <td>${resData[i].age ? resData[i].age : ''}</td>
                <td>${resData[i].email ? resData[i].email : ''}</td>
                <td>${resData[i].gender ? resData[i].gender : ''}</td>
                <td>
                <button id='btn${i}' class="btn btn-danger mx-1" data-id="${resData[i].id}">
                delete
                </button>
                
                    <button class=" btn btn-warning">
                        update
                    </button>
                </td>
            </tr>
            


        `
            document.getElementById("retTable").innerHTML = cartona;
            document.getElementById(`btn${i}`).addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                deleteapi(id);
            });

        }

    }

    async function deleteapi(id) {
        let res = await fetch(`http://localhost:7272/users/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        });
        let data = await res.json();
        console.log(data);
    }


    

    




}
apiget()


