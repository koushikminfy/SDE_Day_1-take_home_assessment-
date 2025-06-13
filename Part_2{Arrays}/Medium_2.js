const scores = [25, 80, 45, 95, 60, 75];


// i used if statement here becasue of hard.js file it is accessing full output of this code, if statement make sure ,it run only if the medium_2 is run directly
if (require.main === module) {
  const newScores = scores.filter(function(score) {
    return score >= 70;
  });

  console.log(scores); 
  console.log(newScores); 
}

module.exports = scores;
