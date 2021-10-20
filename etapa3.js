mainContainer = document.querySelector('.container-explore')
opportunities = mainContainer.firstElementChild.firstElementChild
jobOpportunities = opportunities.querySelectorAll('.job')

let jobsArray = []
for (let job of jobOpportunities){
    info = job.children[0]
    url = job.children[1]

    jobType = job.getAttribute("data-department")
    jobTitle = info.querySelector('.job_title').innerText
    jobLoc = info.querySelector('.job_location').innerText
    jobUrl = url.querySelector('.read-apply').getAttribute("href")

    jobInfo = {'Job Title': jobTitle, 'Location': jobLoc, 'Job Type': jobType ,'Job URL': jobUrl}
    jobsArray.push(jobInfo)
    
}

const bodyEl = document.body;
while (bodyEl.lastElementChild) {
    bodyEl.removeChild(bodyEl.lastElementChild);
}

const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const container = document.createElement('div')
const fragmentHead = document.createDocumentFragment();
const fragmentBody = document.createDocumentFragment();
const fragmentTr = document.createDocumentFragment();
const linkCss = document.createElement('link')
const tableContainer =  document.createElement('div')
const table =  document.createElement('table')
const thead =  document.createElement('thead')
const trhead =  document.createElement('tr')
const trbody =  document.createElement('tr')
const tbody =  document.createElement('tbody')
const titles = ['#','Job Title', 'Location', 'Job Type' ,'Job URL']

titles.map((title) => {
    let td = document.createElement('td');
    td.textContent = title
    fragmentHead.appendChild(td);
})

jobsArray.map((job,index) => {
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let a = document.createElement('a');
    let tr = document.createElement('tr');

    td1.textContent = index+1
    fragmentBody.appendChild(td1);
    td2.textContent = job['Job Title']
    fragmentBody.appendChild(td2);
    td3.textContent = job['Location']
    fragmentBody.appendChild(td3);
    td4.textContent = job['Job Type']
    fragmentBody.appendChild(td4);
    a.setAttribute("href", job['Job URL'])
    a.textContent = job['Job URL']
    td5.appendChild(a)
    fragmentBody.appendChild(td5);

    tr.appendChild(fragmentBody)

    fragmentTr.appendChild(tr)
})


linkCss.setAttribute("rel", "stylesheet");
linkCss.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
linkCss.setAttribute("integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm");
linkCss.setAttribute("crossorigin","anonymous")

h1.textContent = 'TEST: Julián Hincapié Villa'
h1.classList.add('bg-dark', 'text-uppercase', 'text-white')
h2.textContent = 'JOBS'
h2.classList.add('text-muted')

container.classList.add('container-fluid')

trhead.appendChild(fragmentHead);
thead.appendChild(trhead);
table.appendChild(thead)
tbody.appendChild(fragmentTr)
table.appendChild(tbody)
table.classList.add('table' ,'table-bordered', 'table-hover')
tableContainer.appendChild(table)
tableContainer.classList.add('table-responsive-md','m-auto')

document.body.appendChild(linkCss);
document.body.appendChild(h1);
document.body.appendChild(h2);
container.appendChild(tableContainer)
document.body.appendChild(container);