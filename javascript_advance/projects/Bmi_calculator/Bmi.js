//here we a submit type of event .
const form = document.querySelector('form');
//if i write this height out of the form ...then what condition is occurd ..
// we try to want values at the the particulat evennt time .its means when we click button the we got the values . but if we write out of the form then we got empty values ..

// this use case give you empty values .
//const height = parseInt(documnet.querySelector('#height').values)

//when we try to submit a  form , then the form must be submitted through get or post types..
// and after submit the values are reach to the server.. but here we did not send the values to server so we try to stop the values to server .
// here we have a method on event ...submit event..

// and we need also a call back function.

form.addEventListener('submit', function (e) {
  e.preventDefault() 
  // just stop the default function for some min by using preventDefault.
  //now we need/ select values //weight and height
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  //for results we don't nneed the parsInt because its a normal element.. 
  const results = (document.querySelector('#results'))

  if (height === '' || height < 0 || isNaN(height)) {

    //
    results.innerHTML = `please give a valid Height ${height}`;
  }

  else if (weight === '' || weight < 0 || isNaN(weight)) {

    //
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  else {
  const bmi = (weight / (height * height) * 10000).toFixed(2);
  results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

  const bmiValue = parseFloat(bmi); // convert to number for comparison
  const bmi_weight = document.querySelector('#weight-guide');

  if (bmi_weight) { // check if element exists
    let message = '';

    if (bmiValue < 18.6) {
      message = "You're underweight. Consider eating more balanced meals.";
    } else if (bmiValue >= 18.6 && bmiValue < 24.9) {
      message = "You're healthy! Keep maintaining your lifestyle.";
    } else {
      message = "You're overweight. Consider a healthy diet and regular exercise.";
    }

    bmi_weight.innerHTML = `<span>${message}</span>`;
  } else {
    console.error('Element with id="weight-guide" not found in HTML.');
  }
}


});
