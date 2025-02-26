console.log(statsObj(moviesArray));

const data = {
    labels: Object.keys(statsObj(moviesArray)
    ),
    datasets: [{
        label: 'Movies Statistics',
        data: Object.values(statsObj(moviesArray)
        ),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
        ],
        hoverOffset: 4,


    }]
};

const config = {
    type: 'pie',
    data: data,

};


//
const data2 = {
    labels: Object.keys(statsObj(JSON.parse(localStorage.getItem("favArray")))
    ),
    datasets: [{
        label: 'Favorit Movies Statistics',
        data: Object.values(statsObj(JSON.parse(localStorage.getItem("favArray")))
        ),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
        ],
        hoverOffset: 4,


    }]
};

const config2 = {
    type: 'pie',
    data: data2,

};

window.onload = function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);

    const ctx2 = document.getElementById('myChart2').getContext('2d');
    new Chart(ctx2, config2);


};





// document.getElementById("pie").appendChild(statsObj(moviesArray))