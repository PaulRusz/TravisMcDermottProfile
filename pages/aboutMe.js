const name = "Travis McDermott"
const bio = "Passionate about helping the people of Delaware continue to thrive"
const skills = "what aren't I good at?"
const experience = [
    { company: 'New Castle County Police', role: 'Lietenant', years: '21'},
    { company: 'Newark City Council' , role: 'Deputy Mayor', years: '6'}
]

function displayAboutMe() {
    console.log('Name:', name);
    console.log('Bio:', bio);
    console.log('Skills:', skills.join(', '))
    console.log('Experience:');
    experience.forEach((job) => {
        console.log(`${job.role} at ${job.company} ($job.years} years)`)
    })
}

export { displayAboutMe }