mainContainer = document.querySelector('.container-explore')
opportunities = mainContainer.firstElementChild.firstElementChild
jobOpportunities = opportunities.querySelectorAll('.job')
let jobsArray = []
let jobs = {jobs: null}
for (let job of jobOpportunities){
    info = job.children[0]
    url = job.children[1]
    jobTitle = info.querySelector('.job_title').innerText
    jobLoc = info.querySelector('.job_location').innerText
    jobUrl = url.querySelector('.read-apply').getAttribute("href")
    jobInfo = {title: jobTitle, location: jobLoc, url: jobUrl}
    jobsArray.push(jobInfo)
}

jobs['jobs'] = jobsArray

console.log(jobs)