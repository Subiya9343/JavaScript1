let details = {
    "Employees": [{
            "userId": "rirani",
            "jobTitleName": "Developer",
            "firstName": "Romin",
            "lastName": "Irani",
            "preferredFullName": "Romin Irani",
            "employeeCode": "E1",
            "region": "CA",
            "phoneNumber": "408-1234567",
            "emailAddress": "romin.k.irani@gmail.com"
        },
        {
            "userId": "thanks",
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "tomhanks@gmail.com"
        },
        {
            "userId": "Vikram",
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "vikram@gmail.com"
        },
        {
            "userId": "Lokesh",
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "lokesh@gmail.com"
        },
        {
            "userId": "Sateesh",
            "jobTitleName": "Program Directory",
            "firstName": "Tom",
            "lastName": "Hanks",
            "preferredFullName": "Tom Hanks",
            "employeeCode": "E3",
            "region": "CA",
            "phoneNumber": "408-2222222",
            "emailAddress": "sateesh@gmail.com"
        },
        {
            "userId": "nirani",
            "jobTitleName": "Developer",
            "firstName": "Neil",
            "lastName": "Irani",
            "preferredFullName": "Neil Irani",
            "employeeCode": "E2",
            "region": "CA",
            "phoneNumber": "408-1111111",
            "emailAddress": "neilrirani@gmail.com"
        }
    ]
};

buildTable(details.Employees);

function buildTable(data) {
    var table = document.getElementById("data-output");
    document.getElementById("data-output").style.backgroundColor.nth

    data.sort((a, b) => {
        return a.jobTitleName.localeCompare(b.jobTitleName);
    });

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${data[i].jobTitleName}</td>
                    <td>${data[i].userId}</td>
                    <td>${data[i].firstName}</td>
                    <td>${data[i].lastName}</td>
                    <td>${data[i].preferredFullName}</td>
                    <td>${data[i].employeeCode}</td>
                    <td>${data[i].region}</td>
                    <td>${data[i].phoneNumber}</td>
                    <td>${data[i].emailAddress}</td>
                </tr>`;
                
        table.innerHTML += row;
    }
    document.querySelectorAll("tr:nth-child(even)").forEach(row => row.style.backgroundColor = "lightblue");
}
