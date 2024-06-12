

const fullName = "Travis McDermott";
const bio = "Passionate about helping the people of Delaware continue to thrive";
const skills = ["what aren't I good at?", "I'm a jack of all trades", "I'm a master of all trades"];
const experience = [
    { company: 'New Castle County Police', role: 'Lietenant', years: '21' },
    { company: 'Newark City Council', role: 'Deputy Mayor', years: '6' }
];

export function displayAboutMe() {
    console.log('Name:', fullName);
    console.log('Bio:', bio);
    console.log('Skills:', skills.join(', '));
    console.log('Experience:');
    experience.forEach((job) => {
        console.log(`${job.role} at ${job.company} (${job.years} years)`); // Fixed template string
    });
}

displayAboutMe();