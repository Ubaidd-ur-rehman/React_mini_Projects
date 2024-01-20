// Chart Options 
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },
    series: [{
        name: 'Population',
        data: [
            8550405,
            3971883,
            2720546,
            2296224,
            1567442,
            1563025,
            1469845,
            1394928,
            1300092,
            1026908
        ]
    }],
    xaxis: {
        categories: [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Philadelphia",
            "Phoenix",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"]
    },
    plotOptions:{
        bar:{
            horizontal:false
        }
    },
    fill:{
        colors:['#F44336', '#E91E63', '#9C27B0']
    },
    dataLabels:{
        enabled:false
    },
    title:{
        text:'Largest Pakistan cities By population',
        align:'center',
        margin:20,
        offsetY:20,
        style:{
            fontSize:'25',
            fontWeight:'2',
            color:'#F44336'
        }
    }
}

// Initiliation Chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render Option]

chart.render();


// Event button Handling
let toastBox=document.getElementById('toastBox')
let SuccessMsg='<i class="fa-solid fa-circle-check"></i>Poisition Vertically'
let ErrorMsg='<i class="fa-solid fa-circle-xmark"></i>Horizental Positioned'
let InvalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid credentials'
function showToast(msg){
        const toast=document.createElement('div')
        toast.classList.add('toast')
        toast.innerHTML=msg
        toastBox.appendChild(toast);
        if(msg.includes('Horizental')){
         toast.classList.add('error')
        }
        if(msg.includes('Invalid')){
         toast.classList.add('Invalid')
        }
        setTimeout(()=>{
           toast.remove('div')
        },6000)
}



document.querySelector('button').addEventListener('click',()=>{

  chart.updateOptions({
        plotOptions:{
            bar:{
                horizontal:true
            }
        },
      })
})

document.getElementById('Vertical').addEventListener('click',()=>{
    chart.updateOptions({
        plotOptions:{
            bar:{
                horizontal:false
            }
        },
      })
})